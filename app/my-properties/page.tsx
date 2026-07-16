import Link from "next/link";
import Image from "next/image";
import {
  Plus,
  Edit,
  Trash2,
  MapPin,
  Eye,
} from "lucide-react";


const myProperties = [
  {
    id: "1",
    title: "Modern Luxury Villa",
    location: "Dubai, UAE",
    price: "$1,850,000",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: "2",
    title: "Family Apartment",
    location: "Paris, France",
    price: "$750,000",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
  },
];


export default function MyPropertiesPage() {
  return (
    <main className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">


          <div>

            <h1 className="text-4xl font-bold text-gray-900">
              My Properties
            </h1>

            <p className="mt-3 text-gray-600">
              Manage your listed properties.
            </p>

          </div>



          <Link
            href="/add-property"
            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white hover:bg-green-700"
          >

            <Plus size={20}/>

            Add Property

          </Link>


        </div>




        <div className="grid gap-8 md:grid-cols-2">


          {myProperties.map((property) => (

            <div
              key={property.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >


              <div className="relative h-64">

                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />


                <span
                  className={`absolute left-5 top-5 rounded-full px-4 py-2 text-sm font-semibold ${
                    property.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {property.status}
                </span>


              </div>




              <div className="p-6">


                <h2 className="text-2xl font-bold">
                  {property.title}
                </h2>



                <div className="mt-3 flex items-center gap-2 text-gray-500">

                  <MapPin size={18}/>

                  {property.location}

                </div>



                <p className="mt-4 text-2xl font-bold text-green-700">
                  {property.price}
                </p>




                <div className="mt-6 flex gap-3">


                  <Link
                    href={`/properties/${property.id}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-100 py-3 font-semibold hover:bg-gray-200"
                  >

                    <Eye size={18}/>

                    View

                  </Link>



                  <Link
                    href={`/edit-property/${property.id}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
                  >

                    <Edit size={18}/>

                    Edit

                  </Link>


                </div>




                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border py-3 font-semibold text-red-600 hover:bg-red-50">

                  <Trash2 size={18}/>

                  Delete

                </button>



              </div>


            </div>

          ))}


        </div>


      </div>


    </main>
  );
}
