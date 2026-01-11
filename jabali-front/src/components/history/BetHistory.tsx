// "use client";

// import { useAuth } from "@/components/auth/AuthContext";
// import { useEffect, useState } from "react";

// interface Bet {
//   id: number;
//   amount: number;
//   createdAt: string;
// }

// export default function BetHistory() {
//   const { token } = useAuth();
//   const [bets, setBets] = useState<Bet[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!token) return;

//     setLoading(true);

//     fetch("http://localhost:4000/bets", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then(setBets)
//       .finally(() => setLoading(false));
//   }, [token]);

//   if (!token) {
//     return (
//       <div className="text-sm text-gray-400">
//         Sign in to view bet history
//       </div>
//     );
//   }

//   if (loading) {
//     return <div className="text-sm text-gray-400">Loading bets…</div>;
//   }

//   return (
//     <div className="space-y-2">
//       {bets.length === 0 && (
//         <div className="text-sm text-gray-400">
//           No bets yet
//         </div>
//       )}

//       {bets.map((bet) => (
//         <div
//           key={bet.id}
//           className="flex justify-between text-sm bg-[#12161c] p-2 rounded-md border border-[#1f2630]"
//         >
//           <span>Bet</span>
//           <span>{bet.amount}</span>
//         </div>
//       ))}
//     </div>
//   );
// }
