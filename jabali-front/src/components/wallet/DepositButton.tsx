"use client";

import { useWallet } from "@/context/WalletContext";

export default function DepositButton() {
  const { deposit } = useWallet();

  return (
    <button
      onClick={() => deposit(1000)}
      className="px-3 py-1 rounded bg-green-600 text-black text-sm font-bold"
    >
      + Deposit
    </button>
  );
}
