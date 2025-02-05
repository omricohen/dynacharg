'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const faqs = [
  {
    question: "How does the free installation work?",
    answer: "Our program utilizes LADWP rebates and government incentives to cover 100% of the installation and equipment costs. There are absolutely no upfront or hidden costs to property owners."
  },
  {
    question: "What properties qualify?",
    answer: "Properties with 10 or more units typically qualify, including apartment buildings, office spaces, parking structures, and shopping centers. The main requirements are sufficient power supply and parking space availability."
  },
  {
    question: "How many chargers can I get?",
    answer: "The number of chargers depends on your property's electrical capacity and parking space availability. Our team will assess your property to determine the optimal number of charging stations."
  },
  {
    question: "How long does the process take?",
    answer: "Initial qualification takes 48-72 hours. After that, the complete process including city approval and installation typically takes 60-90 days."
  },
  {
    question: "Are there any upfront or hidden costs?",
    answer: "No, there are absolutely no upfront or hidden costs. All installation, equipment, and maintenance costs are covered through LADWP rebates and government incentives."
  },
  {
    question: "How do I generate revenue from the chargers?",
    answer: "You earn a percentage of every charging session. Property owners receive a share of the charging fees collected from EV users, creating a new passive income stream. The exact revenue share percentage is outlined in your contract."
  },
  {
    question: "What maintenance is required?",
    answer: "None. We handle all maintenance, repairs, and servicing of the chargers at no cost to property owners. Our team provides 24/7 support and monitoring."
  },
  {
    question: "Can I choose the location of the chargers?",
    answer: "Yes, we work collaboratively with property owners to determine the optimal locations for charger installation. Our team considers factors like accessibility, electrical infrastructure, and your preferences."
  },
  {
    question: "What happens after I apply?",
    answer: "After you apply, our team will: 1) Review your property's qualification within 48-72 hours, 2) Schedule a free site assessment, 3) Provide a detailed proposal showing potential revenue, 4) Handle all permits and approvals, and 5) Complete the installation."
  }
]

export default function FAQ() {
  return (
    <div className="py-12">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-6">
            Find answers to common questions about our free EV charger installation program.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
            <p className="text-green-800 font-medium">
              Limited Time Offer: Get free EV chargers installed at your property!
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                  <Disclosure.Button className="w-full px-6 py-4 text-left flex justify-between items-center">
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        open ? 'transform rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-6 py-4 text-gray-600 border-t">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Ready to get started?</p>
          <Link href="/signup" className="btn-primary inline-flex items-center justify-center">
            Qualify Your Property
          </Link>
        </div>
      </div>
    </div>
  )
} 