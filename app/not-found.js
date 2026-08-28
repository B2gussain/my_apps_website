import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-32 text-center">
        <span className="text-sm font-medium text-zinc-400">404</span>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Page not found
        </h1>
        <p className="max-w-sm text-zinc-500">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-2 flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Back home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
