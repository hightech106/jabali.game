"use client";

import { useState } from "react";

export default function Balance() {
  const [balance] = useState(10000);

  return (
    <div className="px-4 py-1 rounded bg-gray-800 text-sm">
      Balance: <b>{balance}</b>
    </div>
  );
}
