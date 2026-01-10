"use client";

import { createContext, useContext, useState } from "react";

type WalletContextType = {
  balance: number;
  deposit: (amount: number) => void;
  bet: (amount: number) => void;
  payout: (amount: number) => void;
};

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [balance, setBalance] = useState(10000);

  function deposit(amount: number) {
    setBalance(b => b + amount);
  }

  function bet(amount: number) {
    setBalance(b => b - amount);
  }

  function payout(amount: number) {
    setBalance(b => b + amount);
  }

  return (
    <WalletContext.Provider
      value={{ balance, deposit, bet, payout }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("WalletProvider missing");
  return ctx;
}
