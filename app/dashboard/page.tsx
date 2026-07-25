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
      <div className="flex min-h-screen items-center justify-center text-xl font-semibold bg-[#f8faf9] text-emerald-950">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8faf9] pb-20">

      {/* هيدر شيك وأنيق بلون أخضر زمردي داكن مع خلفية شبكية/معمارية هادئة جداً */}
      <section className="relative bg-[#0f382c] text-white pt-12 pb-24 px-6 overflow-hidden">
        
        {/* خلفية هندسية ناعمة جداً في الـ Pattern تدل على العقارات دون تشويش */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row z-10">

          <div className="max-w-2xl">

            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-4 py-1.5 text-xs font-medium text-emerald-200">
              <Sparkles size={14} className="text-emerald-400" />
              EstateHub Dashboard
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Welcome back,
              <br />
              <span className="text-emerald-400">{user.name}</span> 👋
            </h1>

            <p className="mt-4 max-w-xl text-base sm:text-lg text-emerald-100/80 leading-relaxed">
              Manage your properties, explore new listings,
              keep track of your favorites and stay connected
              with buyers and sellers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/properties"
                className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-emerald-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-900/40"
              >
                Browse Properties
              </Link>

              <Link
                href="/add-property"
                className="rounded-xl border border-emerald-500/30 bg-emerald-900/30 backdrop-blur-sm px-6 py-3 font-semibold text-white transition hover:bg-emerald-800/50 hover:border-emerald-400"
              >
                Add Property
              </Link>

            </div>

          </div>

          <div className="flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-3xl bg-emerald-800/30 border border-emerald-500/20 backdrop-blur-md text-emerald-300 shadow-2xl">

            <Building2 size={80} strokeWidth={1.5} />

          </div>

        </div>

      </section>

      {/* الكروت بـ mt-12 هادئة فوق الهيدر بدون ما تتغطى إطلاقاً */}
      <section className="relative z-20 mx-auto -mt-12 max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <Link
            href="/profile"
            className="group rounded-2xl bg-white p-6 shadow-sm border border-emerald-950/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200"
          >
            <User className="mb-4 text-emerald-600" size={32} />

            <h3 className="text-lg font-bold text-gray-900">
              My Profile
            </h3>

            <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
              Update your personal information and account settings.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:gap-3 transition-all">
              Open
              <ArrowRight size={16} />
            </span>

          </Link>

          <Link
            href="/properties"
            className="group rounded-2xl bg-white p-6 shadow-sm border border-emerald-950/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200"
          >
            <Search className="mb-4 text-emerald-600" size={32} />

            <h3 className="text-lg font-bold text-gray-900">
              Browse
            </h3>

            <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
              Explore the latest apartments, villas and houses.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:gap-3 transition-all">
              Explore
              <ArrowRight size={16} />
            </span>

          </Link>

          <Link
            href="/favorites"
            className="group rounded-2xl bg-white p-6 shadow-sm border border-emerald-950/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-red-200"
          >
            <Heart className="mb-4 text-rose-500" size={32} />

            <h3 className="text-lg font-bold text-gray-900">
              Favorites
            </h3>

            <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
              Quickly access all saved properties.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-rose-500 group-hover:gap-3 transition-all">
              View
              <ArrowRight size={16} />
            </span>

          </Link>

          <Link
            href="/messages"
            className="group rounded-2xl bg-white p-6 shadow-sm border border-emerald-950/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-blue-200"
          >
            <MessageSquare className="mb-4 text-blue-600" size={32} />

            <h3 className="text-lg font-bold text-gray-900">
              Messages
            </h3>

            <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
              Read conversations and contact property owners.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
              Open
              <ArrowRight size={16} />
            </span>

          </Link>

        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">

          <div className="rounded-2xl bg-white p-7 shadow-sm border border-emerald-950/5 lg:col-span-2">

            <div className="flex items-center gap-3">

              <Sparkles className="text-emerald-600" size={22} />

              <h2 className="text-xl font-bold text-gray-900">
                Quick Actions
              </h2>

            </div>

            <p className="mt-1 text-sm text-gray-500">
              Everything you need is just one click away.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Link
                href="/add-property"
                className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 transition hover:border-emerald-500/30 hover:bg-emerald-50/30"
              >
                <Plus className="mb-3 text-emerald-600" size={26} />

                <h3 className="font-bold text-gray-900 text-sm">
                  Add New Property
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Publish your apartment, villa or office.
                </p>

              </Link>

              <Link
                href="/properties"
                className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 transition hover:border-emerald-500/30 hover:bg-emerald-50/30"
              >
                <Search className="mb-3 text-emerald-600" size={26} />

                <h3 className="font-bold text-gray-900 text-sm">
                  Explore Listings
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Browse all available properties.
                </p>

              </Link>

              <Link
                href="/favorites"
                className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 transition hover:border-rose-500/30 hover:bg-rose-50/30"
              >
                <Heart className="mb-3 text-rose-500" size={26} />

                <h3 className="font-bold text-gray-900 text-sm">
                  Saved Properties
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  View your favorite listings anytime.
                </p>

              </Link>

              <Link
                href="/messages"
                className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 transition hover:border-blue-500/30 hover:bg-blue-50/30"
              >
                <MessageSquare className="mb-3 text-blue-600" size={26} />

                <h3 className="font-bold text-gray-900 text-sm">
                  Inbox
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Stay connected with buyers and sellers.
                </p>

              </Link>

            </div>

          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm border border-emerald-950/5">

            <h2 className="text-xl font-bold text-gray-900">
              Getting Started
            </h2>

            <div className="mt-6 space-y-4">

              <div className="rounded-xl bg-emerald-50/50 border border-emerald-100/60 p-4">
                <p className="font-semibold text-sm text-emerald-950">
                  Complete your profile
                </p>
                <p className="mt-0.5 text-xs text-emerald-800/70">
                  Add your phone number and address.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                <p className="font-semibold text-sm text-gray-900">
                  Publish your first property
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  Create a professional listing with photos.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                <p className="font-semibold text-sm text-gray-900">
                  Save interesting properties
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  Build your own favorites collection.
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-8 rounded-2xl bg-white p-7 shadow-sm border border-emerald-950/5">

          <h2 className="text-xl font-bold text-gray-900">
            Recent Activity
          </h2>

          <div className="mt-6 rounded-xl border border-dashed border-gray-200 p-10 text-center bg-gray-50/50">

            <Building2
              size={50}
              className="mx-auto text-gray-300"
            />

            <h3 className="mt-4 text-xl font-bold text-gray-800">
              No activity yet
            </h3>

            <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
              Once you add properties, save favorites or send messages,
              your latest activity will appear here automatically.
            </p>

            <Link
              href="/properties"
              className="mt-6 inline-flex rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition"
            >
              Explore Properties
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
