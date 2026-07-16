import {
  Home,
  Users,
  Globe2,
  Award,
} from "lucide-react";


const stats = [
  {
    number: "15,000+",
    title: "Properties Listed",
    description: "Premium homes and commercial properties",
    icon: Home,
  },

  {
    number: "8,500+",
    title: "Happy Clients",
    description: "Customers worldwide trust us",
    icon: Users,
  },

  {
    number: "120+",
    title: "Global Cities",
    description: "Properties across major locations",
    icon: Globe2,
  },

  {
    number: "15+",
    title: "Years Experience",
    description: "Professional real estate service",
    icon: Award,
  },
];


export default function Statistics() {
  return (
    <section className="bg-green-700 py-16 text-white">

      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">


        {stats.map((stat) => {

          const Icon = stat.icon;

          return (

            <div
              key={stat.title}
              className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm transition hover:bg-white/20"
            >

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">

                <Icon size={28} />

              </div>


              <h3 className="text-4xl font-bold">
                {stat.number}
              </h3>


              <h4 className="mt-2 text-lg font-semibold">
                {stat.title}
              </h4>


              <p className="mt-2 text-sm text-green-100">
                {stat.description}
              </p>


            </div>

          );

        })}


      </div>

    </section>
  );
}
