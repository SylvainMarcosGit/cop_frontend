import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Home,
  BookOpen,
  Menu,
  X,
  User,
  Info,
  MessageSquare
} from "lucide-react";
import logo from "../../assets/logo.png";
import asinLogo from "../../assets/partenaire/ASIN.png";
import mndLogo from "../../assets/partenaire/MND.png";
import gizLogo from "../../assets/partenaire/Giz.png";
import copalecLogo from "../../assets/partenaire/Ca.jpg";
import dsiLogo from "../../assets/partenaire/DSI-CLUB-BENIN.jpg";
import ctdLogo from "../../assets/partenaire/ctd.webp";
import adpmeLogo from "../../assets/partenaire/adpme.png";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  const navigation: any[] = [
    { name: "Accueil", href: "/", icon: Home },
    { name: "Qui sommes-nous", href: "/about", icon: Info },
    //{ name: "Discussions", href: "/discussions", icon: MessageSquare },
    { name: "Ressources", href: "/resources", icon: BookOpen },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logo} alt="CoP Logo" className="w-full h-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-semibold text-gray-900">
                  Communauté de Pratiques
                </h1>

              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm transition-colors ${active
                      ? "bg-primary/20 text-primary"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-3">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="font-medium">John Doe</p>
                        <p className="text-xs text-gray-500">john.doe@example.com</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">
                        <User className="w-4 h-4 mr-2" />
                        Mon Profil
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => setIsAuthenticated(false)}
                      className="cursor-pointer text-red-600"
                    >
                      Déconnexion
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="hidden md:flex items-center space-x-2">
                  {/* <Link to="/login">
                    <Button variant="ghost">Se connecter</Button>
                  </Link> */}
                  <a href="https://forms.office.com/r/82CcMqJf1r" target="_blank" rel="noopener noreferrer">
                    <Button>Rejoindre la communauté</Button>
                  </a>
                </div>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base ${active
                      ? "bg-primary/20 text-primary"
                      : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              {!isAuthenticated && (
                <div className="pt-4 space-y-2">
                  {/* <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Se connecter
                    </Button>
                  </Link> */}
                  <a href="https://forms.office.com/r/82CcMqJf1r" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full">Rejoindre la communauté</Button>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Partners Section */}
      <section className="bg-white border-t border-gray-200 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-end gap-x-12 gap-y-10">
            {/* Logo Coopération Allemande */}
            <div className="flex items-center shrink-0">
              <img src={copalecLogo} alt="Coopération Allemande" className="h-20 object-contain" />
            </div>

            {/* Mise en œuvre group */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[11px] font-medium text-gray-500">Mise en œuvre par</span>
              <div className="flex items-center gap-8">
                <img src={gizLogo} alt="GIZ" className="h-16 object-contain" />
              
              </div>
            </div>

            {/* Partenaires nationaux group */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[11px] font-medium text-gray-500">Partenaires nationaux</span>
              <div className="flex items-center gap-8">
                <img src={mndLogo} alt="MND" className="h-12 object-contain" />
                <img src={adpmeLogo} alt="ADPME" className="h-10 object-contain" />
                <img src={asinLogo} alt="ASIN" className="h-12 object-contain" />
              </div>
            </div>

            {/* Réseau group */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[11px] font-medium text-gray-500">Réseau</span>
              <div className="flex items-center">
                <img src={dsiLogo} alt="Club DSI Bénin" className="h-14 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center text-center md:text-left md:justify-items-start">
            <div className="md:ml-auto md:mr-12">
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <p className="text-sm text-gray-600">
                Email: contact@clubdsibenin.bj
                <br />
                Tél: 229 0191475555 | 0199200404
              </p>
            </div>
            <div className="md:mr-auto md:ml-12">
              <h3 className="font-semibold text-gray-900 mb-4">Liens utiles</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/charte" className="hover:text-primary">
                    Charte de la CoP
                  </Link>
                </li>
                <li>
                  <a href="https://giz-chat.vercel.app/" className="hover:text-primary">
                    Moteur de recherche ASIN
                  </a>
                </li>
                <li>
                  <a href="https://clubdsibenin.bj/conditions-generales" className="hover:text-primary">
                    Conditions d'utilisation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2026 Communauté de Pratiques IT. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
