"use client";

import { useWallet } from "@/context/WalletContext";
import clsx from "clsx";

export default function BetHistory() {
  const { bets } = useWallet();

  return (
    <aside className="w-80 bg-sidebar border-l p-4">
      <h3 className="font-bold mb-3">Bet History</h3>

      <div className="flex flex-col gap-2 text-sm">
        {bets.length === 0 && (
          <div className="text-gray-500">No bets yet</div>
        )}

        {bets.map(bet => (
          <div
            key={bet.id}
            className="flex justify-between bg-card px-3 py-2 rounded"
          >
            <div>
              <div className="font-semibold">{bet.game}</div>
              <div className="text-xs text-gray-400">
                {bet.time}
              </div>
            </div>

            <div
              className={clsx(
                "font-bold",
                bet.win ? "text-green-400" : "text-red-400"
              )}
            >
              {bet.win ? "+" : "-"}
              {bet.win ? bet.payout : bet.amount}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
