import PropertyCard from "@/components/PropertyCard";

const properties = [
  {
    id: "1",
    title: "Modern Luxury Villa",
    location: "Dubai, UAE",
    price: "$1,850,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: "420 m²",
    featured: true,
  },

  {
    id: "2",
    title: "Downtown Modern Apartment",
    location: "London, UK",
    price: "$980,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    type: "Apartment",
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
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    type: "House",
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
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    type: "Commercial",
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
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    type: "House",
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
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1200&q=80",
    type: "Apartment",
    bedrooms: 5,
    bathrooms: 5,
    area: "500 m²",
  },
];


export default function PropertiesPage() {
  return (
    <main className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">

          <p className="font-semibold text-green-600">
            Properties
          </p>

          <h1 className="mt-3 text-5xl font-bold text-gray-900">
            Find Your Perfect Property
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore luxury homes, apartments and commercial
            properties around the world.
          </p>

        </div>



        <div className="mb-10 grid gap-4 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-4">


          <input
            placeholder="Search location..."
            className="rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />


          <select className="rounded-xl border px-4 py-3">
            <option>
              Property Type
            </option>
            <option>
              Villa
            </option>
            <option>
              Apartment
            </option>
            <option>
              House
            </option>
          </select>


          <select className="rounded-xl border px-4 py-3">
            <option>
              Buy / Rent
            </option>
            <option>
              Buy
            </option>
            <option>
              Rent
            </option>
          </select>


          <button className="rounded-xl bg-green-600 font-semibold text-white transition hover:bg-green-700">
            Search
          </button>


        </div>



        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {properties.map((property) => (

            <PropertyCard
              key={property.id}
              {...property}
            />

          ))}


        </div>


      </div>

    </main>
  );
}
