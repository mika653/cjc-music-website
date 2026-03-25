"use client";

import { useState } from "react";

interface DesignSwitcherProps {
  children: React.ReactNode[];
  labels: string[];
  descriptions: string[];
}

export default function DesignSwitcher({
  children,
  labels,
  descriptions,
}: DesignSwitcherProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-dvh flex flex-col">
      {/* Sticky tab bar */}
      <div className="sticky top-0 z-[100] bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-medium text-gray-500 hidden sm:block whitespace-nowrap">
              CJC Music — Design Review
            </span>
            <div className="flex gap-2 w-full sm:w-auto justify-center">
              {labels.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setActive(i)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    active === i
                      ? "bg-[#C4853A] text-black"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="hidden lg:block" />
          </div>
          {descriptions[active] && (
            <p className="text-[11px] text-gray-500 text-center mt-1.5">
              {descriptions[active]}
            </p>
          )}
        </div>
      </div>

      {/* Active design */}
      <div className="flex-1">{children[active]}</div>
    </div>
  );
}
