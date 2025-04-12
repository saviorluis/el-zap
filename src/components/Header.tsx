import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        <p>4250 Patterson Ave, Winston-Salem, NC 27105  |  336-287-5338</p>
      </div>

      {/* Main Header with wooden background */}
      <div className="wooden-bg">
        <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="https://ext.same-assets.com/1412269527/3320738259.jpeg"
                alt="Antojitos El Zapopan Logo"
                width={120}
                height={120}
                className="rounded-full border-2 border-white"
              />
            </Link>
          </div>

          {/* Restaurant Name */}
          <div className="text-center mb-4 md:mb-0">
            <Link href="/">
              <h1 className="text-4xl md:text-5xl font-bold text-el-zapopan">
                Taqueria Y Antojitos El Zapopan
              </h1>
              <p className="text-white text-lg mt-1">EST.2000</p>
            </Link>
          </div>

          {/* Reservation Button (from Bleu's design) */}
          <div>
            <Link
              href="/contact"
              className="inline-block border border-white text-white hover:bg-white hover:text-black transition-colors px-6 py-3 uppercase tracking-wide text-sm"
            >
              Reservations
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="container mx-auto pb-4">
          <ul className="flex flex-wrap justify-center space-x-2 md:space-x-8">
            <li>
              <Link href="/menu" className="text-white hover:text-primary-foreground transition-colors uppercase tracking-wide text-lg px-2 py-1">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-primary-foreground transition-colors uppercase tracking-wide text-lg px-2 py-1">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/catering" className="text-white hover:text-primary-foreground transition-colors uppercase tracking-wide text-lg px-2 py-1">
                Catering
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-primary-foreground transition-colors uppercase tracking-wide text-lg px-2 py-1">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/order" className="text-white hover:text-primary-foreground transition-colors uppercase tracking-wide text-lg px-2 py-1">
                Order Online
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
