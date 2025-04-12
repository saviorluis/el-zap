import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MenuPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Title */}
      <section className="wooden-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Authentic Mexican flavors made with fresh ingredients and traditional recipes
          </p>
        </div>
      </section>

      {/* Meats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Meats</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold">ASADA-STEAK</h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold">POLLO-CHICKEN</h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold">PASTOR-MARINATED PORK</h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold">LENGUA-COW TONGUE <span className="text-primary">+$1</span></h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold">CHORIZO-PORK SAUSAGE</h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold">TRIPA-GUT <span className="text-primary">+$1</span></h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold">SUADERO</h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold">CACHETE</h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold">BUCHE</h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold">CHICHARRON</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 mb-16">
            {/* Classic Tacos */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Classic Tacos</h2>
                <div className="h-px bg-gray-300 flex-grow ml-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="md:col-span-5">
                  <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://ext.same-assets.com/3198230616/1811861645.jpeg"
                      alt="Classic Tacos"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-gray-700 mb-4">
                    4 Corn tortilla filled with meat, topped with cilantro and onions
                  </p>
                  <p className="text-2xl font-semibold text-primary">$12</p>
                </div>
              </div>
            </div>

            {/* Quesabirria Tacos */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Quesabirria Tacos</h2>
                <div className="h-px bg-gray-300 flex-grow ml-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="md:col-span-5">
                  <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
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
                </div>

                <div className="md:col-span-7">
                  <p className="text-gray-700 mb-4">
                    4 Cooked beef folded into a tortilla with melted cheese and served with a side of broth for dipping
                  </p>
                  <p className="text-2xl font-semibold text-primary">$15</p>
                </div>
              </div>
            </div>

            {/* Original Burrito */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Original Burrito</h2>
                <div className="h-px bg-gray-300 flex-grow ml-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="md:col-span-5">
                  <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://ext.same-assets.com/3198230616/488232245.jpeg"
                      alt="Original Burrito"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-gray-700 mb-4">
                    Flour tortilla wrapped, Inside comes with the meat, lettuce, tomato, beans and rice
                  </p>
                  <p className="text-2xl font-semibold text-primary">$12</p>
                </div>
              </div>
            </div>

            {/* Sopes */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sopes</h2>
                <div className="h-px bg-gray-300 flex-grow ml-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="md:col-span-5">
                  <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://ext.same-assets.com/3198230616/2951261103.jpeg"
                      alt="Sopes"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-gray-700 mb-4">
                    3 Fried masa base with beans and the meat. Topped with lettuce, sour cream and cheese
                  </p>
                  <p className="text-2xl font-semibold text-primary">$13</p>
                </div>
              </div>
            </div>

            {/* Torta */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Torta</h2>
                <div className="h-px bg-gray-300 flex-grow ml-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="md:col-span-5">
                  <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://ext.same-assets.com/3198230616/2645397825.webp"
                      alt="Torta"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-gray-700 mb-4">
                    Bread spread with butter, topped with beans, creamy avocado, peppers, lettuce and tomato and piled with meat and cheese
                  </p>
                  <p className="text-2xl font-semibold text-primary">$12</p>
                </div>
              </div>
            </div>

            {/* Quesadilla */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Quesadilla</h2>
                <div className="h-px bg-gray-300 flex-grow ml-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="md:col-span-5">
                  <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://ext.same-assets.com/3198230616/2858210112.jpeg"
                      alt="Quesadilla"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-gray-700 mb-4">
                    Flour Tortilla, filled with mozzarella cheese, meat, lettuce and tomato
                  </p>
                  <p className="text-2xl font-semibold text-primary">$13</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Menu Items */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 mb-16">
            {/* Birria */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Birria</h2>
                <div className="h-px bg-gray-300 flex-grow ml-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="md:col-span-5">
                  <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://ext.same-assets.com/3198230616/1165101642.jpeg"
                      alt="Birria"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-gray-700 mb-4">
                    Tender beef slow-cooked in a flavorful broth with dried chiles and spices, served with tortillas on the side
                  </p>
                  <p className="text-2xl font-semibold text-primary">$16</p>
                </div>
              </div>
            </div>
            
            {/* Pizza Birria */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Pizza Birria</h2>
                <div className="h-px bg-gray-300 flex-grow ml-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="md:col-span-5">
                  <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://ext.same-assets.com/3198230616/1165101642.jpeg"
                      alt="Pizza Birria"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded-full text-sm">
                      New
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-gray-700 mb-4">
                    Our signature fusion dish! A large pizza crust topped with slow-cooked birria beef, melted cheese, and served with a side of flavorful consommé for dipping
                  </p>
                  <p className="text-2xl font-semibold text-primary">$28</p>
                </div>
              </div>
            </div>
          </div>

          {/* Seasonal Section */}
          <div className="bg-white p-8 rounded-lg mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Menudo (Seasonal)</h2>
              <div className="h-px bg-gray-300 flex-grow ml-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              <div className="md:col-span-5">
                <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/3198230616/1497462679.jpeg"
                    alt="Menudo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-7">
                <p className="text-gray-700 mb-4">
                  Cow's stomach in broth with a red chili pepper base. Hominy, lime, onions, and oregano are used to season the broth
                </p>
                <p className="text-2xl font-semibold text-primary">$16</p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-700 italic">
              Prices are subject to change. Please let your server know about any allergies or dietary restrictions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
