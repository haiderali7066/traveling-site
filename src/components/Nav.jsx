import React from "react";
import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  Search,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="hidden border-b bg-background/95 py-2 sm:block">
        <div className="container flex items-center justify-between">
          <div className="flex gap-4">
            <Link
              className="flex items-center gap-2 text-sm"
              to="tel:+923214106223"
            >
              <Phone className="h-4 w-4" />
              +92 321 410 6223
            </Link>
            <Link
              className="flex items-center gap-2 text-sm"
              to="mailto:info@pakistantravelplaces.com"
            >
              <Mail className="h-4 w-4" />
              info@pakistantravelplaces.com
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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 place-items-end  pb-2">
          <Link className="mr-6 flex items-center space-x-2" to="/">
            <img
              src="/placeholder.svg"
              alt="Hadi Travels"
              className="h-12 w-auto"
            />
          </Link>
          <nav className="hidden flex-1 gap-6 md:flex md:justify-end md:pr-2">
            <Link
              className="font-medium transition-colors hover:text-foreground/80"
              to="/"
            >
              Home
            </Link>
            {/* <Link
              className="font-medium transition-colors hover:text-foreground/80"
              to="/tour-packages"
            >
              Tour Packages
            </Link>
            <Link
              className="font-medium transition-colors hover:text-foreground/80"
              to="/book-transport"
            >
              Book a Transport
            </Link>
            <Link
              className="font-medium transition-colors hover:text-foreground/80"
              to="/destinations"
            >
              Destinations
            </Link>
            <Link
              className="font-medium transition-colors hover:text-foreground/80"
              to="/blog"
            >
              Blog
            </Link> */}
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
          <div className="flex items-center gap-4">
            <form className="hidden lg:block">
              <div className="flex items-center gap-2">
                {/* <input
                  className="w-60 rounded-md border px-3 py-2"
                  placeholder="Search..."
                  type="search"
                /> */}
                <button
                  className="rounded-md p-2 hover:bg-gray-100"
                  type="submit"
                >
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </form>
            <button className="md:hidden rounded-md p-2 hover:bg-gray-100">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
