import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Heart,
} from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  featured?: boolean;
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  image,
  type,
  bedrooms,
  bathrooms,
  area,
  featured = false,
}: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />


        <div className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white">
          {type}
        </div>


        <button
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 transition hover:text-red-500"
          aria-label="Add to favorites"
        >
          <Heart size={20} />
        </button>


        {featured && (
          <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-1 text-sm text-white backdrop-blur">
            Featured
          </div>
        )}

      </div>


      {/* Content */}
      <div className="p-6">


        <h3 className="mb-2 line-clamp-1 text-xl font-bold text-gray-900">
          {title}
        </h3>


        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">

          <MapPin size={16} className="text-green-600" />

          <span>
            {location}
          </span>

        </div>


        <p className="mb-5 text-2xl font-bold text-green-700">
          {price}
        </p>


        {/* Features */}
        <div className="mb-6 grid grid-cols-3 gap-3 border-y py-4 text-sm text-gray-600">


          <div className="flex flex-col items-center gap-1">
            <BedDouble size={20} className="text-green-600" />
            <span>{bedrooms} Beds</span>
          </div>


          <div className="flex flex-col items-center gap-1">
            <Bath size={20} className="text-green-600" />
            <span>{bathrooms} Baths</span>
          </div>


          <div className="flex flex-col items-center gap-1">
            <Ruler size={20} className="text-green-600" />
            <span>{area}</span>
          </div>


        </div>


        <Link
          href={`/properties/${id}`}
          className="block rounded-xl bg-gray-900 py-3 text-center font-semibold text-white transition hover:bg-green-700"
        >
          View Details
        </Link>


      </div>

    </article>
  );
}
