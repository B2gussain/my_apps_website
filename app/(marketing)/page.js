import { apps } from "@/data/apps";
import HeroPhones from "@/app/components/HeroPhones";
import CollectionCard from "@/app/components/CollectionCard";
import {
  ShieldIcon,
  PhoneIcon,
  CodeIcon,
  MailIcon,
  GlobeIcon,
  LinkedInIcon,
  GitHubIcon,
  BoltIcon,
  ClockIcon,
  RefreshIcon,
  ArrowIcon,
  ArrowDownIcon,
} from "@/app/components/icons";

const aboutLinks = [
  { label: "Email", href: "mailto:bittubgussain@gmail.com", icon: MailIcon },
  { label: "Portfolio", href: "https://b2dev.in", icon: GlobeIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bittu-gussain/",
    icon: LinkedInIcon,
  },
  { label: "GitHub", href: "https://github.com/B2gussain", icon: GitHubIcon },
];

const standards = [
  {
    icon: BoltIcon,
    title: "Simple & easy to use",
    description: "Clear flows that feel natural from the first tap.",
  },
  {
    icon: ShieldIcon,
    title: "Privacy focused",
    description: "Your information is treated with care and restraint.",
  },
  {
    icon: ClockIcon,
    title: "Built for everyday use",
    description: "Useful tools for the moments that happen every day.",
  },
  {
    icon: RefreshIcon,
    title: "Continuously improving",
    description: "Thoughtful updates, shaped by real use.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="border-b border-zinc-200/80 bg-linear-to-b from-indigo-50 via-blue-50/60 to-transparent">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-8 sm:py-12 lg:grid-cols-2">
          <div className="flex min-w-0 flex-col items-start gap-6">
            <span className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Independent mobile app studio
            </span>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Apps built to solve everyday problems.
            </h1>

            <p className="max-w-md text-lg leading-8 text-zinc-500">
              Bittu creates focused mobile experiences that are private by
              design, fast to use, and beautiful in the moments that matter.
            </p>

            <div className="flex w-full  gap-3 flex-row">
              <a
                href="#apps"
                className="flex flex-1 sm:flex-none h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Explore Apps
                <ArrowDownIcon className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="sm:flex hidden h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
              >
                About Developer
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="flex items-center -space-x-1 text-blue-600">
                <ShieldIcon className="h-4 w-4" />
                <PhoneIcon className="h-4 w-4" />
              </span>
              Useful products, made with care.
            </div>
          </div>

          <div className="min-w-0">
            <HeroPhones />
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="apps" className="scroll-mt-20 border-b border-zinc-200/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-8 sm:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-widest text-blue-600">
                THE COLLECTION
              </span>
              <h2 className="max-w-md text-3xl font-bold tracking-tight text-zinc-900">
                Built for your day, not your attention.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-zinc-500 sm:text-right">
              A small, growing collection of mobile tools with one promise: less
              friction, more focus.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {apps.map((app) => (
              <CollectionCard key={app.slug} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* About the maker */}
      <section id="about" className="scroll-mt-20 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-8 sm:py-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col justify-between gap-10 rounded-3xl bg-blue-600 p-8 sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600">
              <CodeIcon className="h-5 w-5" />
            </span>
            <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
              &ldquo;I build digital products that earn a place in your
              everyday.&rdquo;
            </p>
            <div className="flex flex-wrap gap-2">
              {["Android", "React Native", "Web", "Product design"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold tracking-widest text-blue-600">
              ABOUT THE MAKER
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900">
              Hi, I&apos;m Bittu a developer passionate about building useful,
              simple, and beautiful digital products.
            </h2>
            <p className="leading-7 text-zinc-500">
              From a quick calculation to a private password, every detail is
              shaped around clarity, performance, and respect for your time.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {aboutLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-zinc-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-zinc-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-8 sm:py-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-semibold tracking-widest text-blue-600">
              THE BITTU STANDARD
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Small apps, high standards.
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-2xl bg-white p-6 ring-1 ring-zinc-200"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-zinc-900">{title}</h3>
                <p className="text-sm leading-6 text-zinc-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
