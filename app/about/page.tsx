import {
  Building2,
  Users,
  ShieldCheck,
  Globe2,
  Award,
} from "lucide-react";


const values = [
  {
    title: "Trusted Platform",
    description:
      "We connect buyers, sellers and agents through a secure real estate experience.",
    icon: ShieldCheck,
  },

  {
    title: "Global Properties",
    description:
      "Explore premium properties in major cities around the world.",
    icon: Globe2,
  },

  {
    title: "Expert Team",
    description:
      "Our professionals help clients make better real estate decisions.",
    icon: Users,
  },

  {
    title: "Quality Service",
    description:
      "We focus on transparency, reliability and customer satisfaction.",
    icon: Award,
  },
];


export default function AboutPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero */}

      <section className="bg-green-700 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <Building2 className="mx-auto mb-6 h-16 w-16" />

          <h1 className="text-5xl font-bold">
            About EstateHub
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            EstateHub is a modern real estate platform designed to
            make buying, selling and discovering properties easier,
            faster and more secure.
          </p>

        </div>

      </section>



      {/* Story */}

      <section className="py-20">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">


          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Building The Future Of Real Estate
            </h2>


            <p className="mt-6 leading-8 text-gray-600">

              Our mission is to provide a professional platform
              where people can discover verified properties and
              connect with trusted real estate professionals.

            </p>


            <p className="mt-5 leading-8 text-gray-600">

              From luxury villas to modern apartments and commercial
              spaces, EstateHub helps users find opportunities that
              match their goals.

            </p>


          </div>




          <div className="relative overflow-hidden rounded-3xl">

            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
              alt="Real Estate"
              className="h-[450px] w-full object-cover"
            />

          </div>


        </div>

      </section>




      {/* Values */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">


          <div className="mb-12 text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Why EstateHub
            </h2>

            <p className="mt-4 text-gray-600">
              Professional solutions for modern real estate needs.
            </p>

          </div>



          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">


            {values.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                >

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">

                    <Icon size={28}/>

                  </div>


                  <h3 className="mb-3 text-xl font-bold">
                    {item.title}
                  </h3>


                  <p className="text-gray-600">
                    {item.description}
                  </p>


                </div>

              );

            })}


          </div>


        </div>

      </section>



    </main>
  );
}
