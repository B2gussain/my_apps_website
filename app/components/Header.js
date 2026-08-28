import Link from "next/link";
import { SparkleIcon, ArrowUpRightIcon } from "@/app/components/icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 text-base font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white">
            <SparkleIcon className="h-4 w-4" />
          </span>
          <span className="text-zinc-900">
            Bittu <span className="text-blue-600">Apps</span>
          </span>
        </Link>
        <Link
          href="/#apps"
          className="flex h-10 items-center gap-1.5 rounded-full bg-blue-600 px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Explore Apps
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}
