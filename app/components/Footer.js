import Link from "next/link";
import { apps } from "@/data/apps";
import {
  MailIcon,
  GlobeIcon,
  LinkedInIcon,
  GitHubIcon,
} from "@/app/components/icons";

const socialLinks = [
  { label: "Email", href: "mailto:bittubgussain@gmail.com", icon: MailIcon },
  { label: "Portfolio", href: "https://b2dev.in", icon: GlobeIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bittu-gussain/",
    icon: LinkedInIcon,
  },
  { label: "GitHub", href: "https://github.com/B2gussain", icon: GitHubIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <span className="text-base font-semibold text-zinc-900">
            Bittu <span className="text-blue-600">Apps</span>
          </span>
          <p className="text-sm leading-6 text-zinc-500">
            Useful mobile software, independently made.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-zinc-900">
            Explore
          </span>
          <nav className="flex flex-col gap-2 text-sm text-zinc-500">
            {apps.map((app) => (
              <Link
                key={app.slug}
                href={`/${app.slug}`}
                className="w-fit transition-colors hover:text-zinc-900"
              >
                {app.name}
              </Link>
            ))}
            <Link
              href="/#about"
              className="w-fit transition-colors hover:text-zinc-900"
            >
              About Bittu
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-zinc-900">
            Stay in touch
          </span>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-zinc-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200/80 py-6">
        <p className="text-center text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Bittu. Designed and developed by Bittu.
        </p>
      </div>
    </footer>
  );
}
