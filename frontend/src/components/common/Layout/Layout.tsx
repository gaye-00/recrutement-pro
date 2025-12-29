import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  isAuthenticated: boolean;
  userRole?: "CANDIDAT" | "RECRUTEUR" | "ADMIN";
  userName?: string;
  onLogout: () => void;
}

export default function Layout({
  children,
  isAuthenticated,
  userRole,
  userName,
  onLogout,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        isAuthenticated={isAuthenticated}
        userRole={userRole}
        userName={userName}
        onLogout={onLogout}
      />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
