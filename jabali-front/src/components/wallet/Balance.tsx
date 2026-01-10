"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@/context/WalletContext";

export default function Balance() {
  const { balance } = useWallet();
  const [display, setDisplay] = useState(balance);

  useEffect(() => {
    const start = display;
    const diff = balance - start;
    const duration = 400;
    const startTime = performance.now();

    function animate(time: number) {
      const progress = Math.min((time - startTime) / duration, 1);
      setDisplay(Math.round(start + diff * progress));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [balance]);

  return (
    <div className="px-4 py-1 rounded bg-gray-800 text-sm font-semibold">
      Balance: <span className="text-accent">{display}</span>
    </div>
  );
}
