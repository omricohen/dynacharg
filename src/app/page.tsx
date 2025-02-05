'use client'

import { 
  ArrowRightIcon, 
  BoltIcon, 
  BuildingOfficeIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  BellAlertIcon,
  BuildingLibraryIcon,
  HomeModernIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Countdown from 'react-countdown'

const DEADLINE = new Date('2025-02-13')

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 text-sm font-semibold">
                <CurrencyDollarIcon className="w-5 h-5" />
                Limited Time Offer
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Free EV Chargers For Your Property
              </h1>
              <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-lg text-green-800 font-medium">
                  Perfect for properties with 10+ units. Get EV chargers installed at no cost!
                </p>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Transform your property with zero-cost EV charging infrastructure. Attract eco-conscious tenants and create a new revenue stream while supporting sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                  Talk to an Expert
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/about" className="btn-secondary inline-flex items-center justify-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/charger.webp"
                alt="DynaChrg EV Charger"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-center">
                  <span className="text-2xl font-bold">FREE</span>
                  <span className="text-sm block">Installation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-white py-12 border-b">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="flex justify-center items-center gap-8 mb-8">
                  <Image
                    src="/ladwp.png"
                    alt="LADWP Logo"
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                  <Image
                    src="/usdoe.png"
                    alt="Federal Incentives"
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <ClockIcon className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-bold">Limited Time Opportunity</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Take advantage of our no-cost installation program while LADWP rebates and Federal tax credits are at their peak.
                </p>
                <div className="inline-block bg-white px-8 py-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                  <Countdown
                    date={DEADLINE}
                    renderer={({ days, hours, minutes, seconds }) => (
                      <div className="flex gap-8">
                        <div>
                          <span className="text-4xl font-bold text-green-600">{days}</span>
                          <p className="text-sm text-gray-600 mt-1">Days</p>
                        </div>
                        <div>
                          <span className="text-4xl font-bold text-green-600">{hours}</span>
                          <p className="text-sm text-gray-600 mt-1">Hours</p>
                        </div>
                        <div>
                          <span className="text-4xl font-bold text-green-600">{minutes}</span>
                          <p className="text-sm text-gray-600 mt-1">Minutes</p>
                        </div>
                        <div>
                          <span className="text-4xl font-bold text-green-600">{seconds}</span>
                          <p className="text-sm text-gray-600 mt-1">Seconds</p>
                        </div>
                      </div>
                    )}
                  />
                </div>
                <div className="text-left bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <div className="flex items-center gap-2 mb-2">
                    <BoltIcon className="w-5 h-5 text-yellow-800" />
                    <h4 className="font-semibold text-yellow-800">Double Benefits</h4>
                  </div>
                  <ul className="text-sm text-yellow-800 space-y-2">
                    <li className="flex items-start gap-2">
                      <BuildingLibraryIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Free professional installation covered by LADWP rebates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CurrencyDollarIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Ongoing revenue from EV charging fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BoltIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Federal tax credits at peak rate of 30%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <WrenchScrewdriverIcon className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold">Premium EV Charging Infrastructure</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Our sleek, modern charging stations are designed for reliability and ease of use. With smart features and durable construction, they&apos;re perfect for any multi-dwelling property with 10 or more units.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <BoltIcon className="w-5 h-5 text-green-500" />
                  <span>High-speed charging capabilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChartBarIcon className="w-5 h-5 text-green-500" />
                  <span>Smart load management</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                  <span>Weather-resistant design</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/residentialCharger.png"
                alt="EV Charging Station Installation"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/dynacharg.png"
                alt="Tesla Charging Station at Night"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <ChartBarIcon className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold">Smart Management System</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Monitor and manage your charging infrastructure with our intuitive dashboard. Track usage, analyze patterns, and optimize performance in real-time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Image
                  src="/dashboard.png"
                  alt="Management Dashboard"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-sm"
                />
                <Image
                  src="/dashboard-on-laptop.webp"
                  alt="Usage Analytics"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HomeModernIcon className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-center">Uplift your Property Value</h2>
          </div>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            with a simple Centralized Solution
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Attract eco-conscious tenants</h3>
              <p className="text-gray-600 text-sm">Offering at-home EV charging enhances tenant satisfaction and attracts eco-conscious renters.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Centralized platform</h3>
              <p className="text-gray-600 text-sm">EVES offers centralized management for a holistic view of operations, maintenance, and resident satisfaction.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CurrencyDollarIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Automatic payments & Invoicing</h3>
              <p className="text-gray-600 text-sm">Automated, secure payments to enhance transparency and satisfaction for EV charging management.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BoltIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Seamless User experience</h3>
              <p className="text-gray-600 text-sm">Track, optimize, and stay informed for a seamless charging experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BuildingOfficeIcon className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold">Ready to super-charge your property?</h2>
          </div>
          <p className="text-gray-600 mb-8">Perfect for properties with 10+ units. Don't miss out on this limited time offer ends February 13th!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
              Talk to an Expert
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
