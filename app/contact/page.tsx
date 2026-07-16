import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";


export default function ContactPage() {
  return (
    <main className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">

          <h1 className="text-5xl font-bold text-gray-900">
            Contact EstateHub
          </h1>

          <p className="mt-4 text-gray-600">
            Get in touch with our real estate experts.
          </p>

        </div>



        <div className="grid gap-10 lg:grid-cols-2">


          {/* Information */}

          <div className="rounded-3xl bg-green-700 p-10 text-white">


            <h2 className="text-3xl font-bold">
              Let's Talk
            </h2>


            <p className="mt-5 text-green-100">
              Have questions about buying, selling or renting?
              Our team is ready to help.
            </p>



            <div className="mt-10 space-y-6">


              <div className="flex items-center gap-4">

                <Mail />

                <span>
                  info@estatehub.com
                </span>

              </div>



              <div className="flex items-center gap-4">

                <Phone />

                <span>
                  +971 50 123 4567
                </span>

              </div>



              <div className="flex items-center gap-4">

                <MapPin />

                <span>
                  Dubai, United Arab Emirates
                </span>

              </div>


            </div>


          </div>



          {/* Form */}

          <div className="rounded-3xl bg-white p-10 shadow-sm">


            <form className="space-y-5">


              <input
                placeholder="Your Name"
                className="w-full rounded-xl border px-5 py-4 outline-none focus:border-green-600"
              />


              <input
                placeholder="Email Address"
                type="email"
                className="w-full rounded-xl border px-5 py-4 outline-none focus:border-green-600"
              />



              <input
                placeholder="Subject"
                className="w-full rounded-xl border px-5 py-4 outline-none focus:border-green-600"
              />



              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-xl border px-5 py-4 outline-none focus:border-green-600"
              />



              <button
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-semibold text-white hover:bg-green-700"
              >

                <Send size={20}/>

                Send Message

              </button>


            </form>


          </div>


        </div>


      </div>


    </main>
  );
}
