"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Plus,
  Home,
  Heart,
  MessageSquare,
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
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );

  }



  return (

    <main className="min-h-screen bg-gray-50 py-12">

      <div className="mx-auto max-w-7xl px-6">


        <h1 className="mb-8 text-3xl font-bold">
          Welcome, {user.name}
        </h1>



        <div className="grid gap-6 md:grid-cols-4">



          <Link
            href="/profile"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >

            <User className="mb-3 text-green-600"/>

            <h3 className="font-semibold">
              Profile
            </h3>

            <p className="text-sm text-gray-500">
              Manage account
            </p>

          </Link>




          <Link
            href="/my-properties"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >

            <Home className="mb-3 text-green-600"/>

            <h3 className="font-semibold">
              My Properties
            </h3>

            <p className="text-sm text-gray-500">
              Your listings
            </p>

          </Link>




          <Link
            href="/favorites"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >

            <Heart className="mb-3 text-green-600"/>

            <h3 className="font-semibold">
              Favorites
            </h3>

            <p className="text-sm text-gray-500">
              Saved properties
            </p>

          </Link>




          <Link
            href="/messages"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >

            <MessageSquare className="mb-3 text-green-600"/>

            <h3 className="font-semibold">
              Messages
            </h3>

            <p className="text-sm text-gray-500">
              Conversations
            </p>

          </Link>



        </div>




        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">


          <h2 className="mb-5 text-2xl font-bold">
            Account Information
          </h2>


          <p className="flex items-center gap-2 text-gray-600">
            <Mail size={18}/>
            {user.email}
          </p>


          <p className="mt-3 text-gray-600">
            Role: {user.role}
          </p>



          <Link
            href="/add-property"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-white"
          >

            <Plus size={18}/>

            Add New Property

          </Link>


        </div>



      </div>


    </main>

  );

}
