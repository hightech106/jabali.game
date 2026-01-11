"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth/AuthContext";

export default function Header() {
  const { token, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-6 h-16 bg-[#0b0e11] border-b border-[#1f2630]">
      <div className="text-white font-bold text-lg">
        KENO
      </div>

      {!token ? (
        <div className="flex gap-3">
          <Link
            href="/login"
            className="px-4 py-2 rounded-md text-sm font-medium bg-[#1f2630] text-white hover:bg-[#2a3240]"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="px-4 py-2 rounded-md text-sm font-medium bg-[#f5c451] text-black hover:opacity-90"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <button
          onClick={logout}
          className="px-4 py-2 rounded-md text-sm font-medium bg-[#1f2630] text-white hover:bg-[#2a3240]"
        >
          Logout
        </button>
      )}
    </header>
  );
}
