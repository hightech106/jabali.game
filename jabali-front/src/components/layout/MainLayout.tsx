import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import BetHistory from "@/components/history/BetHistory";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 bg-main">
          {children}
        </main>
        <BetHistory />
      </div>
    </div>
  );
}
