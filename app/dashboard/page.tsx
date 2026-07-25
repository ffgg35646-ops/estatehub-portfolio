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

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        {/* Background Image */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800')",
          }}
        />

        {/* Green Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#10391e]/90 via-[#245535]/80 to-[#4d8f61]/70" />

        {/* Decorative Blur */}

        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        {/* Content */}

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-12 px-8 py-24 lg:flex-row lg:items-center">

          {/* Left */}

          <div className="max-w-2xl">

            <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              🏡 EstateHub Premium Dashboard
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight text-white">

              Welcome Back

              <br />

              <span className="text-green-200">
                {user.name}
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-green-100">

              Discover luxury villas, modern apartments,
              exclusive properties and premium investment
              opportunities around the world.

            </p>

            {/* Search */}

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

            {/* Buttons */}

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

          {/* Right Card */}

          <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">

            <h2 className="mb-6 text-2xl font-bold text-white">
              Featured Villa
            </h2>

            <img
              src="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=900"
              className="h-56 w-full rounded-2xl object-cover"
            />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Luxury Forest Villa
            </h3>

            <p className="mt-2 flex items-center gap-2 text-green-100">
              <MapPin size={18} />
              Beverly Hills
            </p>

            <div className="mt-6 flex justify-between text-green-100">

              <span className="flex items-center gap-2">
                <BedDouble size={18} />
                5 Beds
              </span>

              <span className="flex items-center gap-2">
                <Bath size={18} />
                4 Baths
              </span>

            </div>

            <div className="mt-8 flex items-center justify-between">

              <span className="text-3xl font-black text-white">
                $1.2M
              </span>

              <Link
                href="/properties"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-green-700 transition hover:bg-green-100"
              >
                View
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= START CONTENT ================= */}

      <section className="mx-auto max-w-7xl px-8 py-14">
        {/* ================= QUICK STATS ================= */}

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
    <Building2 className="mb-4 text-green-700" size={34} />
    <p className="text-sm text-gray-500">Properties</p>
    <h2 className="mt-2 text-4xl font-black text-green-800">248</h2>
    <p className="mt-3 text-green-600 font-semibold">+12 This Week</p>
  </div>

  <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
    <Heart className="mb-4 text-red-500" size={34} />
    <p className="text-sm text-gray-500">Favorites</p>
    <h2 className="mt-2 text-4xl font-black">19</h2>
    <p className="mt-3 text-red-500 font-semibold">Saved Properties</p>
  </div>

  <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
    <MessageSquare className="mb-4 text-blue-600" size={34} />
    <p className="text-sm text-gray-500">Messages</p>
    <h2 className="mt-2 text-4xl font-black">7</h2>
    <p className="mt-3 text-blue-600 font-semibold">Unread</p>
  </div>

  <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
    <User className="mb-4 text-green-700" size={34} />
    <p className="text-sm text-gray-500">Profile</p>
    <h2 className="mt-2 text-4xl font-black">100%</h2>
    <p className="mt-3 text-green-600 font-semibold">Completed</p>
  </div>

</div>

{/* ================= FEATURED ================= */}

<div className="mt-16">

  <div className="flex items-center justify-between">

    <div>

      <h2 className="text-4xl font-black text-green-900">
        Featured Properties
      </h2>

      <p className="mt-2 text-gray-500">
        Hand-picked luxury homes.
      </p>

    </div>

    <Link
      href="/properties"
      className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
    >
      View All
    </Link>

  </div>

  <div className="mt-8 grid gap-8 lg:grid-cols-3">

    {[1,2,3].map((item)=>(
      <div
        key={item}
        className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
      >

        <img
          src={`https://picsum.photos/600/400?random=${item}`}
          className="h-64 w-full object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold">
            Luxury Green Villa
          </h3>

          <p className="mt-2 flex items-center gap-2 text-gray-500">
            <MapPin size={18}/>
            Dubai Marina
          </p>

          <div className="mt-5 flex justify-between">

            <span className="flex items-center gap-2 text-gray-600">
              <BedDouble size={18}/>
              5 Beds
            </span>

            <span className="flex items-center gap-2 text-gray-600">
              <Bath size={18}/>
              4 Baths
            </span>

          </div>

          <div className="mt-6 flex items-center justify-between">

            <span className="text-3xl font-black text-green-700">
              $980,000
            </span>

            <button className="rounded-xl bg-green-700 px-5 py-3 text-white hover:bg-green-800">
              Details
            </button>

          </div>

        </div>

      </div>
    ))}

  </div>

