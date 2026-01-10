import "@/styles/theme.css";
import MainLayout from "@/components/layout/MainLayout";
import { WalletProvider } from "@/context/WalletContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <MainLayout>{children}</MainLayout>
        </WalletProvider>
      </body>
    </html>
  );
}
