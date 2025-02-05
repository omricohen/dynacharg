'use client'

import { useState } from 'react'
import { ArrowRightIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const propertyTypes = [
  'Apartment Building',
  'Condo Complex',
  'Mixed-Use Development',
  'Office Building',
  'Parking Structure',
  'Other'
]

interface PropertyData {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: string;
  numberOfUnits: string;
  assignedParkingSpaces: string;
  guestParkingSpaces: string;
  notes: string;
}

interface FormData {
  ownerCompany: string;
  email: string;
  phone: string;
  properties: PropertyData[];
  consent: boolean;
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>(() => ({
    ownerCompany: '',
    email: '',
    phone: '',
    properties: [{
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      propertyType: '',
      numberOfUnits: '',
      assignedParkingSpaces: '',
      guestParkingSpaces: '',
      notes: ''
    }],
    consent: false
  }))

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const addProperty = () => {
    setFormData(prev => ({
      ...prev,
      properties: [...prev.properties, {
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        propertyType: '',
        numberOfUnits: '',
        assignedParkingSpaces: '',
        guestParkingSpaces: '',
        notes: ''
      }]
    }))
  }

  const removeProperty = (index: number) => {
    if (formData.properties.length > 1) {
      setFormData(prev => ({
        ...prev,
        properties: prev.properties.filter((_, i) => i !== index)
      }))
    }
  }

  const handlePropertyChange = (index: number, field: keyof PropertyData, value: string) => {
    setFormData(prev => {
      const newProperties = [...prev.properties]
      newProperties[index] = {
        ...newProperties[index],
        [field]: value
      }
      return {
        ...prev,
        properties: newProperties
      }
    })
  }

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'email':
        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return 'Please enter a valid email address'
        }
        break
      case 'phone':
        if (value && !/^\d{10}$/.test(value.replace(/\D/g, ''))) {
          return 'Please enter a valid 10-digit phone number'
        }
        break
      case 'zipCode':
        if (value && !/^\d{5}(-\d{4})?$/.test(value)) {
          return 'Please enter a valid ZIP code (12345 or 12345-6789)'
        }
        break
      case 'numberOfUnits':
        if (value && parseInt(value) < 1) {
          return 'Number of units must be at least 1'
        }
        break
      case 'assignedParkingSpaces':
      case 'guestParkingSpaces':
        if (value && parseInt(value) < 0) {
          return 'Parking spaces cannot be negative'
        }
        break
    }
    return ''
  }

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    if (name === 'consent') {
      setFormData(prev => ({
        ...prev,
        consent: checked
      }))
    } else if (!name.includes('properties')) {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const getInputClassName = (fieldName: string) => {
    const baseClasses = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
    return `${baseClasses} ${
      fieldErrors[fieldName] 
        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
        : 'border-gray-300'
    }`
  }

  const renderFieldError = (fieldName: string) => {
    if (fieldErrors[fieldName]) {
      return (
        <p className="mt-1 text-sm text-red-600">
          {fieldErrors[fieldName]}
        </p>
      )
    }
    return null
  }

  const validateForm = () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      return false
    }

    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      setErrorMessage('Please enter a valid 10-digit phone number')
      return false
    }

    // Validate each property's required fields
    for (const property of formData.properties) {
      if (!property.streetAddress || !property.city || !property.state || !property.zipCode) {
        setErrorMessage('Please complete all property address fields')
        return false
      }

      if (!property.propertyType) {
        setErrorMessage('Please select a property type for all properties')
        return false
      }

      if (!property.numberOfUnits) {
        setErrorMessage('Please enter the number of units for all properties')
        return false
      }
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setStatus('success')
      setFormData({
        ownerCompany: '',
        email: '',
        phone: '',
        properties: [{
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          propertyType: '',
          numberOfUnits: '',
          assignedParkingSpaces: '',
          guestParkingSpaces: '',
          notes: ''
        }],
        consent: false
      })
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
      setErrorMessage('Failed to submit form. Please try again or contact us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-12">
        <div className="container max-w-2xl">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h2>
            <p className="text-green-700 mb-6">We've received your submission and will be in touch shortly.</p>
            <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">
            Qualify Your Properties for Free EV Charger Installation
          </h1>
          <p className="text-gray-600 mb-4">
            Fill out the form below and our team will review your application within 48-72 hours.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
            <p className="text-green-800 font-medium">
              Limited Time Offer: Get free EV chargers installed at your properties!
            </p>
          </div>
        </div>

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Information Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
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
                  className={getInputClassName('ownerCompany')}
                  value={formData.ownerCompany}
                  onChange={handleChange}
                />
                {renderFieldError('ownerCompany')}
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
                  className={getInputClassName('email')}
                  value={formData.email}
                  onChange={handleChange}
                />
                {renderFieldError('email')}
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
                  className={getInputClassName('phone')}
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {renderFieldError('phone')}
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Property Information</h2>

            {formData.properties.map((property, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium">Property {index + 1}</h3>
                  {formData.properties.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeProperty(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      required
                      className={getInputClassName(`properties.${index}.streetAddress`)}
                      value={property.streetAddress}
                      onChange={(e) => handlePropertyChange(index, 'streetAddress', e.target.value)}
                      placeholder="Enter property address"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        className={getInputClassName(`properties.${index}.city`)}
                        value={property.city}
                        onChange={(e) => handlePropertyChange(index, 'city', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        required
                        className={getInputClassName(`properties.${index}.state`)}
                        value={property.state}
                        onChange={(e) => handlePropertyChange(index, 'state', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      required
                      className={getInputClassName(`properties.${index}.zipCode`)}
                      value={property.zipCode}
                      onChange={(e) => handlePropertyChange(index, 'zipCode', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type
                    </label>
                    <select
                      required
                      className={getInputClassName(`properties.${index}.propertyType`)}
                      value={property.propertyType}
                      onChange={(e) => handlePropertyChange(index, 'propertyType', e.target.value)}
                    >
                      <option value="">Select property type</option>
                      {propertyTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Units
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      className={getInputClassName(`properties.${index}.numberOfUnits`)}
                      value={property.numberOfUnits}
                      onChange={(e) => handlePropertyChange(index, 'numberOfUnits', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Assigned Parking Spaces
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      className={getInputClassName(`properties.${index}.assignedParkingSpaces`)}
                      value={property.assignedParkingSpaces}
                      onChange={(e) => handlePropertyChange(index, 'assignedParkingSpaces', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Guest/Visitor Parking Spaces
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      className={getInputClassName(`properties.${index}.guestParkingSpaces`)}
                      value={property.guestParkingSpaces}
                      onChange={(e) => handlePropertyChange(index, 'guestParkingSpaces', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      rows={4}
                      className={getInputClassName(`properties.${index}.notes`)}
                      value={property.notes}
                      onChange={(e) => handlePropertyChange(index, 'notes', e.target.value)}
                      placeholder="Any additional information about this property"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addProperty}
              className="w-full py-4 border-2 border-dashed border-green-500 rounded-xl text-green-600 hover:bg-green-50 flex items-center justify-center"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Add Another Property
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start">
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
                I agree to the terms and conditions and understand that installation will be completed after contract approval.
              </label>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full flex items-center justify-center mt-6 disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <span>Submitting...</span>
              ) : (
                <>
                  Submit Application
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 