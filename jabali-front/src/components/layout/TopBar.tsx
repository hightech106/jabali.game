import Balance from "../wallet/Balance";

export default function TopBar() {
  return (
    <header className="h-14 flex items-center justify-between px-6 bg-top border-b">
      <div className="font-bold text-lg text-accent">
        Jabali
      </div>

      <div className="flex items-center gap-6">
        <Balance />
        <div className="w-8 h-8 rounded-full bg-gray-600" />
      </div>
    </header>
  );
}
