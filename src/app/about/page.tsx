import { BoltIcon, BuildingOfficeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">About Dynachrg</h1>
            <p className="text-xl text-gray-600">
              Dynachrg is committed to accelerating the adoption of electric vehicles by providing cost-free EV charger installations to property owners.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Dynachrg, we believe that the future of transportation is electric. Our mission is to make EV charging infrastructure accessible to all by removing the financial barriers that property owners face.
              </p>
              <p className="text-gray-600">
                Through strategic partnerships with LADWP and government agencies, we're able to provide state-of-the-art EV charging solutions at no cost to property owners while creating new revenue streams for their businesses.
              </p>
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
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dynachrg?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Backed by LADWP</h3>
              <p className="text-gray-600">
                Our program is supported by LADWP rebates and government incentives, ensuring a cost-free installation process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Experienced Team</h3>
              <p className="text-gray-600">
                Our team of experts handles everything from site assessment to installation and ongoing maintenance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Join our network of satisfied property owners who are generating revenue while supporting sustainable transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our mission to create a more sustainable future while earning $500 and generating monthly revenue from EV charging.
          </p>
          <a href="/signup" className="btn-primary inline-flex items-center justify-center">
            Qualify Your Property
          </a>
        </div>
      </section>
    </div>
  )
} 