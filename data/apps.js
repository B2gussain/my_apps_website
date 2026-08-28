// Central place to describe every app shown on the site.
// Add a new object here (and drop its icon/screens/apk in /public) to publish a new app page at /<slug>.
export const apps = [
  {
    slug: "vault",
    name: "Vault",
    tagline: "Your passwords, secured simply.",
    category: "Password Manager",
    accent: "#6366f1", // indigo
    version: "1.0.0",
    size: "108.4 MB",
    apkUrl: "/apks/Vault.apk",
    // Homepage "collection" card copy
    badge: "PASSWORD MANAGER",
    blurb:
      "A calm, privacy-first place to store, search, and manage your passwords securely.",
    ctaTheme: "brand",
    summary:
      "Vault encrypts every saved account with AES-256-GCM and its own per-account key, unlocks with Face ID, fingerprint, or PIN, and auto-locks the instant you leave the app.",
    description: [
      "Vault is a lightweight password manager built for people who want their credentials organized without handing them over to the cloud. Everything is encrypted on your device, so your data stays yours.",
      "Add, search, and autofill logins in seconds, organize them into folders, and unlock the whole vault with a PIN or your fingerprint. No accounts, no ads, no tracking — just a fast, private place for your passwords.",
    ],
    features: [
      {
        title: "On-device encryption",
        description:
          "Every entry is encrypted locally before it ever touches storage — your master password never leaves your phone.",
      },
      {
        title: "Biometric unlock",
        description:
          "Get into your vault instantly with fingerprint or face unlock, backed by a PIN fallback.",
      },
      {
        title: "Smart organization",
        description:
          "Group logins into folders, star your most-used accounts, and search everything instantly.",
      },
      {
        title: "Built-in password generator",
        description:
          "Create strong, unique passwords on the spot and save them straight into the matching entry.",
      },
      {
        title: "Secure notes",
        description:
          "Store more than passwords — card details, recovery codes, and private notes all fit in the same vault.",
      },
      {
        title: "Offline first",
        description:
          "No account sign-up and no server round-trip. Vault works the same with or without a connection.",
      },
    ],
    screens: [
      { variant: "lock", title: "Unlock Vault" },
      { variant: "list", title: "Your Passwords" },
      { variant: "form", title: "Add New Entry" },
    ],
    // Content for the bespoke app-detail template (see app/[slug]/page.js).
    // Apps without a `page` block fall back to the generic template above.
    page: {
      eyebrow: "Privacy-first password manager",
      heading: ["Your passwords.", "Securely stored."],
      intro:
        "Vault keeps your accounts organized in one calm, private space—so the details that protect your digital life are always within reach.",
      trustNote: "Designed around privacy. No unnecessary noise.",
      featuresEyebrow: "MADE FOR PEACE OF MIND",
      featuresHeading: "Everything you need. Nothing you don't.",
      features: [
        {
          icon: "lock",
          title: "AES-256-GCM Encryption",
          description:
            "Every saved credential is encrypted before it ever touches the database — with its own per-account key.",
        },
        {
          icon: "shield",
          title: "Biometric + PIN Unlock",
          description:
            "Face ID or fingerprint for instant access, with automatic PIN fallback.",
        },
        {
          icon: "clock",
          title: "Auto-Lock",
          description:
            "Vault locks itself the instant the app leaves the foreground.",
        },
        {
          icon: "grid",
          title: "20+ Platforms Recognized",
          description:
            "Instagram, Gmail, WhatsApp, and more — matched with their own icons automatically.",
        },
        {
          icon: "clipboard",
          title: "One-Tap Copy",
          description:
            "Copy usernames, emails, or passwords straight to your clipboard.",
        },
        {
          icon: "palette",
          title: "14 Built-In Themes",
          description:
            "From Light and Dark to Cyber and Vapor — make it yours from Settings.",
        },
      ],
      closerLookEyebrow: "A CLOSER LOOK",
      closerLookHeading: "A clear view of every important detail.",
      fullFeaturesEyebrow: "THE FULL PICTURE",
      fullFeaturesHeading: "Everything inside Vault.",
      fullFeatures: [
        {
          icon: "lock",
          title: "Security & Encryption",
          items: [
            "AES-256-GCM envelope encryption for every saved credential",
            "Per-account encryption keys — no two vaults share key material",
            "Face ID / Fingerprint unlock with automatic PIN fallback",
            "Auto-lock the instant the app leaves the foreground",
            "Brute-force protection with rate-limited login attempts",
            "Security audit logging, rotated automatically every 90 days",
            "Short-lived access tokens with rotating refresh + reuse detection",
            "A transparent security model — no unverifiable “zero-knowledge” claims",
          ],
        },
        {
          icon: "layers",
          title: "Vault & Item Management",
          items: [
            "Three organized categories: Social Accounts, Websites, Gmail",
            "20+ recognized platforms with matching icons, plus a custom option",
            "Track password or Google sign-in per account",
            "Full add, edit, and delete control over every entry",
            "One-tap copy for usernames, emails, and passwords",
            "A quick-actions menu for fast edits and deletes",
          ],
        },
        {
          icon: "user",
          title: "Account & Profile",
          items: [
            "Multiple vaults on one device — switch anytime",
            "Editable profile with clear save confirmation",
            "Typed confirmation required to delete an account",
            "Logout and deletion kept separate from sign-in screens",
          ],
        },
        {
          icon: "palette",
          title: "Design & Personalization",
          items: [
            "14 built-in themes, switchable anytime from Settings",
            "Animated, branded login, signup, and unlock screens",
            "Edge-to-edge layout with a transparent system nav bar",
          ],
        },
        {
          icon: "code",
          title: "Platform",
          items: [
            "Built with React Native + Expo for iOS & Android",
            "Node.js/Express backend, MongoDB persistence",
            "Deployed serverless on Vercel",
            "Installable native Android APK via EAS Build",
          ],
        },
      ],
      ctaEyebrow: "VAULT FOR ANDROID",
      ctaHeading: "Download Vault and keep your passwords organized.",
      ctaText: "A quiet, focused place for your most important account details.",
      ctaMeta: "Android APK · Version 1.0 · Privacy-first by design",
    },
  },
  {
    slug: "calculator",
    name: "Calculator",
    tagline: "Everyday math, done right.",
    category: "Utility",
    accent: "#2563eb", // blue
    version: "1.0.0",
    size: "81.7 MB",
    apkUrl: "/apks/Calculator.apk",
    // Homepage "collection" card copy
    badge: "EVERYDAY TOOL",
    blurb:
      "Clean, fast, and effortless calculations for the small decisions that keep moving.",
    ctaTheme: "dark",
    summary:
      "Calculator pairs a hand-built math engine (no eval()) with real scientific functions, calculation history, and 8 color themes × 8 UI styles you can freely mix and match.",
    description: [
      "Calculator strips away the clutter and focuses on what a calculator app is actually for: fast, reliable math. Standard mode covers everyday calculations, while scientific mode is one swipe away when you need it.",
      "Every calculation is saved to a running history, so you can retrace your steps, copy an old result, or pick up right where you left off — all in a clean interface that stays out of your way.",
    ],
    features: [
      {
        title: "Standard & scientific modes",
        description:
          "Switch between a simple everyday keypad and a full scientific layout with trig, logs, and more.",
      },
      {
        title: "Calculation history",
        description:
          "Every result is saved automatically, so you can scroll back and reuse a previous calculation instantly.",
      },
      {
        title: "Large, readable display",
        description:
          "A big expression and result display makes it easy to check your work at a glance.",
      },
      {
        title: "Instant copy & reuse",
        description:
          "Tap any result to copy it or feed it straight back into your next calculation.",
      },
      {
        title: "No permissions needed",
        description:
          "Calculator doesn't ask for internet, contacts, or storage access — it just does math.",
      },
    ],
    screens: [
      { variant: "display", title: "Standard Mode" },
      { variant: "grid", title: "Scientific Mode" },
      { variant: "list", title: "History" },
    ],
    // Content for the bespoke app-detail template (see app/[slug]/page.js).
    // Apps without a `page` block fall back to the generic template above.
    page: {
      eyebrow: "Quick, clear, everyday math",
      heading: ["Simple calculations.", "Instantly."],
      intro:
        "A clean, fast calculator designed for the everyday sums, splits, and quick checks that move your day forward.",
      secondaryCta: "See why it's different",
      quickFacts: [
        { title: "Fast", description: "No clutter" },
        { title: "Light", description: "Built for daily use" },
      ],
      featuresEyebrow: "MADE TO DISAPPEAR",
      featuresHeading: "The tool you open, use, and trust.",
      featuresIntro:
        "Calculator cuts away the visual noise so your numbers stay at the center. Thoughtful contrast, generous spacing, and fast feedback make every tap feel immediate.",
      features: [
        {
          icon: "code",
          title: "Custom Math Engine",
          description:
            "A hand-built parser — no eval() — with proper operator precedence and right-associative exponentiation.",
        },
        {
          icon: "grid",
          title: "Scientific Mode",
          description:
            "sin, cos, tan, ln, log, √, π, e, xʸ, x², with inverse functions via the 2nd-function shift.",
        },
        {
          icon: "bolt",
          title: "Live-Preview Results",
          description: "See your answer before you even press equals.",
        },
        {
          icon: "clock",
          title: "Calculation History",
          description: "Revisit past results, tap to reuse, or clear it all.",
        },
        {
          icon: "palette",
          title: "8 Themes × 8 Styles",
          description:
            "64 look combinations — mix any color theme with any UI style.",
        },
        {
          icon: "shield",
          title: "Graceful Error Handling",
          description:
            "A friendly toast for invalid input, never a crash or dead end.",
        },
      ],
      closerLookEyebrow: "DESIGNED FOR CLARITY",
      closerLookHeading: "Your numbers, beautifully focused.",
      fullFeaturesEyebrow: "THE FULL PICTURE",
      fullFeaturesHeading: "Everything inside Calculator.",
      fullFeatures: [
        {
          icon: "bolt",
          title: "Calculation Engine",
          items: [
            "Custom-built math parser (no eval()) with proper operator precedence",
            "Basic mode: +, −, ×, ÷, parentheses, percent, decimal, and sign toggle (±)",
            "Scientific mode: sin, cos, tan, ln, log, √, π, e, xʸ, x², with a Degree/Radian toggle",
            "Shift (2nd-function) toggle for sin⁻¹, cos⁻¹, tan⁻¹, eˣ, 10ˣ",
            "Live-preview results — see the answer before pressing =",
            "Smart auto-opening/closing parentheses, plus reciprocal (1/x)",
            "Calculation history — view, reuse, or clear past results",
            "Graceful invalid-input handling with a friendly toast, never a crash",
          ],
        },
        {
          icon: "palette",
          title: "Color Themes",
          items: [
            "8 built-in themes: Classic, Dark, Neon, Pastel, Ocean, Sunset, Forest, Monochrome",
            "Instant live preview with color swatches, applied app-wide immediately",
          ],
        },
        {
          icon: "grid",
          title: "UI Styles",
          items: [
            "8 styles: Classic, Cyberpunk, Star Wars, Old School, Notebook, Sketch, Futuristic, Emoji",
            "Each style changes fonts, button shapes, and the full color skin — not just an accent",
            "Notebook style has a genuine ruled-paper look with a red margin line",
            "Emoji style renders number and operator buttons as emoji",
            "Freely combinable with any color theme — e.g. Ocean theme + Cyberpunk style",
          ],
        },
        {
          icon: "user",
          title: "Personalization & Settings",
          items: [
            "Theme and UI Style are saved and restored automatically on every launch",
            "Settings screen for Themes, UI Styles, and About",
            "About screen with app description, developer credit, and live app version",
            "Smooth slide-in screen transitions",
            "Scientific/Basic mode toggle right from the main screen",
          ],
        },
        {
          icon: "code",
          title: "Polish & Platform",
          items: [
            "Custom app icon, splash screen, and Android adaptive icon",
            "Built for iOS, Android, and Web from one codebase (Expo + React Native)",
          ],
        },
      ],
      ctaHeading: "A calculator designed for everyday use.",
      ctaText:
        "Open it for a quick split, a shopping total, or whatever number comes next.",
      ctaMeta: "Android APK · Version 1.0 · Lightweight and fast",
    },
  },
];

export function getAppBySlug(slug) {
  return apps.find((app) => app.slug === slug);
}
