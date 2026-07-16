import {
  Home,
  MapPin,
  DollarSign,
  BedDouble,
  Bath,
  Ruler,
  Save,
} from "lucide-react";


export default function EditPropertyPage() {
  return (
    <main className="bg-gray-50 py-20">

      <div className="mx-auto max-w-5xl px-6">


        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-900">
            Edit Property
          </h1>

          <p className="mt-3 text-gray-600">
            Update your property information.
          </p>

        </div>




        <div className="rounded-3xl bg-white p-8 shadow-sm">


          <form className="space-y-6">



            <div className="grid gap-6 md:grid-cols-2">


              <div>

                <label className="mb-2 block font-semibold">
                  Property Title
                </label>


                <div className="relative">

                  <Home
                    className="absolute left-4 top-3.5 text-gray-400"
                    size={20}
                  />

                  <input
                    defaultValue="Modern Luxury Villa"
                    className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-green-600"
                  />

                </div>


              </div>




              <div>

                <label className="mb-2 block font-semibold">
                  Location
                </label>


                <div className="relative">

                  <MapPin
                    className="absolute left-4 top-3.5 text-gray-400"
                    size={20}
                  />

                  <input
                    defaultValue="Dubai, UAE"
                    className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-green-600"
                  />

                </div>


              </div>


            </div>





            <div className="grid gap-6 md:grid-cols-2">


              <div>

                <label className="mb-2 block font-semibold">
                  Price
                </label>


                <div className="relative">

                  <DollarSign
                    className="absolute left-4 top-3.5 text-gray-400"
                    size={20}
                  />

                  <input
                    defaultValue="1850000"
                    className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-green-600"
                  />

                </div>


              </div>




              <div>

                <label className="mb-2 block font-semibold">
                  Property Type
                </label>


                <select className="w-full rounded-xl border px-4 py-3">

                  <option>
                    Villa
                  </option>

                  <option>
                    Apartment
                  </option>

                  <option>
                    House
                  </option>

                  <option>
                    Commercial
                  </option>

                </select>


              </div>


            </div>





            <div className="grid gap-6 md:grid-cols-3">


              <div className="relative">

                <BedDouble
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  defaultValue="5 Bedrooms"
                  className="w-full rounded-xl border py-3 pl-12 pr-4"
                />

              </div>




              <div className="relative">

                <Bath
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  defaultValue="4 Bathrooms"
                  className="w-full rounded-xl border py-3 pl-12 pr-4"
                />

              </div>





              <div className="relative">

                <Ruler
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  defaultValue="420 m²"
                  className="w-full rounded-xl border py-3 pl-12 pr-4"
                />

              </div>


            </div>





            <div>

              <label className="mb-2 block font-semibold">
                Description
              </label>


              <textarea
                rows={5}
                defaultValue="Modern luxury villa with premium finishes and beautiful views."
                className="w-full rounded-xl border p-4 outline-none focus:border-green-600"
              />


            </div>





            <button
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-semibold text-white hover:bg-green-700"
            >

              <Save size={20}/>

              Save Changes

            </button>


          </form>


        </div>


      </div>


    </main>
  );
}
