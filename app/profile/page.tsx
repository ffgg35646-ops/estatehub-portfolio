"use client";

import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Pencil,
  X,
} from "lucide-react";

interface UserData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  role: string;
}

interface CardData {
  holder: string;
  number: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserData | null>(null);

  const [showEdit, setShowEdit] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [card, setCard] = useState<CardData | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      const data = JSON.parse(savedUser);

      setUser(data);

      setForm({
        name: data.name || "",
        phone: data.phone || "",
        address: data.address || "",
      });
    }

    const savedCard = localStorage.getItem("paymentCard");

    if (savedCard) {
      setCard(JSON.parse(savedCard));
    }
  }, []);

  function handleSave() {
    if (!user) return;

    const updatedUser = {
      ...user,
      name: form.name,
      phone: form.phone,
      address: form.address,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    window.dispatchEvent(new Event("userChanged"));

    setUser(updatedUser);

    setShowEdit(false);
  }

  function handleAddCard() {
    const holder = prompt("Card Holder");

    if (!holder) return;

    const number = prompt("Card Number");

    if (!number) return;

    const newCard = {
      holder,
      number,
    };

    localStorage.setItem(
      "paymentCard",
      JSON.stringify(newCard)
    );

    setCard(newCard);
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <div className="flex flex-col items-center gap-6 md:flex-row">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-green-600 text-4xl font-bold text-white">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <div className="flex-1">

              <h1 className="text-3xl font-bold">
                {user.name}
              </h1>

              <p className="mt-2 text-gray-500">
                {user.email}
              </p>

              <span className="mt-3 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                {user.role}
              </span>

            </div>

            <button
              onClick={() => setShowEdit(true)}
              className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700"
            >
              <Pencil size={18} />
              Edit Profile
            </button>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border bg-gray-50 p-6">

              <h2 className="mb-5 text-xl font-bold">
                Account Information
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-3">
                  <Mail className="text-green-600" />
                  <span>{user.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-green-600" />
                  <span>{user.phone || "No phone added"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-green-600" />
                  <span>{user.address || "No address added"}</span>
                </div>

              </div>

            </div>
                        <div className="rounded-2xl border bg-gray-50 p-6">

              <div className="mb-5 flex items-center justify-between">

                <h2 className="text-xl font-bold">
                  Payment Method
                </h2>

                <button
                  onClick={handleAddCard}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  {card ? "Change Card" : "Add Card"}
                </button>

              </div>
{card ? (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6 text-white shadow-xl">

    <div className="flex items-center justify-between">
      <CreditCard size={38} />

      <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
        VISA
      </span>
    </div>


    <p className="mt-8 text-xl font-semibold tracking-[4px]">
      **** **** **** {card.number.slice(-4)}
    </p>


    <div className="mt-6 flex items-end justify-between">

      <div>
        <p className="text-xs uppercase opacity-70">
          Card Holder
        </p>

        <p className="mt-1 font-semibold">
          {card.holder}
        </p>
      </div>


      <div>
        <p className="text-xs uppercase opacity-70">
          Expires
        </p>

        <p className="mt-1 font-semibold">
          12/28
        </p>
      </div>


    </div>

  </div>

) : (

  <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-8">

    <div className="text-center">

      <CreditCard
        size={45}
        className="mx-auto text-gray-400"
      />


      <h3 className="mt-4 text-lg font-bold text-gray-800">
        Add Payment Method
      </h3>


      <p className="mt-2 text-sm text-gray-500">
        Add your Visa or Mastercard details securely.
      </p>


      <div className="mt-6 space-y-3 text-left">


        <input
          placeholder="Card Number"
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
        />


        <input
          placeholder="Card Holder Name"
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
        />


        <div className="grid grid-cols-2 gap-3">

          <input
            placeholder="MM/YY"
            className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />


          <input
            placeholder="CVV"
            className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />

        </div>


        <button
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Add Card
        </button>


      </div>


    </div>


  </div>

)}
            </div>

          </div>

        </div>

      </div>

      {showEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                Edit Profile
              </h2>

              <button onClick={() => setShowEdit(false)}>
                <X />
              </button>

            </div>

            <div className="space-y-4">

              <input
                type="text"
                value={form.name}
                placeholder="Full Name"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full rounded-xl border p-3"
              />

              <input
                type="text"
                value={form.phone}
                placeholder="Phone"
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full rounded-xl border p-3"
              />

              <input
                type="text"
                value={form.address}
                placeholder="Address"
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
                className="w-full rounded-xl border p-3"
              />

              <button
                onClick={handleSave}
                className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}
