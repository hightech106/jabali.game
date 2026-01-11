"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth/AuthContext";
import { useWallet } from "@/context/WalletContext";
import KenoBoard from "./KenoBoard";
import BetPanel from "./BetPanel";
import ResultPanel from "./ResultPanel";
import { api } from "@/lib/api";

export default function KenoGame() {
  const { token } = useAuth();
  const { balance, loading, refreshBalance } = useWallet();

  const [selected, setSelected] = useState<number[]>([]);
  const [drawn, setDrawn] = useState<number[]>([]);
  const [betAmount, setBetAmount] = useState(100);
  const [matches, setMatches] = useState<number | null>(null);
  const [winAmount, setWinAmount] = useState<number | null>(null);

  if (!token) {
    return (
      <div className="text-gray-400 text-sm">
        Please sign in to play
      </div>
    );
  }

  if (loading) {
    return <div className="text-gray-400">Loading wallet…</div>;
  }

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
    if (balance < betAmount) return;

    const res = await api.post("/keno/bet", {
      betAmount,
      pickedNumbers: selected,
      clientSeed: "demo-client",
      nonce: Date.now(),
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setDrawn(res.data.drawnNumbers);
    setMatches(res.data.matches);
    setWinAmount(res.data.payout);

    // Refresh balance after bet
    await refreshBalance();
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-white">Keno</h1>

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
          disabled={selected.length === 0 || balance < betAmount}
        />
      </div>

      <ResultPanel matches={matches} payout={winAmount} />
    </div>
  );
}
