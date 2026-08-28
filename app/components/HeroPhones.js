import PhoneFrame from "@/app/components/PhoneFrame";

export default function HeroPhones() {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-[420px] items-center justify-center sm:h-[460px]">
      <div className="absolute left-2 top-10 -rotate-6 sm:left-6">
        <PhoneFrame
          src="/images/vault/list.jpeg"
          alt="Vault password list screen"
          className="w-[150px] sm:w-[190px]"
        />
      </div>
      <div className="absolute right-0 top-0 rotate-3 sm:right-4">
        <PhoneFrame
          src="/images/calculator/default.jpeg"
          alt="Calculator standard mode"
          priority
          className="w-[160px] sm:w-[200px]"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 w-64 -translate-x-1/2 translate-y-1/3 rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-blue-600 shadow-xl shadow-slate-900/10">
        Two useful apps. One thoughtful studio.
      </div>
    </div>
  );
}
