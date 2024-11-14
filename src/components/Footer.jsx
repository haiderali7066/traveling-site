import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="border-t bg-zinc-950 text-zinc-50">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <img
            src="/placeholder.svg"
            alt="Pakistan Travel Places"
            className="h-12 w-auto"
          />
          <p className="text-zinc-400">
            Pakistan, where your journey begins. Discover your next great place,
            find trips and know about the famous travel destinations of
            Pakistan.
          </p>
          <p className="text-zinc-400">
            A travel and tourism company of Pakistan, city sightseeing, group
            and corporate tours, camping and hiking adventures, family and solo
            trips, and much more for a perfect travel experience in Pakistan!
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <div className="space-y-2 text-zinc-400">
            <p>
              Pakistan Address : 8-B, Iqbal Avenue Phase 1, Nazaria-e-Pakistan
              Rd, Lahore.
            </p>
            <p>Phone : +92 321 410 6223</p>
            <p>Tel : +92 423 5183 937</p>
            <p>info@pakistantravelplaces.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Location</h3>
          <div className="aspect-video w-full rounded-lg bg-zinc-900">
            {/* Replace with actual Google Maps embed */}
            <div className="flex h-full items-center justify-center text-zinc-400">
              Map Embed
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800">
        <div className="container flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between">
          <p className="text-sm text-zinc-400">
            © 2024 Pakistan Travel Places. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              className="text-zinc-400 hover:text-zinc-50"
              href="#"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              className="text-zinc-400 hover:text-zinc-50"
              href="#"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              className="text-zinc-400 hover:text-zinc-50"
              href="#"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              className="text-zinc-400 hover:text-zinc-50"
              href="#"
              aria-label="Youtube"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
