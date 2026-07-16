import Link from "next/link";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Camera,
  Send,
  BriefcaseBusiness,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-300">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <div className="mb-5 flex items-center gap-2">
              <Building2 className="h-8 w-8 text-green-500" />

              <h2 className="text-2xl font-bold text-white">
                EstateHub
              </h2>
            </div>


            <p className="leading-7 text-gray-400">
              EstateHub is a premium real estate platform helping
              people discover luxury homes, apartments and investment
              properties worldwide.
            </p>


            <div className="mt-6 flex gap-4">

              <a href="#" className="transition hover:text-white">
                <Globe className="h-5 w-5" />
              </a>

              <a href="#" className="transition hover:text-white">
                <Camera className="h-5 w-5" />
              </a>

              <a href="#" className="transition hover:text-white">
                <Send className="h-5 w-5" />
              </a>

              <a href="#" className="transition hover:text-white">
                <BriefcaseBusiness className="h-5 w-5" />
              </a>

            </div>

          </div>


          {/* Links */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>


            <ul className="space-y-3">

              <li>
                <Link href="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/properties" className="hover:text-green-400">
                  Properties
                </Link>
              </li>

              <li>
                <Link href="/favorites" className="hover:text-green-400">
                  Favorites
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-green-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-green-400">
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* Categories */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Property Types
            </h3>


            <ul className="space-y-3 text-gray-400">

              <li>Luxury Villas</li>
              <li>Modern Apartments</li>
              <li>Penthouses</li>
              <li>Family Houses</li>
              <li>Commercial Buildings</li>

            </ul>

          </div>


          {/* Contact */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>


            <div className="space-y-4">


              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-green-500" />
                <span>Dubai, UAE</span>
              </div>


              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span>+971 50 123 4567</span>
              </div>


              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span>
                  info@estatehub.com
                </span>
              </div>


            </div>

          </div>

        </div>


        <div className="mt-14 border-t border-neutral-800 pt-6 text-center text-sm text-gray-500">

          © 2026 EstateHub. All rights reserved.

        </div>


      </div>

    </footer>
  );
}
