import Link from "next/link";
import { AppIcon, DownloadIcon } from "@/app/components/icons";

export default function AppHeader({ app }) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={`/${app.slug}`}
          className="flex items-center gap-2.5 text-base font-semibold tracking-tight"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: app.accent }}
          >
            <AppIcon slug={app.slug} className="h-4 w-4" />
          </span>
          <span className="text-zinc-900">{app.name} </span>
        </Link>

        <a
          href={app.apkUrl}
          download
          className="flex h-10 items-center gap-2 rounded-full px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: app.accent }}
        >
          <DownloadIcon className="h-4 w-4" />
          Download APK
        </a>
      </div>
    </header>
  );
}
