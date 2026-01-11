"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthContext";

interface WalletContextType {
  balance: number;
  loading: boolean;
  refreshBalance: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const { token } = useAuth();

  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  const refreshBalance = async () => {
    if (!token) {
      setBalance(0);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch balance");

      const data = await res.json();
      setBalance(Number(data.balance));
    } catch (err) {
      console.error("Wallet error:", err);
      setBalance(0);
    } finally {
      setLoading(false);
    }
  };

  // Fetch balance when token changes (login / logout)
  useEffect(() => {
    refreshBalance();
  }, [token]);

  return (
    <WalletContext.Provider
      value={{
        balance,
        loading,
        refreshBalance,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) {
    throw new Error("useWallet must be used inside WalletProvider");
  }
  return ctx;
}
