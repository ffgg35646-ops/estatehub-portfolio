import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";

const properties = [
  {
    id: "1",
    title: "Modern Luxury Villa",
    location: "Dubai, UAE",
    price: "$1,850,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: "420 m²",
    featured: true,
  },

  {
    id: "2",
    title: "Ocean View Apartment",
    location: "Miami, USA",
    price: "$950,000",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: "180 m²",
    featured: true,
  },

  {
    id: "3",
    title: "Contemporary Family House",
    location: "London, UK",
    price: "$1,250,000",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: "300 m²",
    featured: true,
  },
];


export default function FeaturedProperties() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">


          <div>

            <p className="mb-3 font-semibold text-green-600">
              Featured Properties
            </p>

            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Explore Our Premium Homes
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Discover hand-picked properties selected for luxury,
              comfort and investment value.
            </p>

          </div>


          <Link
            href="/properties"
            className="font-semibold text-green-700 hover:text-green-800"
          >
            View All Properties →
          </Link>


        </div>



        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {properties.map((property) => (

            <PropertyCard
              key={property.id}
              {...property}
            />

          ))}


        </div>


      </div>

    </section>
  );
}
