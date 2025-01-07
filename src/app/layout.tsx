import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dynachrg Lead Program - Earn $500 for EV Charger Installation",
  description: "Sign up for free EV charger installation with Dynachrg. Earn $500 per property before January 12th!",
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
              <a href="/" className="text-2xl font-bold text-green-500">Dynachrg</a>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
                <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
              <a href="/signup" className="btn-primary">
                Qualify Now
              </a>
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
                  <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
                  <li><a href="/about" className="text-gray-600 hover:text-gray-900">About</a></li>
                  <li><a href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Email: info@dynachrg.com</li>
                  <li>Phone: (555) 123-4567</li>
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
