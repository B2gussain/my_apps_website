// Stylized, illustrative previews — not real screenshots. Swap in <Image> screenshots
// under /public once real captures of each app are available (see AppScreens below).
function StatusBar({ accent }) {
  return (
    <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-medium text-zinc-400">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: accent }}
        />
        <span>100%</span>
      </div>
    </div>
  );
}

function LockScreen({ accent }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6">
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{ backgroundColor: `${accent}26` }}
      >
        <div className="h-6 w-6 rounded-full border-2" style={{ borderColor: accent }} />
      </div>
      <div className="flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: i < 2 ? accent : "#e4e4e7" }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-xs font-medium text-zinc-400"
          >
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

function ListScreen({ accent }) {
  return (
    <div className="flex flex-1 flex-col gap-2.5 px-4 pt-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 rounded-xl bg-zinc-50 px-3 py-2.5"
        >
          <span
            className="h-7 w-7 shrink-0 rounded-lg"
            style={{ backgroundColor: `${accent}${i % 2 ? "26" : "1a"}` }}
          />
          <div className="flex flex-1 flex-col gap-1">
            <span
              className="h-2 rounded-full bg-zinc-300"
              style={{ width: `${55 - i * 4}%` }}
            />
            <span className="h-1.5 w-2/5 rounded-full bg-zinc-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

function FormScreen({ accent }) {
  return (
    <div className="flex flex-1 flex-col gap-3 px-5 pt-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <span className="h-1.5 w-1/4 rounded-full bg-zinc-300" />
          <div className="h-8 rounded-lg border border-zinc-200 bg-zinc-50" />
        </div>
      ))}
      <span
        className="mt-2 h-9 rounded-lg"
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}

function DisplayScreen({ accent }) {
  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pt-2">
      <div className="flex flex-1 flex-col items-end justify-end gap-1 rounded-xl bg-zinc-50 px-3 py-4">
        <span className="h-1.5 w-2/5 rounded-full bg-zinc-300" />
        <span className="h-3.5 w-3/5 rounded-full" style={{ backgroundColor: accent }} />
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="aspect-square rounded-lg"
            style={{
              backgroundColor: [3, 7, 11, 15].includes(i) ? accent : "#f4f4f5",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function GridScreen({ accent }) {
  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pt-2">
      <div className="rounded-xl bg-zinc-50 px-3 py-3">
        <span className="block h-3 w-3/4 rounded-full bg-zinc-300" />
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="aspect-square rounded-md"
            style={{
              backgroundColor: i % 6 === 0 ? accent : "#f4f4f5",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const variants = {
  lock: LockScreen,
  list: ListScreen,
  form: FormScreen,
  display: DisplayScreen,
  grid: GridScreen,
};

export default function PhoneMockup({ variant, title, accent = "#6366f1" }) {
  const Screen = variants[variant] ?? ListScreen;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-[220px] overflow-hidden rounded-2xl border-[6px] border-zinc-900 bg-white shadow-xl shadow-zinc-900/10">
        <div className="flex h-[420px] flex-col">
          <StatusBar accent={accent} />
          <div
            className="mx-4 mt-2 flex items-center justify-center rounded-md py-1.5 text-[11px] font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            {title}
          </div>
          <Screen accent={accent} />
        </div>
      </div>
      <span className="text-sm font-medium text-zinc-500">
        {title}
      </span>
    </div>
  );
}
