"use client";

import { useState } from "react";
import AuthInput from "./AuthInput";

interface Props {
  type: "login" | "register";
}

export default function AuthForm({ type }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);

    await fetch(`http://localhost:4000/auth/${type}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md bg-[#12161c] p-6 rounded-xl border border-[#1f2630]">
      <h1 className="text-xl font-semibold text-white mb-4">
        {type === "login" ? "Sign In" : "Create Account"}
      </h1>

      <div className="flex flex-col gap-4">
        <AuthInput label="Email" value={email} onChange={setEmail} />
        <AuthInput
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />

        <button
          onClick={submit}
          disabled={loading}
          className="h-11 mt-2 rounded-md bg-[#f5c451] text-black font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {type === "login" ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
