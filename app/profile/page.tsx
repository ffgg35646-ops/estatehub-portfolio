"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Edit,
  Home,
  Heart,
} from "lucide-react";

interface UserData {
  name: string;
  email: string;
  phone?: string;
  role: string;
}

export default function ProfilePage() {

  const [user, setUser] = useState<UserData | null>(null);


  useEffect(() => {

    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

  }, []);



  if (!user) {

    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );

  }



  return (

    <main className="bg-gray-50 py-20">

      <div className="mx-auto max-w-5xl px-6">


        <div className="rounded-3xl bg-white p-8 shadow-sm">


          <div className="flex flex-col items-center gap-6 md:flex-row">


            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-green-100 text-green-700">

              <User size={60}/>

            </div>



            <div className="flex-1 text-center md:text-left">


              <h1 className="text-3xl font-bold">
                {user.name}
              </h1>


              <p className="mt-2 text-gray-500">
                {user.role}
              </p>



              <Link
                href="/profile/edit"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white"
              >

                <Edit size={18}/>

                Edit Profile

              </Link>


            </div>


          </div>




          <div className="mt-10 grid gap-5 md:grid-cols-2">


            <div className="flex items-center gap-4 rounded-xl border p-5">

              <Mail className="text-green-600"/>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-semibold">
                  {user.email}
                </p>
              </div>

            </div>




            <div className="flex items-center gap-4 rounded-xl border p-5">

              <Phone className="text-green-600"/>

              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="font-semibold">
                  {user.phone || "Not added"}
                </p>
              </div>

            </div>


          </div>




          <div className="mt-10 grid gap-5 md:grid-cols-3">


            <div className="rounded-2xl bg-green-50 p-6 text-center">

              <Home className="mx-auto text-green-700"/>

              <h3 className="mt-3 text-3xl font-bold">
                0
              </h3>

              <p>
                Properties
              </p>

            </div>




            <div className="rounded-2xl bg-green-50 p-6 text-center">

              <Heart className="mx-auto text-green-700"/>

              <h3 className="mt-3 text-3xl font-bold">
                0
              </h3>

              <p>
                Favorites
              </p>

            </div>




            <div className="rounded-2xl bg-green-50 p-6 text-center">

              <User className="mx-auto text-green-700"/>

              <h3 className="mt-3 text-3xl font-bold">
                Active
              </h3>

              <p>
                Account
              </p>

            </div>


          </div>


        </div>


      </div>


    </main>

  );

}
