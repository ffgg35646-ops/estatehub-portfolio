"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Send,
  User,
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender:string;
  time: string;
}

interface Conversation {
  id: number;
  name: string;
  messages: Message[];
}

export default function MessagesPage() {

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [text, setText] = useState("");

  useEffect(() => {

    const saved = localStorage.getItem("estate_messages");

    if (saved) {

      const data = JSON.parse(saved);

      setConversations(data);

      if (data.length > 0) {
        setSelectedId(data[0].id);
      }

    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "estate_messages",
      JSON.stringify(conversations)
    );

  }, [conversations]);

  const selectedConversation =
    conversations.find(
      (c) => c.id === selectedId
    ) || null;

  function handleSend() {

    if (!text.trim()) return;

    if (!selectedConversation) {

      const newConversation: Conversation = {

        id: Date.now(),

        name: "Property Owner",

        messages: [
          {
            id: Date.now(),
            text,
            sender: "me",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      };

      setConversations([newConversation]);

      setSelectedId(newConversation.id);

      setText("");

      return;
    }

    const updated = conversations.map((conv) => {

      if (conv.id !== selectedConversation.id)
        return conv;

      return {

        ...conv,

        messages: [
          ...conv.messages,

          {
            id: Date.now(),
            text,
            sender: "me",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },

        ],

      };

    });

    setConversations(updated);

    setText("");

  }

  return (

    <main className="bg-gray-50 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Messages
          </h1>

          <p className="mt-3 text-gray-600">
            Your conversations are stored locally.
          </p>

        </div>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-3">
                    {/* Conversations */}

          <div className="border-r p-6">

            <div className="mb-6 flex items-center gap-3 rounded-xl border px-4 py-3">

              <Search
                size={20}
                className="text-gray-400"
              />

              <input
                placeholder="Search messages..."
                className="w-full outline-none"
              />

            </div>

            <div className="space-y-3">

              {conversations.length === 0 ? (

                <div className="py-16 text-center">

                  <User
                    size={55}
                    className="mx-auto text-gray-300"
                  />

                  <h3 className="mt-5 text-lg font-bold">
                    No conversations yet
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Send your first message to create a conversation.
                  </p>

                </div>

              ) : (

                conversations.map((chat) => (

                  <button
                    key={chat.id}
                    onClick={() => setSelectedId(chat.id)}
                    className={`flex w-full items-center gap-4 rounded-xl p-4 text-left transition ${
                      selectedId === chat.id
                        ? "bg-green-100"
                        : "hover:bg-green-50"
                    }`}
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <User />
                    </div>

                    <div className="flex-1">

                      <h3 className="font-semibold">
                        {chat.name}
                      </h3>

                      <p className="truncate text-sm text-gray-500">
                        {
                          chat.messages[
                            chat.messages.length - 1
                          ]?.text
                        }
                      </p>

                    </div>

                  </button>

                ))

              )}

            </div>

          </div>

          {/* Chat */}

          <div className="flex min-h-[600px] flex-col lg:col-span-2">

            <div className="border-b p-6">

              <h2 className="text-xl font-bold">
                {selectedConversation
                  ? selectedConversation.name
                  : "New Conversation"}
              </h2>

            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-6">

              {!selectedConversation ? (

                <div className="flex h-full items-center justify-center text-center">

                  <div>

                    <User
                      size={60}
                      className="mx-auto text-gray-300"
                    />

                    <h3 className="mt-5 text-xl font-bold">
                      No conversation yet
                    </h3>

                    <p className="mt-2 text-gray-500">
                      Send a message below to start chatting.
                    </p>

                  </div>

                </div>

              ) : (

                selectedConversation.messages.map((msg) => (

                  <div
                    key={msg.id}
                    className={`max-w-md rounded-2xl p-4 ${
                      msg.sender === "me"
                        ? "ml-auto bg-green-600 text-white"
                        : "bg-gray-100"
                    }`}
                  >

                    <p>{msg.text}</p>

                    <p className="mt-2 text-xs opacity-70">
                      {msg.time}
                    </p>

                  </div>

                ))

              )}

            </div>

            <div className="border-t p-5">

              <div className="flex gap-3">

                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Write a message..."
                  className="flex-1 rounded-xl border px-5 py-3 outline-none focus:border-green-600"
                />

                <button
                  onClick={handleSend}
                  className="flex items-center gap-2 rounded-xl bg-green-600 px-6 text-white hover:bg-green-700"
                >

                  <Send size={20} />

                  Send

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}
