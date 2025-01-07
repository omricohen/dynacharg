'use client'

import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData)
    // You would typically send this data to your backend/API here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Get in Touch with Dynachrg</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our EV charger installation program? We&apos;re here to help. Fill out the form below or reach out to us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <EnvelopeIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@dynachrg.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <PhoneIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <MapPinIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 