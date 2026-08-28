import {
  BoltIcon,
  DownloadIcon,
  AppIcon,
  featureIcons,
} from "@/app/components/icons";
import { heroScreens, closerLookPanels } from "@/app/components/AppScreens";
import FullFeatureList from "@/app/components/FullFeatureList";

export default function AppDetailCalculator({ app }) {
  const { page } = app;
  const HeroScreen = heroScreens[app.slug];
  const CloserLook = closerLookPanels[app.slug];

  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="border-b border-zinc-200/80 bg-linear-to-b from-indigo-50 via-blue-50/60 to-transparent">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-8 sm:py-12 lg:grid-cols-2">
          <div className="flex min-w-0 flex-col items-start gap-6">
            <span className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
              <BoltIcon className="h-3.5 w-3.5" style={{ color: app.accent }} />
              {page.eyebrow}
            </span>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              {page.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="max-w-md text-lg leading-8 text-zinc-500">
              {page.intro}
            </p>

            <div className="flex  gap-3 flex-row">
              <a
                href={app.apkUrl}
                download
                className="flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: app.accent }}
              >
                Download APK
                <DownloadIcon className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
              >
                {page.secondaryCta}
              </a>
            </div>

            {/* <div className="flex items-center gap-8">
              {page.quickFacts.map((fact) => (
                <div key={fact.title} className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-zinc-900">
                    {fact.title}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {fact.description}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          <div className="flex min-w-0 justify-center">
            {HeroScreen ? <HeroScreen /> : null}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-20 border-b border-zinc-200/80 bg-zinc-50"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-8 sm:py-12 lg:items-center">
          <div className="flex min-w-0 flex-col gap-4">
            <span
              className="text-xs font-semibold tracking-widest"
              style={{ color: app.accent }}
            >
              {page.featuresEyebrow}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              {page.featuresHeading}
            </h2>
            <p className="leading-7 text-zinc-500">{page.featuresIntro}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {page.features.map((feature) => {
              const Icon = featureIcons[feature.icon] ?? BoltIcon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <Icon className="h-5 w-5" style={{ color: app.accent }} />
                  <h3 className="font-semibold text-zinc-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-6 text-zinc-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closer look */}
      <section className="bg-indigo-50/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-8 sm:py-12">
          <div className="flex flex-col gap-3">
            <span
              className="text-xs font-semibold tracking-widest"
              style={{ color: app.accent }}
            >
              {page.closerLookEyebrow}
            </span>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-zinc-900">
              {page.closerLookHeading}
            </h2>
          </div>

          {CloserLook ? <CloserLook /> : null}
        </div>
      </section>

      {/* Full feature list */}
      {page.fullFeatures ? (
        <section>
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-8 sm:py-12">
            <div className="flex flex-col items-center gap-3 text-center">
              <span
                className="text-xs font-semibold tracking-widest"
                style={{ color: app.accent }}
              >
                {page.fullFeaturesEyebrow}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                {page.fullFeaturesHeading}
              </h2>
            </div>

            <FullFeatureList accent={app.accent} groups={page.fullFeatures} />
          </div>
        </section>
      ) : null}

      {/* CTA banner */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-8 sm:py-12">
          <div
            className="flex flex-col items-start justify-between gap-8 rounded-3xl p-8 sm:flex-row sm:items-center sm:p-12"
            style={{ backgroundColor: app.accent }}
          >
            <div className="flex flex-col gap-4">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white"
                style={{ color: app.accent }}
              >
                <AppIcon slug={app.slug} className="h-5 w-5" />
              </span>
              <h2 className="max-w-md text-2xl font-bold leading-snug text-white sm:text-3xl">
                {page.ctaHeading}
              </h2>
              <p className="max-w-md text-white/80">{page.ctaText}</p>
            </div>

            <div className="flex flex-col w-full sm:w-auto items-center gap-3 sm:items-end">
              <a
                href={app.apkUrl}
                download
                className="flex h-12 sm:w-auto w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium transition-opacity hover:opacity-90"
                style={{ color: app.accent }}
              >
                <DownloadIcon className="h-4 w-4" />
                Download APK
              </a>
              <p className="text-xs text-white/70">{page.ctaMeta}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
