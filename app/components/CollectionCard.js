import Link from "next/link";
import { AppIcon, ArrowIcon } from "@/app/components/icons";
import PhoneFrame from "@/app/components/PhoneFrame";

const previews = {
  vault: () => (
    <PhoneFrame
      src="/images/vault/list.jpeg"
      alt="Vault password list screen"
      className="w-30"
    />
  ),
  calculator: () => (
    <PhoneFrame
      src="/images/calculator/default.jpeg"
      alt="Calculator standard mode"
      className="w-30"
    />
  ),
};

export default function CollectionCard({ app }) {
  const Preview = previews[app.slug];
  const dark = app.ctaTheme === "dark";

  return (
    <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 sm:flex-row sm:items-stretch sm:justify-between">
      <div className="flex flex-col gap-4 sm:max-w-[220px]">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
          <AppIcon slug={app.slug} className="h-6 w-6" />
        </span>
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold tracking-wide text-blue-600">
            {app.badge}
          </span>
          <h3 className="text-xl font-semibold text-zinc-900">{app.name}</h3>
          <p className="text-sm leading-6 text-zinc-500">{app.blurb}</p>
        </div>
        <Link
          href={`/${app.slug}`}
          className={`mt-1 flex h-10 w-fit items-center gap-1.5 rounded-full px-5 text-sm font-medium text-white transition-opacity hover:opacity-90 ${
            dark ? "bg-zinc-900" : "bg-blue-600"
          }`}
        >
          Explore App
          <ArrowIcon className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="flex items-center justify-center rounded-2xl bg-zinc-50 p-4">
        {Preview ? <Preview /> : null}
      </div>
    </div>
  );
}
