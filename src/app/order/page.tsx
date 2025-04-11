import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OrderPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Title */}
      <section className="wooden-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Order Online</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Enjoy our authentic Mexican cuisine from the comfort of your home
          </p>
        </div>
      </section>

      {/* Order Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Choose Your Order Method</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pickup Order */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Pickup</h3>
              <p className="text-gray-700 mb-6">
                Order online and pick up your food at our restaurant. Skip the line and have your food ready when you arrive.
              </p>
              <Link
                href="https://direct.ordering.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors inline-block"
              >
                Order for Pickup
              </Link>
            </div>

            {/* UberEats */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <div className="h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <Image
                  src="https://i.imgur.com/xABxX5o.png"
                  alt="UberEats"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">UberEats</h3>
              <p className="text-gray-700 mb-6">
                Order through UberEats for delivery to your doorstep. Track your order in real-time.
              </p>
              <Link
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800 transition-colors inline-block"
              >
                Order on UberEats
              </Link>
            </div>

            {/* DoorDash */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <div className="h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <Image
                  src="https://i.imgur.com/yZtRbDf.png"
                  alt="DoorDash"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">DoorDash</h3>
              <p className="text-gray-700 mb-6">
                Order through DoorDash for fast delivery. Get special promotions and deals.
              </p>
              <Link
                href="https://www.doordash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff3008] text-white px-6 py-3 rounded-sm hover:bg-[#e52b07] transition-colors inline-block"
              >
                Order on DoorDash
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Orders */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Popular Orders</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/3198230616/1165101642.jpeg"
                  alt="Quesabirria Tacos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Quesabirria Tacos</h3>
                <p className="text-primary font-semibold mb-2">$12.99</p>
                <p className="text-gray-700 text-sm mb-4">
                  4 Cooked beef folded into a tortilla with melted cheese and served with a side of broth for dipping
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/3198230616/1811861645.jpeg"
                  alt="Classic Tacos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Classic Tacos</h3>
                <p className="text-primary font-semibold mb-2">$8.99</p>
                <p className="text-gray-700 text-sm mb-4">
                  4 Corn tortilla filled with meat, topped with cilantro and onions
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/3198230616/488232245.jpeg"
                  alt="Original Burrito"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Original Burrito</h3>
                <p className="text-primary font-semibold mb-2">$9.99</p>
                <p className="text-gray-700 text-sm mb-4">
                  Flour tortilla wrapped, Inside comes with the meat, lettuce, tomato, beans and rice
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/3198230616/2858210112.jpeg"
                  alt="Quesadilla"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Quesadilla</h3>
                <p className="text-primary font-semibold mb-2">$8.99</p>
                <p className="text-gray-700 text-sm mb-4">
                  Flour Tortilla, filled with mozzarella cheese, meat, lettuce and tomato
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors px-6 py-3 uppercase tracking-wide text-sm"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Ordering Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Ordering Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Delivery Information</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Delivery hours:</strong> 11:00 AM - 9:00 PM daily</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Delivery radius:</strong> Up to 5 miles from our restaurant</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Minimum order:</strong> $15 for delivery</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Delivery fee:</strong> Varies by distance and platform</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Estimated delivery time:</strong> 30-45 minutes (may vary based on order volume and traffic)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Pickup Information</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Pickup hours:</strong> During regular business hours</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>No minimum order:</strong> Order as little or as much as you'd like</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Estimated preparation time:</strong> 15-20 minutes</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Curbside pickup:</strong> Available upon request (call when you arrive)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Order ahead:</strong> Schedule your pickup time in advance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Questions about your order?</h3>
            <p className="text-center text-gray-700 mb-6">
              If you have any questions or need assistance with your online order,
              please don't hesitate to call us at (336)-254-7367.
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
