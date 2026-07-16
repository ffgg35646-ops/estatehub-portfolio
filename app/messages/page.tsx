import {
  Search,
  Send,
  User,
} from "lucide-react";


const conversations = [
  {
    id: 1,
    name: "Ahmed Real Estate",
    lastMessage: "Is the villa still available?",
    time: "10:30 AM",
  },

  {
    id: 2,
    name: "Sarah Johnson",
    lastMessage: "I want more details about the apartment.",
    time: "Yesterday",
  },

  {
    id: 3,
    name: "Luxury Homes Agency",
    lastMessage: "Your property request has been received.",
    time: "2 days ago",
  },
];


export default function MessagesPage() {
  return (
    <main className="bg-gray-50 py-16">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-900">
            Messages
          </h1>

          <p className="mt-3 text-gray-600">
            Communicate with buyers and property owners.
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


              {conversations.map((chat) => (

                <button
                  key={chat.id}
                  className="flex w-full items-center gap-4 rounded-xl p-4 text-left transition hover:bg-green-50"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">

                    <User />

                  </div>


                  <div className="flex-1">

                    <h3 className="font-semibold">
                      {chat.name}
                    </h3>

                    <p className="truncate text-sm text-gray-500">
                      {chat.lastMessage}
                    </p>

                  </div>


                  <span className="text-xs text-gray-400">
                    {chat.time}
                  </span>


                </button>

              ))}


            </div>


          </div>





          {/* Chat */}

          <div className="flex min-h-[600px] flex-col lg:col-span-2">


            <div className="border-b p-6">

              <h2 className="text-xl font-bold">
                Ahmed Real Estate
              </h2>

              <p className="text-sm text-gray-500">
                Property Agent
              </p>

            </div>




            <div className="flex-1 space-y-5 p-6">


              <div className="max-w-md rounded-2xl bg-gray-100 p-4">

                Hello, I am interested in your property.

              </div>



              <div className="ml-auto max-w-md rounded-2xl bg-green-600 p-4 text-white">

                Welcome, I can provide more details.

              </div>




              <div className="max-w-md rounded-2xl bg-gray-100 p-4">

                Can we schedule a viewing?

              </div>



            </div>




            <div className="border-t p-5">

              <div className="flex gap-3">


                <input
                  placeholder="Write a message..."
                  className="flex-1 rounded-xl border px-5 py-3 outline-none focus:border-green-600"
                />



                <button className="flex items-center gap-2 rounded-xl bg-green-600 px-6 text-white hover:bg-green-700">

                  <Send size={20}/>

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
