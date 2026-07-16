"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  User,
  LayoutDashboard,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function Navbar() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("user");

    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-green-700"
        >
          EstateHub
        </Link>

        <div className="flex items-center gap-5">
          <Link href="/properties">Properties</Link>

          {!user ? (
            <>
              <Link
                href="/login"
                className="flex items-center gap-2"
              >
                <LogIn size={18} />
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-green-600 px-4 py-2 text-white"
              >
                Create Account
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard">
                <LayoutDashboard size={18} className="inline mr-2" />
                Dashboard
              </Link>

              <Link href="/profile">
                <User size={18} className="inline mr-2" />
                Profile
              </Link>

              <button
                onClick={logout}
                className="text-red-600"
              >
                <LogOut size={18} className="inline mr-2" />
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
