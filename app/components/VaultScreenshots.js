import PhoneFrame from "@/app/components/PhoneFrame";

const screenshots = [
  {
    src: "/images/vault/login.jpeg",
    alt: "Vault sign-up screen",
    caption: "Sign Up",
  },
  {
    src: "/images/vault/biometric.jpeg",
    alt: "Vault unlock screen with PIN and biometrics",
    caption: "Unlock",
  },
  {
    src: "/images/vault/list.jpeg",
    alt: "Vault password list screen",
    caption: "Your Passwords",
  },
  {
    src: "/images/vault/add.jpeg",
    alt: "Adding a new password in Vault",
    caption: "Add Password",
  },
  {
    src: "/images/vault/setting.jpeg",
    alt: "Vault settings screen",
    caption: "Settings",
  },
  {
    src: "/images/vault/themes.jpeg",
    alt: "Vault theme picker with color options",
    caption: "Themes",
  },
];

export default function VaultScreenshots() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
      {screenshots.map((shot) => (
        <div key={shot.src} className="flex flex-col items-center gap-4">
          <PhoneFrame src={shot.src} alt={shot.alt} className="w-full max-w-[180px]" />
          <span className="text-sm font-medium text-zinc-900">
            {shot.caption}
          </span>
        </div>
      ))}
    </div>
  );
}
