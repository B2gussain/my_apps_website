import PhoneFrame from "@/app/components/PhoneFrame";

const screenshots = [
  {
    src: "/images/calculator/default.jpeg",
    alt: "Calculator standard mode",
    caption: "Default View",
  },
  {
    src: "/images/calculator/colorsThemes.jpeg",
    alt: "Calculator color theme picker",
    caption: "Color Themes",
  },
  {
    src: "/images/calculator/uiStyles.jpeg",
    alt: "Calculator UI style picker",
    caption: "UI Styles",
  },
  {
    src: "/images/calculator/uiStyle_calculator1.jpeg",
    alt: "Calculator in Star Wars style",
    caption: "Star Wars Style",
  },
  {
    src: "/images/calculator/uiStyle_calculator2.jpeg",
    alt: "Calculator in Notebook style",
    caption: "Notebook Style",
  },
  {
    src: "/images/calculator/setting.jpeg",
    alt: "Calculator settings screen",
    caption: "Settings",
  },
];

export default function CalculatorScreenshots() {
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
