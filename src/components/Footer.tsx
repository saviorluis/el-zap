import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">4250 Patterson Ave</p>
            <p className="mb-2">Winston-Salem, NC 27105</p>
            <p className="mb-4">336-287-5338</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/taqueria_zapopan/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <p className="mb-2">Monday - Thursday</p>
            <p className="mb-4 font-bold">11:00 am - 9:30 pm</p>
            <p className="mb-2">Friday - Saturday</p>
            <p className="mb-4 font-bold">11:00 am - 10:00 pm</p>
            <p className="mb-2">Sunday</p>
            <p className="mb-4 font-bold">10:30 am - 9:00 pm</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/catering" className="hover:text-primary transition-colors">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-primary transition-colors">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} by Taqueria Y Antojitos El Zapopan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
