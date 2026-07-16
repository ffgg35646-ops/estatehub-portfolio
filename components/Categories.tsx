import {
  Building2,
  Home,
  Hotel,
  LandPlot,
  Warehouse,
  Castle,
} from "lucide-react";

const categories = [
  {
    title: "Luxury Villas",
    description: "Exclusive villas with premium spaces and modern designs.",
    icon: Castle,
    count: "2,500+ Properties",
  },

  {
    title: "Apartments",
    description: "Modern apartments in the best locations worldwide.",
    icon: Building2,
    count: "8,900+ Properties",
  },

  {
    title: "Family Homes",
    description: "Comfortable homes designed for families.",
    icon: Home,
    count: "4,200+ Properties",
  },

  {
    title: "Hotels & Resorts",
    description: "Investment opportunities in hospitality properties.",
    icon: Hotel,
    count: "850+ Properties",
  },

  {
    title: "Commercial",
    description: "Offices and commercial buildings for business.",
    icon: Warehouse,
    count: "1,100+ Properties",
  },

  {
    title: "Land & Plots",
    description: "Premium lands ready for development.",
    icon: LandPlot,
    count: "3,000+ Properties",
  },
];


export default function Categories() {
  return (
    <section className="py-20 bg-white">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">

          <p className="mb-3 font-semibold text-green-600">
            Property Categories
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Find The Perfect Property Type
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore thousands of verified properties
            across different categories.
          </p>

        </div>



        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {categories.map((category) => {

            const Icon = category.icon;

            return (

              <div
                key={category.title}
                className="group rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">

                  <Icon size={28} />

                </div>


                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {category.title}
                </h3>


                <p className="mb-5 text-gray-600">
                  {category.description}
                </p>


                <span className="font-semibold text-green-700">
                  {category.count}
                </span>


              </div>

            );

          })}


        </div>


      </div>

    </section>
  );
}
