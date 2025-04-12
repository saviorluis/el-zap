import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CateringPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Title */}
      <section className="wooden-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Catering</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Let us bring authentic Mexican flavors to your next event
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Let Us Cater Your Next Event</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Whether you're planning a wedding, quinceañera, corporate event, or family gathering, Antojitos El Zapopan
            offers authentic Mexican catering services that will delight your guests and make your event memorable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Build Your Own Taco Bar</h3>
              <p className="text-gray-700">
                Me and my team will bring a variety of meats and side dishes for you and your event goers to chose from.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Delivered Hot to Your Location</h3>
              <p className="text-gray-700">
                Contact us so we can plan out the details for you. We usually need about 2-1 month notice in advance so we can have everything ready for your big day.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Tailored To any Occasion</h3>
              <p className="text-gray-700">
                No matter what the occasion is we will have your back. We have catered to Quinceras, Weddings, Birthday Partys, Buisness events & etc. All customers satisfied with our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Menu */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Catering Menu Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-primary">Taco Bar</h3>
              <p className="text-gray-700 mb-4">
                Our most popular catering option includes a selection of:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
                <li>Your choice of 3 meats (Asada, Chicken, Pastor, Chorizo)</li>
                <li>Corn and flour tortillas</li>
                <li>Rice and beans</li>
                <li>Chips and salsa</li>
                <li>Toppings (onion, cilantro, limes, etc.)</li>
                <li>Guacamole and sour cream</li>
              </ul>
              <p className="font-semibold text-gray-900">
                Starting at $12.99 per person (minimum 20 people)
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-primary">Full Service Buffet</h3>
              <p className="text-gray-700 mb-4">
                A more comprehensive option for larger events includes:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
                <li>Your choice of 4 meats (including premium options)</li>
                <li>Corn and flour tortillas</li>
                <li>Rice and beans</li>
                <li>Chips with salsa, guacamole, and queso</li>
                <li>Variety of toppings</li>
                <li>Dessert (churros or sopapillas)</li>
                <li>Beverages (horchata, agua fresca)</li>
                <li>Service staff to set up and maintain the buffet</li>
              </ul>
              <p className="font-semibold text-gray-900">
                Starting at $18.99 per person (minimum 30 people)
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">Custom Packages</h3>
            <p className="text-gray-700 mb-4">
              Need something different? We can create custom catering packages to suit your specific needs and preferences.
              From appetizer-only events to specialized menus, we work with you to craft the perfect dining experience for your guests.
            </p>
            <p className="text-gray-700 mb-6">
              Some popular add-ons include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Quesadilla station</li>
                <li>Fajita bar</li>
                <li>Enchilada platters</li>
                <li>Tamales by the dozen</li>
              </ul>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Nacho bar</li>
                <li>Margarita service (non-alcoholic available)</li>
                <li>Dessert station</li>
                <li>Kid's menu options</li>
              </ul>
            </div>
            <p className="font-semibold text-gray-900 mt-6">
              Contact us for custom package pricing
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-700 italic mb-8">
              Please note that prices may vary based on event location, party size, and specific menu selections.
              A deposit is required to secure your date.
            </p>
            <Link
              href="#contact-form"
              className="bg-primary text-white px-8 py-3 rounded-sm hover:bg-primary/90 transition-colors uppercase tracking-wide inline-block"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Catering Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1437353283/291621876.jpeg"
                alt="Catering Event 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1437353283/390938966.jpeg"
                alt="Catering Event 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1437353283/2247148948.jpeg"
                alt="Catering Event 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1437353283/3255144723.jpeg"
                alt="Catering Event 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1437353283/2561670859.jpeg"
                alt="Catering Event 5"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1437353283/3847510041.jpeg"
                alt="Catering Event 6"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1437353283/3336710717.jpeg"
                alt="Catering Event 7"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1437353283/1535516382.jpeg"
                alt="Catering Event 8"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Contact us and get our special catering offers
          </h2>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-2xl font-semibold text-center mb-8">336-287-5338</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Write a message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-sm hover:bg-primary/90 transition-colors uppercase tracking-wide inline-block"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
