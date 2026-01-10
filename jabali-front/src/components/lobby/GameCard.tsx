import Link from "next/link";

type Props = {
  name: string;
  href: string;
  image?: string;
};

export default function GameCard({ name, href }: Props) {
  return (
    <Link
      href={href}
      className="group bg-card rounded-lg p-4 hover:bg-hover transition cursor-pointer"
    >
      <div className="h-28 rounded bg-gradient-to-br from-yellow-500 to-orange-500 mb-3 flex items-center justify-center font-bold text-black text-lg">
        {name}
      </div>

      <div className="text-sm font-semibold group-hover:text-accent">
        {name}
      </div>
    </Link>
  );
}
