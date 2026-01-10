"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const games = [
  { name: "Keno", path: "/games/keno" },
  { name: "Crash", path: "#" },
  { name: "Dice", path: "#" },
  { name: "Mines", path: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-sidebar border-r p-4">
      <div className="text-sm text-gray-400 mb-4">
        Originals
      </div>

      <nav className="flex flex-col gap-1">
        {games.map(game => (
          <Link
            key={game.name}
            href={game.path}
            className={clsx(
              "px-4 py-2 rounded hover:bg-hover",
              pathname === game.path && "bg-hover text-accent"
            )}
          >
            {game.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
