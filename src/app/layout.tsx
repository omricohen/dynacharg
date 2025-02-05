import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dynachrg - Free EV Charger Installation",
  description: "Sign up for free EV charger installation with Dynachrg. Limited time offer ends February 13th, 2025!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-sm">
          <nav className="container py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-green-500">Dynachrg</Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              </div>
              <Link href="/signup" className="btn-primary">
                Qualify Now
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-50 border-t">
          <div className="container py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Dynachrg</h3>
                <p className="text-gray-600">Accelerating EV adoption through hassle-free charger installations.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                  <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                  <li><Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
                  <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Email: info@dynachrgusa.com</li>
                  <li>Phone: ‪(805) 272-0101‬</li>
                  <li>Los Angeles, CA</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-gray-600">
              <p>&copy; {new Date().getFullYear()} Dynachrg. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
