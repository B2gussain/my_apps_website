import PhoneFrame from "@/app/components/PhoneFrame";

export default function VaultHeroPhones() {
  return (
    <div className="relative mx-auto  flex aspect-7/8 w-full max-w-105 items-center justify-center">
      <PhoneFrame
        src="/images/vault/login.jpeg"
        alt="Vault sign-up screen"
        className="absolute left-0 top-[6%] w-[40%] -rotate-6"
      />
      <PhoneFrame
        src="/images/vault/list.jpeg"
        alt="Vault password list screen"
        priority
        className="absolute right-0 top-0 w-[50%] rotate-3"
      />
    </div>
  );
}
