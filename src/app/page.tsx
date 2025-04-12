import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-b from-black to-transparent">
        <Image
          src="https://ext.same-assets.com/1412269527/1878685642.jpeg"
          alt="Mexican Food"
          fill
          className="object-cover z-[-1]"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-eb-garamond">
            TAQUERIA Y ANTOJITOS
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-eb-garamond">
            EL ZAPOPAN
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            AUTHENTIC MEXICAN FOOD
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/menu"
              className="bg-primary text-white px-8 py-3 rounded-sm hover:bg-primary/90 transition-colors uppercase tracking-wide"
            >
              View Menu
            </Link>
            <Link
              href="/order"
              className="border-2 border-white text-white px-8 py-3 rounded-sm hover:bg-white hover:text-black transition-colors uppercase tracking-wide"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-gray-900">
            Our Signature Dishes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quesabirria Tacos */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://ext.same-assets.com/3198230616/1165101642.jpeg"
                  alt="Quesabirria Tacos"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded-full text-sm">
                  Most Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Quesabirria Tacos</h3>
                <p className="text-gray-700 mb-4">
                  4 Cooked beef folded into a tortilla with melted cheese and served with a side of broth for dipping
                </p>
                <Link
                  href="/menu"
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  View on Menu
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Classic Tacos */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://ext.same-assets.com/3198230616/1811861645.jpeg"
                  alt="Classic Tacos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Classic Tacos</h3>
                <p className="text-gray-700 mb-4">
                  4 Corn tortilla filled with meat, topped with cilantro and onions
                </p>
                <Link
                  href="/menu"
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  View on Menu
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Original Burrito */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://ext.same-assets.com/3198230616/488232245.jpeg"
                  alt="Original Burrito"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Original Burrito</h3>
                <p className="text-gray-700 mb-4">
                  Flour tortilla wrapped, Inside comes with the meat, lettuce, tomato, beans and rice
                </p>
                <Link
                  href="/menu"
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  View on Menu
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="wooden-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Let Us Cater Your Next Event
          </h2>
          <p className="text-white max-w-2xl mx-auto mb-8 text-lg">
            Whether it's a birthday party, wedding, quinceañera, or business event,
            our team will bring authentic Mexican flavors to make your event special.
          </p>
          <Link
            href="/catering"
            className="bg-primary text-white px-8 py-3 rounded-sm hover:bg-primary/90 transition-colors uppercase tracking-wide inline-block"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Meat Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-gray-900">
            Choose Your Favorite Meat
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
            <div className="text-center p-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">A</span>
              </div>
              <p className="font-semibold">ASADA-STEAK <span className="text-primary">+$2</span></p>
            </div>

            <div className="text-center p-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">P</span>
              </div>
              <p className="font-semibold">POLLO-CHICKEN <span className="text-primary">+$2</span></p>
            </div>

            <div className="text-center p-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">P</span>
              </div>
              <p className="font-semibold">PASTOR-MARINATED PORK <span className="text-primary">+$2</span></p>
            </div>

            <div className="text-center p-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">L</span>
              </div>
              <p className="font-semibold">LENGUA-COW TONGUE <span className="text-primary">+$2</span></p>
            </div>

            <div className="text-center p-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">C</span>
              </div>
              <p className="font-semibold">CHORIZO-PORK SAUSAGE <span className="text-primary">+$2</span></p>
            </div>

            <div className="text-center p-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">T</span>
              </div>
              <p className="font-semibold">TRIPA-GUT <span className="text-primary">+$2</span></p>
            </div>

            <div className="text-center p-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">S</span>
              </div>
              <p className="font-semibold">SUADERO <span className="text-primary">+$2</span></p>
            </div>

            <div className="text-center p-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">C</span>
              </div>
              <p className="font-semibold">CACHETE <span className="text-primary">+$2</span></p>
            </div>

            <div className="text-center p-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">B</span>
              </div>
              <p className="font-semibold">BUCHE <span className="text-primary">+$2</span></p>
            </div>

            <div className="text-center p-4">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">C</span>
              </div>
              <p className="font-semibold">CHICHARRON <span className="text-primary">+$2</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-gray-900">
            Hours & Location
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-xl font-semibold mb-6 text-center md:text-left">
                4250 Patterson Ave, Winston-Salem, NC 27105
              </p>

              <div className="mb-8">
                <p className="font-semibold">Monday - Thursday</p>
                <p className="text-xl mb-4">11:00 am - 9:30 pm</p>

                <p className="font-semibold">Friday - Saturday</p>
                <p className="text-xl mb-4">11:00 am - 10:00 pm</p>

                <p className="font-semibold">Sunday</p>
                <p className="text-xl">10:30 am - 9:00 pm</p>
              </div>

              <div className="text-center md:text-left">
                <a
                  href="https://goo.gl/maps/n9CJANp3PHjYgpuE6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors px-6 py-3 uppercase tracking-wide text-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="relative h-96 md:h-auto rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.7079610780235!2d-80.244187!3d36.034494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853ae3c10ae4e3d%3A0x1ca24b7e23be1e3!2s4250%20Patterson%20Ave%2C%20Winston-Salem%2C%20NC%2027105!5e0!3m2!1sen!2sus!4v1715511900201!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Antojitos El Zapopan"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
