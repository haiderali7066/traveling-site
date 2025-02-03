import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  Search,
  Twitter,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden border-b bg-background/95 py-2 sm:block">
        <div className="container flex items-center justify-between">
          <div className="flex gap-4">
            <Link
              className="flex items-center gap-2 text-sm"
              to="tel:+923214106223"
            >
              <Phone className="h-4 w-4" />
              +92 325 6036 838
            </Link>
            <Link
              className="flex items-center gap-2 text-sm"
              to="mailto:info@pakistantravelplaces.com"
            >
              <Mail className="h-4 w-4" />
              info@HADItravels.com
            </Link>
          </div>
          <div className="flex gap-4">
            <Link to="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link to="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link to="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link className="flex items-center space-x-2" to="/">
            <img
              src="/img/logo2.png"
              alt="Hadi Travels"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 gap-6 md:flex md:justify-end md:pr-2">
            <Link
              className="font-medium transition-colors hover:text-foreground/80"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-medium transition-colors hover:text-foreground/80"
              to="/about"
            >
              About Us
            </Link>
            <Link
              className="font-medium transition-colors hover:text-foreground/80"
              to="/contact"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden rounded-md p-2 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t shadow-md">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link
                  className="block py-2 px-4 text-sm font-medium hover:bg-gray-100"
                  to="/"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-4 text-sm font-medium hover:bg-gray-100"
                  to="/about"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-4 text-sm font-medium hover:bg-gray-100"
                  to="/contact"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
