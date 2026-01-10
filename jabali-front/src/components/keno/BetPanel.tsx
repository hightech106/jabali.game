"use client";

type Props = {
  betAmount: number;
  setBetAmount: (v: number) => void;
  onPlay: () => void;
  disabled: boolean;
};

export default function BetPanel({
  betAmount,
  setBetAmount,
  onPlay,
  disabled,
}: Props) {
  return (
    <div className="flex gap-4 items-center">
      <input
        type="number"
        min={1}
        value={betAmount}
        onChange={e => setBetAmount(+e.target.value)}
        className="w-32 px-3 py-2 rounded bg-gray-900 border"
      />

      <button
        disabled={disabled}
        onClick={onPlay}
        className="px-6 py-2 rounded bg-yellow-500 text-black font-bold disabled:opacity-50"
      >
        BET
      </button>
    </div>
  );
}
