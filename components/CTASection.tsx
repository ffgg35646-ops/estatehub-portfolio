import Link from "next/link";
import {
  ArrowRight,
  Home,
  Phone,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-green-700 py-20">

      <div className="absolute inset-0 bg-gradient-to-r from-green-800/50 to-green-600/30" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-10 rounded-3xl bg-white/10 p-8 backdrop-blur-md md:grid-cols-2 md:p-12">


          <div className="text-white">

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <Home size={26} />
              </div>

              <span className="font-semibold">
                Start Your Real Estate Journey
              </span>

            </div>


            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Ready To Find Your Dream Property?
            </h2>


            <p className="mt-5 max-w-xl text-lg text-green-100">
              Explore thousands of verified properties or list your
              property with EstateHub and reach trusted buyers worldwide.
            </p>


          </div>



          <div className="flex flex-col gap-4 sm:flex-row md:justify-end">


            <Link
              href="/properties"
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100"
            >
              Browse Properties
              <ArrowRight size={20} />
            </Link>


            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700"
            >
              <Phone size={20} />
              Contact Us
            </Link>


          </div>


        </div>

      </div>

    </section>
  );
}
