import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Title */}
      <section className="wooden-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Bringing authentic Mexican cuisine to Winston-Salem since 2000
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">From Mexico to North Carolina</h2>
              <p className="text-gray-700 mb-4">
                Antojitos El Zapopan was founded in 2000 by the Gonzalez family, who brought their cherished family recipes from Zapopan, Jalisco, Mexico to Winston-Salem, North Carolina.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small food truck has grown into a beloved local restaurant, serving authentic Mexican cuisine made with fresh ingredients and traditional cooking methods.
              </p>
              <p className="text-gray-700">
                Our mission is to share the rich flavors and culture of Mexico with our community, creating a warm and welcoming atmosphere where families can gather and enjoy delicious food together.
              </p>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1437353283/291621876.jpeg"
                alt="Food preparation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1437353283/3336710717.jpeg"
                alt="Restaurant atmosphere"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Commitment to Quality</h2>
              <p className="text-gray-700 mb-4">
                At Antojitos El Zapopan, we believe that the best food comes from the freshest ingredients. We prepare our dishes daily, making our salsas, guacamole, and tortillas in-house.
              </p>
              <p className="text-gray-700 mb-4">
                Our recipes have been passed down through generations, preserving the authentic flavors of Mexican cuisine while adapting to the tastes of our local community.
              </p>
              <p className="text-gray-700">
                We take pride in offering a warm, family-friendly environment where everyone is welcome to experience the joy of Mexican cuisine. From our family to yours, ¡buen provecho!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Family</h3>
              <p className="text-gray-700">
                We treat our customers like family and create a welcoming environment where generations can gather and share meals together.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Authenticity</h3>
              <p className="text-gray-700">
                We stay true to traditional Mexican recipes and cooking methods, bringing the genuine flavors of Mexico to Winston-Salem.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-700">
                We use only the freshest ingredients, prepare dishes daily, and ensure every meal is served with care and pride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://ext.same-assets.com/1437353283/3255144723.jpeg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">The Gonzalez Family</h3>
              <p className="text-gray-700">Founders</p>
            </div>

            <div>
              <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://ext.same-assets.com/1437353283/3847510041.jpeg"
                  alt="Chef"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Our Chefs</h3>
              <p className="text-gray-700">Culinary Experts</p>
            </div>

            <div className="md:col-span-2 lg:col-span-1">
              <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://ext.same-assets.com/1437353283/1535516382.jpeg"
                  alt="Service Team"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Service Team</h3>
              <p className="text-gray-700">Friendly & Attentive</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
