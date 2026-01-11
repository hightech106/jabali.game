import { useAuth } from "@/components/auth/AuthContext";
import { useWallet } from "@/context/WalletContext";
import KenoBoard from "./KenoBoard";
import BetPanel from "./BetPanel";
import ResultPanel from "./ResultPanel";
import { api } from "@/lib/api";

export default function KenoGame() {
  const { token } = useAuth();
  const { balance, loading } = useWallet();

  if (!token) {
    return (
      <div className="text-gray-400 text-sm">
        Please sign in to play
      </div>
    );
  }

  if (loading) {
    return <div className="text-gray-400">Loading wallet…</div>;
  }

  return (
    <div>
      <div className="text-white">
        Balance: {balance.toLocaleString()}
      </div>

      {/* rest of Keno UI */}
    </div>
  );
}
