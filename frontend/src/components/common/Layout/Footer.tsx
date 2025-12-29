import { Link } from "react-router-dom";
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-ink-950" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold">RecrutePro</span>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed">
              Connectons les talents aux opportunités au Sénégal.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-ink-800 hover:bg-ink-700 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-ink-800 hover:bg-ink-700 rounded-lg transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-ink-800 hover:bg-ink-700 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2.5">
              <li>
                <FooterLink to="/offres">Offres d'emploi</FooterLink>
              </li>
              <li>
                <FooterLink to="/entreprises">Entreprises</FooterLink>
              </li>
              <li>
                <FooterLink to="/a-propos">À propos</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          {/* For Recruiters */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Recruteurs</h3>
            <ul className="space-y-2.5">
              <li>
                <FooterLink to="/recruteur/inscription">
                  Créer un compte
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/recruteur/publier">
                  Publier une offre
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/recruteur/tarifs">Nos tarifs</FooterLink>
              </li>
              <li>
                <FooterLink to="/recruteur/guide">Guide</FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-ink-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  UASZ, Diabir
                  <br />
                  Ziguinchor, Sénégal
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ink-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+221 77 123 45 67</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ink-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@recrutepro.sn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ink-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink-500">
            © {currentYear} RecrutePro. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <FooterLink to="/mentions-legales" className="text-sm">
              Mentions légales
            </FooterLink>
            <FooterLink to="/confidentialite" className="text-sm">
              Confidentialité
            </FooterLink>
            <FooterLink to="/cgu" className="text-sm">
              CGU
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`text-ink-400 hover:text-white transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
