import Link from "next/link";

const games = [
  { name: "Keno", path: "/games/keno" },
  { name: "Crash", path: "#" },
  { name: "Dice", path: "#" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-sidebar border-r p-4">
      <div className="text-sm text-gray-400 mb-3">
        Originals
      </div>

      {games.map(g => (
        <Link
          key={g.name}
          href={g.path}
          className="block px-4 py-2 rounded hover:bg-hover"
        >
          {g.name}
        </Link>
      ))}
    </aside>
  );
}
