"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  DollarSign,
  Heart,
} from "lucide-react";


const properties = [
  {
    id: "1",
    title: "Modern Luxury Villa",
    location: "Dubai, UAE",
    price: "$1,850,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description:
      "Beautiful modern luxury villa with premium finishing and spacious rooms.",
    bedrooms: 5,
    bathrooms: 4,
    area: "420 m²",
  },

  {
    id: "2",
    title: "Downtown Modern Apartment",
    location: "London, UK",
    price: "$980,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    description:
      "Modern apartment located in the heart of London.",
    bedrooms: 3,
    bathrooms: 2,
    area: "180 m²",
  },

  {
    id: "3",
    title: "Luxury Beach House",
    location: "Miami, USA",
    price: "$2,300,000",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    description:
      "Luxury beach house with amazing ocean view.",
    bedrooms: 4,
    bathrooms: 3,
    area: "350 m²",
  },
 {
   id: "4",
   title: "Modern Office Building",
   location: "Berlin, Germany",
   price: "$3,500,000",
   image:
     "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
   description:
    "Modern office building located in the business district.",
   bedrooms: 0,
   bathrooms: 4,
   area: "600 m²",
  },
 {
   id: "5",
   title: "Family Residence",
   location: "Paris, France",
   price: "$1,450,000",
   image:
     "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
   description:
    "Comfortable family home in a quiet neighborhood.",
   bedrooms: 4,
   bathrooms: 3,
   area: "280 m²",
  },
 {
   id: "6",
   title: "Luxury Penthouse",
   location: "New York, USA",
   price: "$4,200,000",
   image:
     "https://images.unsplash.com/photo-1600607688960-e095ff83135c",
   description:
     "Luxury penthouse with panoramic city skyline views.",
   bedrooms: 5,
   bathrooms: 5,
   area: "500 m²",
  },
];



export default function PropertyDetailsPage() {

  const params = useParams();

  const router = useRouter();

  const id = params.id as string;


  const [favorite, setFavorite] = useState(false);



  const property = properties.find(
    (item) => item.id === id
  );



  if (!property) {

    return (
      <div className="flex min-h-screen items-center justify-center">
        Property not found
      </div>
    );

  }




  const addFavorite = async () => {


    const res = await fetch(
      "/api/favorites",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          propertyId: property.id,
        }),
      }
    );



    if (res.status === 401) {

      router.push("/login");

      return;

    }



    const data = await res.json();


    setFavorite(
      data.favorite
    );


  };




  return (

    <main className="bg-gray-50 py-16">

      <div className="mx-auto max-w-6xl px-6">


        <div className="overflow-hidden rounded-3xl bg-white shadow">


          <div className="relative h-[450px]">


            <Image
              src={property.image}
              alt={property.title}
              fill
              sizes="100vw"
              className="object-cover"
            />



            <button
              onClick={addFavorite}
              className={`absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow ${
                favorite
                  ? "text-red-600"
                  : "text-gray-700"
              }`}
            >

              <Heart
                fill={
                  favorite
                    ? "red"
                    : "none"
                }
              />

            </button>



          </div>




          <div className="p-8">


            <h1 className="text-4xl font-bold">
              {property.title}
            </h1>



            <p className="mt-3 flex items-center gap-2 text-gray-600">

              <MapPin size={20}/>

              {property.location}

            </p>




            <div className="mt-8 grid gap-5 md:grid-cols-4">


              <div className="rounded-xl border p-4">

                <DollarSign className="text-green-600"/>

                <p className="mt-2 font-bold">
                  {property.price}
                </p>

              </div>




              <div className="rounded-xl border p-4">

                <BedDouble className="text-green-600"/>

                <p className="mt-2 font-bold">
                  {property.bedrooms} Beds
                </p>

              </div>




              <div className="rounded-xl border p-4">

                <Bath className="text-green-600"/>

                <p className="mt-2 font-bold">
                  {property.bathrooms} Baths
                </p>

              </div>


              <div className="rounded-xl border p-4">

                <Ruler className="text-green-600"/>

                <p className="mt-2 font-bold">
                  {property.area}
                </p>

              </div>



            </div>



            <div className="mt-10">

              <h2 className="text-2xl font-bold">
                Description
              </h2>

              <p className="mt-3 text-gray-600">
                {property.description}
              </p>

            </div>

            <div className="mt-8 flex gap-4">

              <button
                onClick={() => router.push("/messages")}
                className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
              >
                Message Agent
              </button>

              <button
                onClick={addFavorite}
                className={`rounded-xl border px-8 py-3 font-semibold ${
                  favorite
                    ? "border-red-600 bg-red-50 text-red-600"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {favorite ? "♥ Saved" : "♡ Add to Favorites"}
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}

      
