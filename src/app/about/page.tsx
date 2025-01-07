import { 
  BoltIcon, 
  BuildingOfficeIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ClockIcon,
  GlobeAmericasIcon,
  TrophyIcon,
  UserCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 text-sm font-semibold">
                <GlobeAmericasIcon className="w-5 h-5" />
                Sustainable Future
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dynachrg</h1>
              <p className="text-xl text-gray-600 mb-8">
                Dynachrg is committed to accelerating the adoption of electric vehicles by providing cost-free EV charger installations to property owners, with a $500 bonus for each charger installed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                  Get Started Today
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/charger.webp"
                alt="EV Charging Station"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <TrophyIcon className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-600">Trusted by</p>
                    <p className="font-bold">1500+ Properties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2500+</div>
              <p className="text-gray-600">Chargers Installed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$2M+</div>
              <p className="text-gray-600">Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
              <p className="text-gray-600">EV Drivers Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-700 text-sm font-medium mb-6">
                <ClockIcon className="w-5 h-5" />
                Our Mission
              </div>
              <h2 className="text-3xl font-bold mb-6">Empowering Property Owners</h2>
              <p className="text-gray-600 mb-6">
                At Dynachrg, we believe that the future of transportation is electric. Our mission is to make EV charging infrastructure accessible to all by removing the financial barriers that property owners face.
              </p>
              <p className="text-gray-600 mb-8">
                Through strategic partnerships with LADWP and government agencies, we provide state-of-the-art EV charging solutions at no cost, plus a $500 bonus for each charger installed, creating new revenue streams for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-gray-700">Zero upfront costs + $500 per charger</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <ChartBarIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-gray-700">Ongoing revenue share</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <UserGroupIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-gray-700">Full maintenance support</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BoltIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Sustainable Future</h3>
                <p className="text-gray-600 text-sm">Supporting the transition to clean energy transportation.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BuildingOfficeIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Property Value</h3>
                <p className="text-gray-600 text-sm">Enhancing properties with modern charging infrastructure.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CurrencyDollarIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Revenue Growth</h3>
                <p className="text-gray-600 text-sm">Creating new income streams for property owners.</p>
              </div>
              <Image
                src="/residentialCharger.png"
                alt="EV Charger Close-up"
                width={200}
                height={200}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Dynachrg?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of property owners who trust Dynachrg for their EV charging needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="relative">
                <Image
                  src="/ladwp.png"
                  alt="LADWP Partnership"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain mb-6"
                />
                <h3 className="text-xl font-semibold mb-4">Backed by LADWP</h3>
                <p className="text-gray-600">
                  Our program is supported by LADWP rebates and government incentives, ensuring a cost-free installation process.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <UserCircleIcon className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Experienced Team</h3>
                <p className="text-gray-600">
                  Our team of experts handles everything from site assessment to installation and ongoing maintenance.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <StarIcon className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  Join our network of satisfied property owners who are generating revenue while supporting sustainable transportation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our mission to create a more sustainable future while earning $500 for each charger installed, plus ongoing monthly revenue from EV charging.
          </p>
          <Link href="/signup" className="btn-primary inline-flex items-center justify-center">
            Qualify Your Property
          </Link>
        </div>
      </section>
    </div>
  )
} 