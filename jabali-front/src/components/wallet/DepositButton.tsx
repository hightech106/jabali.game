import { useAuth } from "@/components/auth/AuthContext";

export default function DepositButton() {
  const { token } = useAuth();

  if (!token) {
    return (
      <button
        disabled
        className="opacity-50 cursor-not-allowed"
      >
        Deposit
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        // open deposit modal
      }}
      className="bg-[#f5c451] text-black px-4 py-2 rounded-md"
    >
      Deposit
    </button>
  );
}
