"use client";

import { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";
import Link from "next/link";

const users = [
  {
    id: 1,
    name: "John Smith",
    last: "Hello, is the villa available?",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    last: "Can I visit tomorrow?",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      from: "agent",
      text: "Hello 👋 How can I help you?",
    },
  ]);

  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;

    setMessages((old) => [
      ...old,
      {
        from: "me",
        text,
      },
      {
        from: "agent",
        text: "Thank you. We will contact you shortly.",
      },
    ]);

    setText("");
  }

  return (
    <main className="min-h-screen bg-gray-100">

      <div className="mx-auto flex h-screen max-w-7xl overflow-hidden rounded-xl bg-white shadow">

        <aside className="w-80 border-r">

          <div className="border-b p-5">

            <Link
              href="/properties"
              className="flex items-center gap-2 font-semibold"
            >
              <ArrowLeft size={18} />
              Back
            </Link>

            <h1 className="mt-4 text-2xl font-bold">
              Messages
            </h1>

          </div>

          {users.map((user) => (
            <div
              key={user.id}
              className="cursor-pointer border-b p-4 hover:bg-gray-50"
            >
              <h3 className="font-semibold">
                {user.name}
              </h3>

              <p className="text-sm text-gray-500">
                {user.last}
              </p>
            </div>
          ))}

        </aside>

        <section className="flex flex-1 flex-col">

          <div className="border-b p-5">

            <h2 className="text-xl font-bold">
              John Smith
            </h2>

            <p className="text-sm text-green-600">
              Online
            </p>

          </div>

          <div className="flex-1 space-y-3 overflow-auto p-6">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-md rounded-xl p-3 ${
                  msg.from === "me"
                    ? "ml-auto bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}

          </div>

          <div className="flex gap-3 border-t p-5">

            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write message..."
              className="flex-1 rounded-xl border px-4"
            />

            <button
              onClick={send}
              className="rounded-xl bg-green-600 px-6 text-white"
            >
              <Send size={18} />
            </button>

          </div>

        </section>

      </div>

    </main>
  );
}
