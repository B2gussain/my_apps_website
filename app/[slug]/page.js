import { notFound } from "next/navigation";
import { apps, getAppBySlug } from "@/data/apps";
import AppDetailVault from "@/app/components/AppDetailVault";
import AppDetailCalculator from "@/app/components/AppDetailCalculator";
import AppDetailLegacy from "@/app/components/AppDetailLegacy";

// Bespoke per-app templates. An app without an entry here (or without a
// `page` data block) falls back to the generic AppDetailLegacy template.
const detailTemplates = {
  vault: AppDetailVault,
  calculator: AppDetailCalculator,
};

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};

  return {
    title: app.name,
    description: app.summary,
  };
}

export default async function AppPage({ params }) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const Template = app.page ? detailTemplates[app.slug] : null;
  return Template ? <Template app={app} /> : <AppDetailLegacy app={app} />;
}
