"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Heart,
  MessageSquare,
  User,
  Plus,
  Search,
  ArrowRight,
  Building2,
  Sparkles,
  BedDouble,
  Bath,
  MapPin,
} from "lucide-react";

interface UserData {
  name: string;
  email: string;
  role: string;
}

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      router.replace("/login");
      return;
    }

    setUser(JSON.parse(savedUser));
  }, [router]);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#eef6ef]">

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d22]/90 via-[#16552f]/80 to-[#2b7a46]/70" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-12 left-16 h-44 w-44 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-green-300 blur-3xl"></div>
        </div>

        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-24">

          <div className="max-w-3xl">

            <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              EstateHub Dashboard
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight text-white">
              Welcome back,
              <br />
              <span className="text-green-200">
                {user.name}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-green-50">
              Manage your properties, explore premium listings,
              save your favorites and connect with buyers
              through one modern dashboard.
            </p>

            <div className="mt-10 flex max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">
              <input
                type="text"
                placeholder="Search property, city..."
                className="flex-1 px-6 py-4 text-gray-700 outline-none"
              />
              <button className="bg-green-700 px-8 text-white transition hover:bg-green-800">
                <Search size={22} />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/properties"
                className="rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
              >
                Browse Properties
              </Link>

              <Link
                href="/add-property"
                className="rounded-xl border border-white/50 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-green-800"
              >
                Add Property
              </Link>
            </div>

          </div>

          <div className="hidden lg:flex">
            <div className="rounded-[40px] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop"
                alt="Luxury House"
                className="h-[320px] w-[460px] rounded-3xl object-cover"
              />
            </div>
          </div>

        </div>

      </section>

      <section className="bg-gradient-to-b from-[#eef8f0] via-[#f8fcf8] to-[#edf7ef] py-12">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-10 grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-lg">
              <p className="text-sm text-gray-500">
                Published Properties
              </p>
              <h2 className="mt-3 text-4xl font-black text-green-700">
                0
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                No property published yet.
              </p>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-lg">
              <p className="text-sm text-gray-500">
                Favorites
              </p>
              <h2 className="mt-3 text-4xl font-black text-red-500">
                0
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                No saved properties.
              </p>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-lg">
              <p className="text-sm text-gray-500">
                Messages
              </p>
              <h2 className="mt-3 text-4xl font-black text-blue-600">
                0
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                No conversations yet.
              </p>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-lg">
              <p className="text-sm text-gray-500">
                Transactions
              </p>
              <h2 className="mt-3 text-4xl font-black text-orange-500">
                0
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                No purchases or sales.
              </p>
            </div>

          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">

            <Link
              href="/profile"
              className="group rounded-[28px] border border-green-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <User size={42} className="text-green-600" />
              <h3 className="mt-6 text-2xl font-bold">
                My Profile
              </h3>
              <p className="mt-3 text-gray-500">
                Manage your account information and personal settings.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-bold text-green-700">
                Open
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link
              href="/properties"
              className="group rounded-[28px] border border-green-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <Search size={42} className="text-green-600" />
              <h3 className="mt-6 text-2xl font-bold">
                Browse Properties
              </h3>
              <p className="mt-3 text-gray-500">
                Discover apartments, villas and luxury homes.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-bold text-green-700">
                Browse
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link
              href="/favorites"
              className="group rounded-[28px] border border-green-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <Heart size={42} className="text-red-500" />
              <h3 className="mt-6 text-2xl font-bold">
                Favorites
              </h3>
              <p className="mt-3 text-gray-500">
                View every property you've saved.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-bold text-red-500">
                View
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link
              href="/messages"
              className="group rounded-[28px] border border-green-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <MessageSquare size={42} className="text-blue-600" />
              <h3 className="mt-6 text-2xl font-bold">
                Messages
              </h3>
              <p className="mt-3 text-gray-500">
                Contact owners and manage conversations.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600">
                Open
                <ArrowRight size={18} />
              </span>
            </Link>

                  </div>

                      </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">

            <div className="lg:col-span-2 rounded-[32px] bg-white p-8 shadow-xl">

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-black text-green-900">
                    Quick Actions
                  </h2>
                  <p className="mt-2 text-gray-500">
                    Everything you need is one click away.
                  </p>
                </div>

                <div className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                  EstateHub
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                <Link
                  href="/add-property"
                  className="rounded-3xl border border-green-100 p-6 transition hover:border-green-500 hover:bg-green-50"
                >
                  <Home size={34} className="text-green-700" />
                  <h3 className="mt-4 text-xl font-bold">
                    Sell Property
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Publish your first property.
                  </p>
                </Link>

                <Link
                  href="/properties"
                  className="rounded-3xl border border-green-100 p-6 transition hover:border-green-500 hover:bg-green-50"
                >
                  <Search size={34} className="text-green-700" />
                  <h3 className="mt-4 text-xl font-bold">
                    Buy Property
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Browse available listings.
                  </p>
                </Link>

                <Link
                  href="/favorites"
                  className="rounded-3xl border border-green-100 p-6 transition hover:border-green-500 hover:bg-green-50"
                >
                  <Heart size={34} className="text-red-500" />
                  <h3 className="mt-4 text-xl font-bold">
                    Favorites
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Open your saved properties.
                  </p>
                </Link>

                <Link
                  href="/messages"
                  className="rounded-3xl border border-green-100 p-6 transition hover:border-green-500 hover:bg-green-50"
                >
                  <MessageSquare size={34} className="text-blue-600" />
                  <h3 className="mt-4 text-xl font-bold">
                    Messages
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Manage your conversations.
                  </p>
                </Link>

              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">

                <Link
                  href="/properties"
                  className="rounded-2xl bg-green-50 p-5 transition hover:bg-green-100"
                >
                  <BedDouble className="text-green-700" />
                  <p className="mt-3 font-bold text-green-900">
                    Apartments
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Browse apartment listings.
                  </p>
                </Link>

                <Link
                  href="/properties"
                  className="rounded-2xl bg-green-50 p-5 transition hover:bg-green-100"
                >
                  <Bath className="text-green-700" />
                  <p className="mt-3 font-bold text-green-900">
                    Villas
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    See premium villa options.
                  </p>
                </Link>

                <Link
                  href="/properties"
                  className="rounded-2xl bg-green-50 p-5 transition hover:bg-green-100"
                >
                  <MapPin className="text-green-700" />
                  <p className="mt-3 font-bold text-green-900">
                    Locations
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Explore top neighborhoods.
                  </p>
                </Link>

              </div>

            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-xl">

              <div className="flex items-center gap-3">
                <Sparkles className="text-green-700" />
                <h2 className="text-2xl font-black text-green-900">
                  Getting Started
                </h2>
              </div>

              <div className="mt-8 space-y-4">

                <div className="rounded-2xl bg-green-50 p-4">
                  <p className="font-bold text-green-900">
                    Complete your profile
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Add your personal details and contact info.
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-4">
                  <p className="font-bold text-green-900">
                    Browse properties
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Start exploring the available listings.
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-4">
                  <p className="font-bold text-green-900">
                    Save your favorites
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Keep the properties you like in one place.
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-4">
                  <p className="font-bold text-green-900">
                    Publish your first property
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Add a listing when you are ready.
                  </p>
                </div>

              </div>

            </div>

          </div>

          <div className="mt-14 rounded-[32px] bg-white p-8 shadow-xl">

            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black text-green-900">
                  Recent Activity
                </h2>
                <p className="mt-2 text-gray-500">
                  You have not done anything yet.
                </p>
              </div>

              <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                New account
              </span>
            </div>

            <div className="mt-6 rounded-3xl border border-dashed border-green-200 bg-green-50 p-10 text-center">

              <Building2 size={60} className="mx-auto text-green-300" />

              <h3 className="mt-5 text-2xl font-bold text-green-900">
                No activity yet
              </h3>

              <p className="mt-3 text-gray-500">
                Once you browse, save favorites, send messages, or add a property,
                your latest activity will appear here automatically.
              </p>

              <Link
                href="/properties"
                className="mt-8 inline-flex rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Browse Properties
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
