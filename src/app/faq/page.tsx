'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is the $500 incentive?",
    answer: "We are offering $500 per property that signs up for EV charger installation by January 12th. Payment is made after contract approval and signature."
  },
  {
    question: "How does the free installation work?",
    answer: "Our program utilizes LADWP rebates and government incentives to cover installation and equipment costs."
  },
  {
    question: "What properties qualify?",
    answer: "Apartment buildings, office spaces, parking lots, and shopping centers with sufficient power supply."
  },
  {
    question: "How long does the approval process take?",
    answer: "Typically 48-72 hours for initial qualification and up to 90 days for city approval."
  },
  {
    question: "Are there any upfront costs?",
    answer: "No, there are no upfront costs. All installation and equipment costs are covered through LADWP rebates and government incentives."
  },
  {
    question: "How do I generate revenue from the chargers?",
    answer: "Property owners earn a percentage of the charging fees collected from EV users. The exact revenue share will be outlined in your contract."
  },
  {
    question: "What maintenance is required?",
    answer: "We handle all maintenance and servicing of the chargers. Property owners are not responsible for any maintenance costs."
  },
  {
    question: "Can I choose the location of the chargers?",
    answer: "Yes, we work with property owners to determine the optimal locations for charger installation, considering factors like accessibility and electrical infrastructure."
  }
]

export default function FAQ() {
  return (
    <div className="py-12">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            Find answers to common questions about our EV charger installation program.
          </p>
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
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <a href="/contact" className="btn-primary inline-flex items-center justify-center">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
} 