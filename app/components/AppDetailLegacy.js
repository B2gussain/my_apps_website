import { AppIcon, DownloadIcon } from "@/app/components/icons";
import PhoneMockup from "@/app/components/PhoneMockup";

// Generic app-detail template, used until an app gets its own bespoke
// design (see AppDetailNew + data/apps.js `page` block, currently just Vault).
export default function AppDetailLegacy({ app }) {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section
        className="border-b border-zinc-200/80"
        style={{ backgroundColor: `${app.accent}0d` }}
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center">
          <span
            className="flex h-20 w-20 items-center justify-center rounded-3xl"
            style={{ backgroundColor: `${app.accent}26`, color: app.accent }}
          >
            <AppIcon slug={app.slug} className="h-11 w-11" />
          </span>
          <div className="flex flex-col gap-2">
            <span
              className="mx-auto rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: `${app.accent}1a`, color: app.accent }}
            >
              {app.category}
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {app.name}
            </h1>
            <p className="mx-auto max-w-lg text-lg leading-8 text-zinc-500">
              {app.tagline}
            </p>
          </div>
          <a
            href={app.apkUrl}
            download
            className="flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: app.accent,
              boxShadow: `0 12px 24px -12px ${app.accent}`,
            }}
          >
            <DownloadIcon className="h-4 w-4" />
            Download APK
          </a>
          <p className="text-xs text-zinc-400">
            Version {app.version} &middot; {app.size} &middot; Android APK
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="border-b border-zinc-200/80">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-16">
          {app.description.map((paragraph) => (
            <p key={paragraph} className="text-center leading-7 text-zinc-600">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Screens */}
      <section className="border-b border-zinc-200/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-10  py-20">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              A quick look
            </h2>
            <p className="max-w-md text-zinc-500">
              Illustrative previews of {app.name} swap these for real
              screenshots any time.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {app.screens.map((screen) => (
              <PhoneMockup
                key={screen.title}
                variant={screen.variant}
                title={screen.title}
                accent={app.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Features
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {app.features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-2 rounded-2xl border border-zinc-200 p-6"
              >
                <h3 className="font-semibold text-zinc-900">{feature.title}</h3>
                <p className="text-sm leading-6 text-zinc-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-zinc-200/80">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Ready to try {app.name}?
          </h2>
          <a
            href={app.apkUrl}
            download
            className="flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: app.accent,
              boxShadow: `0 12px 24px -12px ${app.accent}`,
            }}
          >
            <DownloadIcon className="h-4 w-4" />
            Download APK
          </a>
        </div>
      </section>
    </div>
  );
}
