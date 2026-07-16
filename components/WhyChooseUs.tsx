import {
  ShieldCheck,
  Users,
  SearchCheck,
  Headset,
} from "lucide-react";


const features = [
  {
    title: "Verified Properties",
    description:
      "Every property is carefully reviewed and verified to provide a safe experience.",
    icon: ShieldCheck,
  },

  {
    title: "Trusted Agents",
    description:
      "Connect with professional real estate agents and experienced consultants.",
    icon: Users,
  },

  {
    title: "Smart Search",
    description:
      "Find your ideal property quickly with advanced search options.",
    icon: SearchCheck,
  },

  {
    title: "24/7 Support",
    description:
      "Our team is always ready to help you with your real estate journey.",
    icon: Headset,
  },
];


export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">


        <div className="grid items-center gap-12 lg:grid-cols-2">


          {/* Text Side */}
          <div>

            <p className="mb-3 font-semibold text-green-600">
              Why Choose EstateHub
            </p>


            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              A Better Way To Find Your Dream Property
            </h2>


            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              We combine technology, trusted professionals and
              verified listings to make buying, selling and renting
              properties simple and secure.
            </p>


            <div className="mt-10 grid gap-6 sm:grid-cols-2">


              {features.map((feature) => {

                const Icon = feature.icon;

                return (

                  <div
                    key={feature.title}
                    className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg"
                  >

                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">

                      <Icon size={24} />

                    </div>


                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {feature.title}
                    </h3>


                    <p className="text-sm leading-6 text-gray-600">
                      {feature.description}
                    </p>


                  </div>

                );

              })}


            </div>

          </div>



          {/* Image Side */}
          <div className="relative">


            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury Interior"
              className="h-[600px] w-full rounded-3xl object-cover shadow-xl"
            />


            <div className="absolute bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">

              <p className="text-sm text-gray-500">
                Successfully Completed
              </p>

              <h3 className="text-3xl font-bold text-gray-900">
                15,000+
              </h3>

              <p className="text-green-700">
                Property Deals
              </p>

            </div>


          </div>


        </div>


      </div>

    </section>
  );
}
