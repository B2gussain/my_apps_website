import { notFound } from "next/navigation";
import { getAppBySlug } from "@/data/apps";
import AppHeader from "@/app/components/AppHeader";
import AppFooter from "@/app/components/AppFooter";

export default async function AppLayout({ children, params }) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <AppHeader app={app} />
      <main className="flex flex-1 flex-col">{children}</main>
      <AppFooter app={app} />
    </div>
  );
}
