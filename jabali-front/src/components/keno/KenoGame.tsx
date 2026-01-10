"use client";

import { useState } from "react";
import KenoBoard from "./KenoBoard";
import BetPanel from "./BetPanel";
import ResultPanel from "./ResultPanel";
import { api } from "@/lib/api";

export default function KenoGame() {
  const [selected, setSelected] = useState<number[]>([]);
  const [drawn, setDrawn] = useState<number[]>([]);
  const [betAmount, setBetAmount] = useState(100);
  const [matches, setMatches] = useState<number | null>(null);
  const [payout, setPayout] = useState<number | null>(null);

  function toggleNumber(n: number) {
    setSelected(prev =>
      prev.includes(n)
        ? prev.filter(x => x !== n)
        : prev.length < 10
        ? [...prev, n]
        : prev
    );
  }

  async function play() {
    const res = await api.post("/keno/bet", {
      betAmount,
      pickedNumbers: selected,
      clientSeed: "demo-client",
      nonce: Date.now(),
    });

    setDrawn(res.data.drawnNumbers);
    setMatches(res.data.matches);
    setPayout(res.data.payout);
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Keno</h1>

      <KenoBoard
        selected={selected}
        drawn={drawn}
        onToggle={toggleNumber}
      />

      <div className="mt-6">
        <BetPanel
          betAmount={betAmount}
          setBetAmount={setBetAmount}
          onPlay={play}
          disabled={selected.length === 0}
        />
      </div>

      <ResultPanel matches={matches} payout={payout} />
    </div>
  );
}
