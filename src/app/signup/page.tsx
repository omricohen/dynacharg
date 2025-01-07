'use client'

import { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const propertyTypes = [
  'Apartment Building',
  'Condo Complex',
  'Mixed-Use Development',
  'Office Building',
  'Parking Structure',
  'Other'
]

export default function SignUp() {
  const [formData, setFormData] = useState({
    ownerCompany: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: '',
    numberOfUnits: '',
    assignedParkingSpaces: '',
    guestParkingSpaces: '',
    notes: '',
    consent: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData)
    // You would typically send this data to your backend/API here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="py-12">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">
            Qualify Your Property for EV Charger Installation
          </h1>
          <p className="text-gray-600">
            Fill out the form below and our team will review your application within 48-72 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          {/* Contact Information Section */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="ownerCompany" className="block text-sm font-medium text-gray-700 mb-1">
                  Owner/Company Name
                </label>
                <input
                  type="text"
                  id="ownerCompany"
                  name="ownerCompany"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.ownerCompany}
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
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Property Information Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Property Information</h2>
            
            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Property Address
              </label>
              <input
                type="text"
                id="propertyAddress"
                name="propertyAddress"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.propertyAddress}
                onChange={handleChange}
                placeholder="Street address, City, State, ZIP"
              />
            </div>

            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="">Select property type</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="numberOfUnits" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Units
              </label>
              <input
                type="number"
                id="numberOfUnits"
                name="numberOfUnits"
                required
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.numberOfUnits}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="assignedParkingSpaces" className="block text-sm font-medium text-gray-700 mb-1">
                Assigned Parking Spaces
              </label>
              <input
                type="number"
                id="assignedParkingSpaces"
                name="assignedParkingSpaces"
                required
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.assignedParkingSpaces}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="guestParkingSpaces" className="block text-sm font-medium text-gray-700 mb-1">
                Guest/Visitor Parking Spaces
              </label>
              <input
                type="number"
                id="guestParkingSpaces"
                name="guestParkingSpaces"
                required
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.guestParkingSpaces}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any additional information about your property or specific requirements"
              />
            </div>
          </div>

          <div className="flex items-start pt-6">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="mt-1 h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
              I agree to the terms and conditions and understand the incentive payment will be issued after contract approval and signature.
            </label>
          </div>

          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center"
          >
            Submit Application
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </form>
      </div>
    </div>
  )
} 