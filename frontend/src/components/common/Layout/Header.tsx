import { Link, useLocation } from "react-router-dom";
import {
  Briefcase,
  User,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  isAuthenticated: boolean;
  userRole?: "CANDIDAT" | "RECRUTEUR" | "ADMIN";
  userName?: string;
  onLogout: () => void;
}

export default function Header({
  isAuthenticated,
  userRole,
  userName,
  onLogout,
}: HeaderProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-ink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Minimaliste et élégant */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-ink-950 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                <Briefcase className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-xl font-bold text-ink-950 tracking-tight">
              RecrutePro
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/offres" isActive={isActive("/offres")}>
              Offres d'emploi
            </NavLink>

            {isAuthenticated && userRole === "CANDIDAT" && (
              <>
                <NavLink
                  to="/candidat/candidatures"
                  isActive={isActive("/candidat/candidatures")}
                >
                  Mes candidatures
                </NavLink>
                <NavLink
                  to="/candidat/profil"
                  isActive={isActive("/candidat/profil")}
                >
                  Profil
                </NavLink>
              </>
            )}

            {isAuthenticated && userRole === "RECRUTEUR" && (
              <>
                <NavLink
                  to="/recruteur/dashboard"
                  isActive={isActive("/recruteur/dashboard")}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/recruteur/offres"
                  isActive={isActive("/recruteur/offres")}
                >
                  Mes offres
                </NavLink>
              </>
            )}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <button className="relative w-10 h-10 flex items-center justify-center text-ink-600 hover:text-ink-950 hover:bg-ink-100 rounded-xl transition-all">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-ink-950 rounded-full"></span>
                </button>

                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-3 px-4 h-10 bg-ink-50 hover:bg-ink-100 rounded-xl transition-all"
                  >
                    <div className="w-7 h-7 bg-ink-950 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-ink-950">
                      {userName}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-ink-600 transition-transform ${
                        userMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-strong border border-ink-200 py-2 animate-in">
                      <div className="px-4 py-3 border-b border-ink-100">
                        <p className="text-sm font-medium text-ink-950">
                          {userName}
                        </p>
                        <p className="text-xs text-ink-500 mt-0.5">
                          {userRole}
                        </p>
                      </div>

                      {userRole === "CANDIDAT" && (
                        <Link
                          to="/candidat/profil"
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-ink-700 hover:bg-ink-50 transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <User className="w-4 h-4" />
                          Mon profil
                        </Link>
                      )}

                      <button
                        onClick={() => {
                          onLogout();
                          setUserMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-ink-700 hover:bg-ink-50 transition-colors w-full text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        Déconnexion
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/connexion"
                  className="px-5 h-10 flex items-center text-sm font-medium text-ink-700 hover:text-ink-950 hover:bg-ink-50 rounded-xl transition-all"
                >
                  Connexion
                </Link>
                <Link
                  to="/inscription"
                  className="px-5 h-10 flex items-center text-sm font-medium text-white bg-ink-950 hover:bg-ink-800 rounded-xl transition-all shadow-sm"
                >
                  S'inscrire
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-ink-600 hover:bg-ink-100 rounded-xl transition-all"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-ink-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <MobileNavLink
              to="/offres"
              onClick={() => setMobileMenuOpen(false)}
            >
              Offres d'emploi
            </MobileNavLink>

            {isAuthenticated && userRole === "CANDIDAT" && (
              <>
                <MobileNavLink
                  to="/candidat/candidatures"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mes candidatures
                </MobileNavLink>
                <MobileNavLink
                  to="/candidat/profil"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mon profil
                </MobileNavLink>
              </>
            )}

            {isAuthenticated && userRole === "RECRUTEUR" && (
              <>
                <MobileNavLink
                  to="/recruteur/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </MobileNavLink>
                <MobileNavLink
                  to="/recruteur/offres"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mes offres
                </MobileNavLink>
              </>
            )}

            {isAuthenticated ? (
              <button
                onClick={() => {
                  onLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm text-ink-700 hover:bg-ink-50 rounded-xl transition-all"
              >
                Déconnexion
              </button>
            ) : (
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  to="/connexion"
                  className="px-4 py-2.5 text-sm font-medium text-center text-ink-700 hover:bg-ink-50 rounded-xl transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Connexion
                </Link>
                <Link
                  to="/inscription"
                  className="px-4 py-2.5 text-sm font-medium text-center text-white bg-ink-950 hover:bg-ink-800 rounded-xl transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  S'inscrire
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

// Composant NavLink pour Desktop
function NavLink({
  to,
  isActive,
  children,
}: {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`
        px-4 h-10 flex items-center text-sm font-medium rounded-xl transition-all
        ${
          isActive
            ? "text-ink-950 bg-ink-100"
            : "text-ink-600 hover:text-ink-950 hover:bg-ink-50"
        }
      `}
    >
      {children}
    </Link>
  );
}

// Composant NavLink pour Mobile
function MobileNavLink({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2.5 text-sm text-ink-700 hover:bg-ink-50 rounded-xl transition-all"
    >
      {children}
    </Link>
  );
}
