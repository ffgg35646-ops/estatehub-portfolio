"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Upload,
  Home,
  MapPin,
  DollarSign,
  BedDouble,
  Bath,
  Ruler,
} from "lucide-react";


export default function AddPropertyPage() {

  const router = useRouter();


  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    category: "Villa",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    images: [],
  });


  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);



  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
        "/api/properties",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({

            ...formData,

            price: Number(formData.price),

            bedrooms: Number(formData.bedrooms),

            bathrooms: Number(formData.bathrooms),

            area: Number(formData.area),

          }),
        }
      );



      const data = await res.json();



      if (!res.ok) {

        setMessage(
          data.message || "Something went wrong"
        );

        return;

      }



      setMessage(
        "Property published successfully"
      );


      router.push("/my-properties");



    } catch {

      setMessage(
        "Server error"
      );


    } finally {

      setLoading(false);

    }

  };





  return (

    <main className="bg-gray-50 py-20">


      <div className="mx-auto max-w-5xl px-6">


        <div className="mb-10 text-center">


          <h1 className="text-4xl font-bold text-gray-900">
            Add New Property
          </h1>


          <p className="mt-3 text-gray-600">
            List your property and reach potential buyers.
          </p>


        </div>





        {message && (

          <div className="mb-5 rounded-xl bg-green-50 p-4 text-center text-green-700">

            {message}

          </div>

        )}






        <div className="rounded-3xl bg-white p-8 shadow-sm">



          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >



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
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Luxury Villa"
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
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Dubai, UAE"
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
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    type="number"
                    placeholder="1500000"
                    className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-green-600"
                  />


                </div>


              </div>





              <div>

                <label className="mb-2 block font-semibold">
                  Property Type
                </label>


                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3"
                >

                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Office</option>

                </select>


              </div>


            </div>






            <div className="grid gap-6 md:grid-cols-3">


              <input
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                placeholder="Bedrooms"
                className="rounded-xl border px-4 py-3"
              />



              <input
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                placeholder="Bathrooms"
                className="rounded-xl border px-4 py-3"
              />



              <input
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Area m²"
                className="rounded-xl border px-4 py-3"
              />


            </div>





            <textarea

              name="description"

              value={formData.description}

              onChange={handleChange}

              rows={5}

              placeholder="Describe your property..."

              className="w-full rounded-xl border p-4 outline-none focus:border-green-600"

            />






            <div className="flex h-40 items-center justify-center rounded-2xl border-2 border-dashed">


              <div className="text-center text-gray-500">

                <Upload className="mx-auto mb-3"/>

                <p>
                  Upload Images
                </p>


              </div>


            </div>





            <button
              disabled={loading}
              className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
            >

              {loading
                ? "Publishing..."
                : "Publish Property"}

            </button>



          </form>



        </div>


      </div>


    </main>

  );

}
