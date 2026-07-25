"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <main className="min-h-screen bg-[#eef6ef] pb-16">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden text-white">

        {/* صورة بيت حقيقية */}
        <Image
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2000&auto=format&fit=crop"
          alt="House"
          fill
          priority
          className="object-cover"
        />

        {/* طبقة خضراء */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#123b22]/90 via-[#1d5a34]/85 to-[#3b8c55]/80" />

        {/* دوائر خفيفة */}
        <div className="absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-green-300/10 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-20 lg:flex-row">

          <div className="max-w-2xl">

            <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              EstateHub Dashboard
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight drop-shadow-lg">
              Welcome back,
              <br />
              {user.name} 👋
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-green-100">
              Manage your properties, explore new listings,
              keep track of your favorites and stay connected
              with buyers and sellers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/properties"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-green-800 shadow-lg transition hover:scale-105"
              >
                Browse Properties
              </Link>

              <Link
                href="/add-property"
                className="rounded-xl border border-white bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white hover:text-green-800"
              >
                Add Property
              </Link>

            </div>

          </div>

          <div className="flex h-48 w-48 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl">

            <Building2 size={90} />

          </div>

        </div>

      </section>

      {/* خلفية القسم بالكامل بدل الرمادي */}
      <section className="mx-auto -mt-10 max-w-7xl rounded-[40px] bg-gradient-to-b from-[#edf8ef] via-[#f5fbf6] to-[#edf8ef] px-6 py-10 shadow-xl">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  <div className="mt-10 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-xl lg:col-span-2">

            <div className="flex items-center gap-3">
              <Sparkles className="text-green-700" />
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
                className="rounded-2xl border border-green-100 p-6 transition hover:border-green-600 hover:bg-green-50"
              >
                <Plus className="mb-4 text-green-700" size={30} />

                <h3 className="font-bold">
                  Add New Property
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Publish your apartment, villa or office.
                </p>

              </Link>

              <Link
                href="/properties"
                className="rounded-2xl border border-green-100 p-6 transition hover:border-green-600 hover:bg-green-50"
              >
                <Search className="mb-4 text-green-700" size={30} />

                <h3 className="font-bold">
                  Explore Listings
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Browse all available properties.
                </p>

              </Link>

              <Link
                href="/favorites"
                className="rounded-2xl border border-red-100 p-6 transition hover:border-red-500 hover:bg-red-50"
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
                className="rounded-2xl border border-blue-100 p-6 transition hover:border-blue-500 hover:bg-blue-50"
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

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-2xl font-bold">
              Getting Started
            </h2>

            <div className="mt-8 space-y-5">

              <div className="rounded-xl bg-green-50 p-4">
                <p className="font-semibold">
                  Complete your profile
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Add your phone number and address.
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-4">
                <p className="font-semibold">
                  Publish your first property
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Create a professional listing with photos.
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-4">
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

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="mt-6 rounded-2xl border-2 border-dashed border-green-200 bg-green-50 p-12 text-center">

            <Building2
              size={60}
              className="mx-auto text-green-300"
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
              className="mt-8 inline-flex rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Explore Properties
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
          
