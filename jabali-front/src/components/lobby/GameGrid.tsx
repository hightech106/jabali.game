import GameCard from "./GameCard";

const games = [
  { name: "Keno", href: "/games/keno" },
  { name: "Crash", href: "#" },
  { name: "Mines", href: "#" },
  { name: "Dice", href: "#" },
];

export default function GameGrid() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Originals</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {games.map(game => (
          <GameCard
            key={game.name}
            name={game.name}
            href={game.href}
          />
        ))}
      </div>
    </div>
  );
}
