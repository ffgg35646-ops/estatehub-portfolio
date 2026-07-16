"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Ruler,
} from "lucide-react";


const properties = [
  {
    id: "1",
    title: "Modern Luxury Villa",
    location: "Dubai, UAE",
    price: "$1,850,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
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
    bedrooms: 4,
    bathrooms: 3,
    area: "350 m²",
  },
];



export default function FavoritesPage() {

  const router = useRouter();

  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const loadFavorites = async () => {

      const res = await fetch(
        "/api/favorites"
      );


      if (res.status === 401) {

        router.push("/login");
        return;

      }


      const data = await res.json();



      setFavorites(
        data.favorites.map(
          (item:any) => item.propertyId
        )
      );


      setLoading(false);

    };


    loadFavorites();


  }, [router]);




  const removeFavorite = async (
    propertyId:string
  ) => {


    await fetch(
      "/api/favorites",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          propertyId,
        }),
      }
    );



    setFavorites(
      favorites.filter(
        id => id !== propertyId
      )
    );


  };




  if(loading){

    return(
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );

  }




  const favoriteProperties =
    properties.filter(
      item =>
        favorites.includes(item.id)
    );




  return (

    <main className="min-h-screen bg-gray-50 py-16">

      <div className="mx-auto max-w-7xl px-6">


        <h1 className="mb-10 flex items-center gap-3 text-4xl font-bold">

          <Heart className="text-red-500"/>

          My Favorites

        </h1>



        {favoriteProperties.length === 0 && (

          <div className="rounded-2xl bg-white p-10 text-center">

            No favorite properties yet.

          </div>

        )}




        <div className="grid gap-8 md:grid-cols-3">


          {favoriteProperties.map(property => (

            <div
              key={property.id}
              className="overflow-hidden rounded-2xl bg-white shadow"
            >

              <img
                src={property.image}
                alt={property.title}
                className="h-64 w-full object-cover"
              />


              <div className="p-6">


                <h2 className="text-xl font-bold">
                  {property.title}
                </h2>


                <p className="mt-2 flex gap-2 text-gray-500">
                  <MapPin size={18}/>
                  {property.location}
                </p>



                <p className="mt-4 text-2xl font-bold text-green-600">
                  {property.price}
                </p>



                <div className="my-5 flex justify-between text-sm">

                  <span>
                    <BedDouble size={16}/>
                    {property.bedrooms}
                  </span>

                  <span>
                    <Bath size={16}/>
                    {property.bathrooms}
                  </span>

                  <span>
                    <Ruler size={16}/>
                    {property.area}
                  </span>

                </div>




                <Link
                  href={`/properties/${property.id}`}
                  className="block rounded-xl bg-green-600 py-3 text-center text-white"
                >
                  View Details
                </Link>



                <button
                  onClick={() =>
                    removeFavorite(property.id)
                  }
                  className="mt-3 w-full rounded-xl border py-3 text-red-600"
                >
                  Remove
                </button>



              </div>

            </div>

          ))}


        </div>


      </div>


    </main>

  );

}