</div>
        {/* ================= QUICK ACTIONS ================= */}

<div className="mt-20 grid gap-8 lg:grid-cols-3">

  <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-xl">

    <h2 className="text-3xl font-black text-green-900">
      Quick Actions
    </h2>

    <p className="mt-2 text-gray-500">
      Everything you need is one click away.
    </p>

    <div className="mt-8 grid gap-6 md:grid-cols-2">

      <Link
        href="/add-property"
        className="rounded-2xl border border-green-100 p-6 transition hover:bg-green-50 hover:border-green-400"
      >
        <Plus className="mb-4 text-green-700" size={34} />
        <h3 className="text-xl font-bold">Add Property</h3>
        <p className="mt-2 text-gray-500">
          Publish a new apartment, villa or office.
        </p>
      </Link>

      <Link
        href="/properties"
        className="rounded-2xl border border-green-100 p-6 transition hover:bg-green-50 hover:border-green-400"
      >
        <Search className="mb-4 text-green-700" size={34} />
        <h3 className="text-xl font-bold">Browse Listings</h3>
        <p className="mt-2 text-gray-500">
          Explore available properties.
        </p>
      </Link>

      <Link
        href="/favorites"
        className="rounded-2xl border border-green-100 p-6 transition hover:bg-green-50 hover:border-green-400"
      >
        <Heart className="mb-4 text-red-500" size={34} />
        <h3 className="text-xl font-bold">Favorites</h3>
        <p className="mt-2 text-gray-500">
          View saved properties.
        </p>
      </Link>

      <Link
        href="/messages"
        className="rounded-2xl border border-green-100 p-6 transition hover:bg-green-50 hover:border-green-400"
      >
        <MessageSquare className="mb-4 text-blue-600" size={34} />
        <h3 className="text-xl font-bold">Inbox</h3>
        <p className="mt-2 text-gray-500">
          Read your latest conversations.
        </p>
      </Link>

    </div>

  </div>

  {/* Right */}

  <div className="rounded-3xl bg-white p-8 shadow-xl">

    <h2 className="text-3xl font-black text-green-900">
      Recent Activity
    </h2>

    <div className="mt-8 space-y-5">

      <div className="rounded-xl bg-green-50 p-5">
        <p className="font-bold text-green-800">
          ✔ Property Published
        </p>
        <span className="text-sm text-gray-500">
          2 hours ago
        </span>
      </div>

      <div className="rounded-xl bg-green-50 p-5">
        <p className="font-bold text-green-800">
          ❤ Villa Saved
        </p>
        <span className="text-sm text-gray-500">
          Yesterday
        </span>
      </div>

      <div className="rounded-xl bg-green-50 p-5">
        <p className="font-bold text-green-800">
          💬 New Message
        </p>
        <span className="text-sm text-gray-500">
          3 days ago
        </span>
      </div>

    </div>

  </div>

</div>

{/* ================= CTA ================= */}

<div className="mt-20 overflow-hidden rounded-[35px]">

  <div
    className="relative h-[320px] bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800')",
    }}
  >

    <div className="absolute inset-0 bg-gradient-to-r from-[#173b22]/90 via-[#245535]/80 to-[#4b8d61]/70" />

    <div className="relative flex h-full flex-col items-center justify-center text-center px-8">

      <h2 className="text-5xl font-black text-white">
        Find Your Dream Home
      </h2>

      <p className="mt-5 max-w-2xl text-lg text-green-100">
        Explore thousands of premium apartments, villas,
        penthouses and investment opportunities.
      </p>

      <Link
        href="/properties"
        className="mt-8 rounded-2xl bg-white px-8 py-4 font-bold text-green-800 transition hover:scale-105"
      >
        Explore Properties
      </Link>

    </div>

  </div>

</div>

</section>

</main>
);
}
