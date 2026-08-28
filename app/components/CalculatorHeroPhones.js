import PhoneFrame from "@/app/components/PhoneFrame";

export default function CalculatorHeroPhones() {
  return (
    <div className="relative mx-auto flex aspect-7/8 w-full max-w-[420px] items-center justify-center">
      <PhoneFrame
        src="/images/calculator/default.jpeg"
        alt="Calculator standard mode"
        className="absolute left-0 top-[6%] w-[50%] -rotate-6"
      />
      <PhoneFrame
        src="/images/calculator/uiStyle_calculator2.jpeg"
        alt="Calculator in Notebook style"
        priority
        className="absolute right-0 top-0 w-[54%] rotate-3"
      />
    </div>
  );
}
