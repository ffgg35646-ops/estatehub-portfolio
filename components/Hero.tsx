import Link from "next/link";
import { ArrowRight, Search, MapPin, Home, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-black/50" />


      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

        <div className="max-w-4xl text-white">


          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md">

            <Building2 className="h-4 w-4 text-green-400" />

            <span className="text-sm">
              Premium Real Estate Platform
            </span>

          </div>



          <h1 className="text-5xl font-bold leading-tight md:text-7xl">

            Find Your

            <span className="block text-green-400">
              Perfect Home
            </span>

            Around The World

          </h1>



          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">

            Discover luxury villas, modern apartments and unique
            properties from trusted real estate agents worldwide.

          </p>



          <div className="mt-10 flex flex-wrap gap-4">


            <Link href="/properties">

              <Button
                size="lg"
                className="bg-green-600 px-8 text-white hover:bg-green-700"
              >

                Explore Properties

                <ArrowRight className="ml-2 h-5 w-5" />

              </Button>

            </Link>



            <Link href="/add-property">

              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-black"
              >

                Sell Your Property

              </Button>

            </Link>


          </div>




          <div className="mt-12 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">


            <div className="grid gap-4 md:grid-cols-4">


              <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-gray-700">

                <MapPin className="text-green-600" />

                <span>
                  Location
                </span>

              </div>



              <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-gray-700">

                <Home className="text-green-600" />

                <span>
                  Property Type
                </span>

              </div>




              <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-gray-700">

                <Building2 className="text-green-600" />

                <span>
                  Buy / Rent
                </span>

              </div>




              <button className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">

                <Search size={20} />

                Search

              </button>


            </div>


          </div>




        </div>

      </div>




      <div className="absolute bottom-8 left-0 right-0 hidden md:block">

        <div className="mx-auto grid max-w-5xl grid-cols-4 gap-6 rounded-2xl bg-white/10 p-6 text-center text-white backdrop-blur-md">


          <div>
            <h3 className="text-3xl font-bold">
              15K+
            </h3>
            <p className="text-gray-200">
              Properties
            </p>
          </div>


          <div>
            <h3 className="text-3xl font-bold">
              120+
            </h3>
            <p className="text-gray-200">
              Cities
            </p>
          </div>


          <div>
            <h3 className="text-3xl font-bold">
              8K+
            </h3>
            <p className="text-gray-200">
              Clients
            </p>
          </div>


          <div>
            <h3 className="text-3xl font-bold">
              15+
            </h3>
            <p className="text-gray-200">
              Years
            </p>
          </div>


        </div>

      </div>


    </section>
  );
}
