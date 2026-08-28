"use client";

import { useState } from "react";
import {
  CheckIcon,
  ChevronRightIcon,
  ShieldIcon,
  featureIcons,
} from "@/app/components/icons";

export default function FullFeatureList({ accent = "#6366f1", groups = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200">
      {groups.map((group, index) => {
        const Icon = featureIcons[group.icon] ?? ShieldIcon;
        const isOpen = openIndex === index;

        return (
          <div key={group.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-zinc-50 sm:px-6"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${accent}1a`, color: accent }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold text-zinc-900">
                  {group.title}
                </span>
                <span className="block text-sm text-zinc-400">
                  {group.items.length} features
                </span>
              </span>
              <ChevronRightIcon
                className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {isOpen ? (
              <ul className="flex flex-col gap-2.5 px-5 pb-5 pl-18 sm:px-6 sm:pb-6">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-6 text-zinc-500"
                  >
                    <CheckIcon
                      className="mt-1 h-3.5 w-3.5 shrink-0"
                      style={{ color: accent }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
