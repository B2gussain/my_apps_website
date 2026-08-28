import Link from "next/link";
import { apps } from "@/data/apps";
import { ArrowIcon } from "@/app/components/icons";

export default function AppFooter({ app }) {
  const other = apps.find((a) => a.slug !== app.slug);

  return (
    <footer className="border-t border-zinc-200/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-sm sm:flex-row sm:justify-between">
        <Link
          href="/"
          className="font-semibold text-zinc-900"
        >
          Bittu Apps
        </Link>
        <p className="text-zinc-400">
          &copy; {new Date().getFullYear()} Bittu. Designed and developed by
          Bittu.
        </p>
        {other ? (
          <Link
            href={`/${other.slug}`}
            className="flex items-center gap-1 font-medium text-blue-600 transition-opacity hover:opacity-80"
          >
            Explore {other.name}
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </footer>
  );
}
