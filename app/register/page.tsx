"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  Lock,
} from "lucide-react";


export default function RegisterPage() {

  const router = useRouter();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });


  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);
    setMessage("");


    try {

      const res = await fetch(
        "/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      const data = await res.json();


      if (!res.ok) {

        setMessage(data.message);

        return;

      }


      setMessage(
        "Account created successfully"
      );


      setTimeout(() => {

        router.push("/login");

      }, 1000);



    } catch {

      setMessage(
        "Something went wrong"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <main className="min-h-screen bg-gray-50 py-20">


      <div className="mx-auto max-w-md px-6">


        <div className="rounded-3xl bg-white p-8 shadow-sm">


          <h1 className="mb-6 text-center text-3xl font-bold">
            Create Account
          </h1>



          {message && (

            <div className="mb-5 rounded-xl bg-green-50 p-3 text-center text-green-700">

              {message}

            </div>

          )}



          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >



            <div className="relative">

              <User
                className="absolute left-4 top-3.5 text-gray-400"
                size={20}
              />

              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-green-600"
              />

            </div>




            <div className="relative">

              <Mail
                className="absolute left-4 top-3.5 text-gray-400"
                size={20}
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-green-600"
              />

            </div>





            <div className="relative">

              <Phone
                className="absolute left-4 top-3.5 text-gray-400"
                size={20}
              />

              <input
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-green-600"
              />

            </div>





            <div className="relative">

              <Lock
                className="absolute left-4 top-3.5 text-gray-400"
                size={20}
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-green-600"
              />

            </div>





            <button
              disabled={loading}
              className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
            >

              {loading
                ? "Creating..."
                : "Create Account"}

            </button>



          </form>


        </div>


      </div>


    </main>

  );

}
