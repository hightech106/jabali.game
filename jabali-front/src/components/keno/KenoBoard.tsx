"use client";

import clsx from "clsx";

type Props = {
  selected: number[];
  drawn: number[];
  onToggle: (n: number) => void;
};

export default function KenoBoard({
  selected,
  drawn,
  onToggle,
}: Props) {
  return (
    <div className="grid grid-cols-8 gap-2">
      {Array.from({ length: 40 }, (_, i) => i + 1).map(n => {
        const isSelected = selected.includes(n);
        const isDrawn = drawn.includes(n);

        return (
          <button
            key={n}
            onClick={() => onToggle(n)}
            className={clsx(
              "h-12 rounded font-bold transition",
              isDrawn && "bg-green-500 text-black",
              !isDrawn && isSelected && "bg-blue-500 text-white",
              !isDrawn && !isSelected && "bg-gray-800 hover:bg-gray-700"
            )}
          >
            {n}
          </button>
        );
      })}
    </div>
  );
}
