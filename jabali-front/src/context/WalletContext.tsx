"use client";

import { createContext, useContext, useState } from "react";

export type BetRecord = {
  id: number;
  game: string;
  amount: number;
  payout: number;
  win: boolean;
  time: string;
};

type WalletContextType = {
  balance: number;
  bets: BetRecord[];
  deposit: (amount: number) => void;
  bet: (amount: number) => void;
  payout: (amount: number) => void;
  addBet: (bet: BetRecord) => void;
};

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalance] = useState(10000);
  const [bets, setBets] = useState<BetRecord[]>([]);

  function deposit(amount: number) {
    setBalance(b => b + amount);
  }

  function bet(amount: number) {
    setBalance(b => b - amount);
  }

  function payout(amount: number) {
    setBalance(b => b + amount);
  }

  function addBet(bet: BetRecord) {
    setBets(prev => [bet, ...prev].slice(0, 20));
  }

  return (
    <WalletContext.Provider
      value={{ balance, bets, deposit, bet, payout, addBet }}
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
