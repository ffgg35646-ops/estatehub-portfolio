"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Home,
  Heart,
  MessageSquare,
  User,
  Plus,
  Search,
  ArrowRight,
  Building2,
  Sparkles,
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
    <main className="min-h-screen bg-gray-100 pb-16">

      <section className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 lg:flex-row">

          <div className="max-w-2xl">

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              EstateHub Dashboard
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight">
              Welcome back,
              <br />
              {user.name} 👋
            </h1>

            <p className="mt-6 max-w-xl text-lg text-green-100">
              Manage your properties, explore new listings,
              keep track of your favorites and stay connected
              with buyers and sellers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/properties"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:scale-105"
              >
                Browse Properties
              </Link>

              <Link
                href="/add-property"
                className="rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-green-700"
              >
                Add Property
              </Link>

            </div>

          </div>

          <div className="flex h-44 w-44 items-center justify-center rounded-full bg-white/20 backdrop-blur">

            <Building2 size={90} />

          </div>

        </div>

      </section>

      <section className="mx-auto -mt-10 max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <Link
            href="/profile"
            className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <User className="mb-5 text-green-600" size={34} />

            <h3 className="text-xl font-bold">
              My Profile
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Update your personal information and account settings.
            </p>

            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600">
              Open
              <ArrowRight size={18} />
            </span>

          </Link>

          <Link
            href="/properties"
            className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <Search className="mb-5 text-green-600" size={34} />

            <h3 className="text-xl font-bold">
              Browse
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Explore the latest apartments, villas and houses.
            </p>

            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600">
              Explore
              <ArrowRight size={18} />
            </span>

          </Link>

          <Link
            href="/favorites"
            className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <Heart className="mb-5 text-red-500" size={34} />

            <h3 className="text-xl font-bold">
              Favorites
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Quickly access all saved properties.
            </p>

            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-red-500">
              View
              <ArrowRight size={18} />
            </span>

          </Link>

          <Link
            href="/messages"
            className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <MessageSquare className="mb-5 text-blue-600" size={34} />

            <h3 className="text-xl font-bold">
              Messages
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Read conversations and contact property owners.
            </p>

            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600">
              Open
              <ArrowRight size={18} />
            </span>

          </Link>

        </div>
                <div className="mt-10 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-lg lg:col-span-2">

            <div className="flex items-center gap-3">

              <Sparkles className="text-green-600" />

              <h2 className="text-2xl font-bold">
                Quick Actions
              </h2>

            </div>

            <p className="mt-2 text-gray-500">
              Everything you need is just one click away.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <Link
                href="/add-property"
                className="rounded-2xl border p-6 transition hover:border-green-600 hover:bg-green-50"
              >
                <Plus className="mb-4 text-green-600" size={30} />

                <h3 className="font-bold">
                  Add New Property
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Publish your apartment, villa or office.
                </p>

              </Link>

              <Link
                href="/properties"
                className="rounded-2xl border p-6 transition hover:border-green-600 hover:bg-green-50"
              >
                <Search className="mb-4 text-green-600" size={30} />

                <h3 className="font-bold">
                  Explore Listings
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Browse all available properties.
                </p>

              </Link>

              <Link
                href="/favorites"
                className="rounded-2xl border p-6 transition hover:border-red-500 hover:bg-red-50"
              >
                <Heart className="mb-4 text-red-500" size={30} />

                <h3 className="font-bold">
                  Saved Properties
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  View your favorite listings anytime.
                </p>

              </Link>

              <Link
                href="/messages"
                className="rounded-2xl border p-6 transition hover:border-blue-500 hover:bg-blue-50"
              >
                <MessageSquare className="mb-4 text-blue-600" size={30} />

                <h3 className="font-bold">
                  Inbox
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Stay connected with buyers and sellers.
                </p>

              </Link>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h2 className="text-2xl font-bold">
              Getting Started
            </h2>

            <div className="mt-8 space-y-5">

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="font-semibold">
                  Complete your profile
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Add your phone number and address.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="font-semibold">
                  Publish your first property
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Create a professional listing with photos.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="font-semibold">
                  Save interesting properties
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Build your own favorites collection.
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="mt-6 rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">

            <Building2
              size={60}
              className="mx-auto text-gray-300"
            />

            <h3 className="mt-5 text-2xl font-bold">
              No activity yet
            </h3>

            <p className="mt-3 text-gray-500">
              Once you add properties, save favorites or send messages,
              your latest activity will appear here automatically.
            </p>

            <Link
              href="/properties"
              className="mt-8 inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Explore Properties
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
