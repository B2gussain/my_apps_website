import Image from "next/image";

// Realistic device chrome wrapping a real app screenshot (738x1600 captures
// in /public/images/*). Width comes from `className`; height follows via
// the fixed aspect ratio.
export default function PhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
}) {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute -left-[3px] top-[22%] h-7 w-[3px] rounded-l-sm bg-zinc-700" />
      <span className="absolute -left-[3px] top-[30%] h-11 w-[3px] rounded-l-sm bg-zinc-700" />
      <span className="absolute -right-[3px] top-[25%] h-14 w-[3px] rounded-r-sm bg-zinc-700" />

      <div className="rounded-3xl bg-zinc-900 p-2 shadow-2xl shadow-zinc-950/30">
        <div className="relative aspect-738/1600 w-full overflow-hidden rounded-2xl bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes ?? "(min-width: 640px) 260px, 200px"}
            className="object-cover object-top"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
