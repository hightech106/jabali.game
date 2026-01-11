import "@/styles/theme.css";
import MainLayout from "@/components/layout/MainLayout";
import { WalletProvider } from "@/context/WalletContext";
import { AuthProvider } from "@/components/auth/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <WalletProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </WalletProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
