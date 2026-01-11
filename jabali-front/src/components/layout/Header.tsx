"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth/AuthContext";
import { useWallet } from "@/context/WalletContext";

export default function Header() {
  const { token, logout } = useAuth();
  const { balance, loading } = useWallet();

  return (
    <header className="flex items-center justify-between px-6 h-16 bg-[#0b0e11] border-b border-[#1f2630]">
      <div className="text-white font-bold text-lg">KENO</div>

      {!token ? (
        <div className="flex gap-3">
          <Link
            href="/login"
            className="px-4 py-2 rounded-md bg-[#1f2630] text-white"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 rounded-md bg-[#f5c451] text-black"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {/* Wallet */}
          <div className="px-3 py-1 rounded-md bg-[#1f2630] text-[#f5c451] text-sm font-semibold">
            {loading ? "…" : balance.toLocaleString()} coins
          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="px-4 py-2 rounded-md bg-[#1f2630] text-white"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
