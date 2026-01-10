"use client";

type Props = {
  matches: number | null;
  payout: number | null;
};

export default function ResultPanel({ matches, payout }: Props) {
  if (matches === null) return null;

  return (
    <div className="mt-4 p-4 rounded bg-gray-900">
      <div>Matches: <b>{matches}</b></div>
      <div>Payout: <b>{payout}</b></div>
    </div>
  );
}
