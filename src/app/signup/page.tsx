'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Script from 'next/script'

// Add type for Google Places Autocomplete
declare global {
  interface Window {
    google: any;
    initAutocomplete: () => void;
  }
}

const propertyTypes = [
  'Apartment Building',
  'Condo Complex',
  'Mixed-Use Development',
  'Office Building',
  'Parking Structure',
  'Other'
]

interface FieldError {
  [key: string]: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState(() => ({
    ownerCompany: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    propertyType: '',
    numberOfUnits: '',
    assignedParkingSpaces: '',
    guestParkingSpaces: '',
    notes: '',
    consent: false
  }))

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false)
  const autocompleteRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isGoogleLoaded && autocompleteRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current, {
        componentRestrictions: { country: 'us' },
        fields: ['address_components', 'formatted_address'],
        types: ['address']
      })

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        
        if (!place.address_components) return

        let streetNumber = ''
        let streetName = ''
        let city = ''
        let state = ''
        let zipCode = ''

        for (const component of place.address_components) {
          const componentType = component.types[0]

          switch (componentType) {
            case 'street_number':
              streetNumber = component.long_name
              break
            case 'route':
              streetName = component.long_name
              break
            case 'locality':
              city = component.long_name
              break
            case 'administrative_area_level_1':
              state = component.short_name
              break
            case 'postal_code':
              zipCode = component.long_name
              break
          }
        }

        setFormData(prev => ({
          ...prev,
          streetAddress: `${streetNumber} ${streetName}`.trim(),
          city,
          state,
          zipCode
        }))
      })
    }
  }, [isGoogleLoaded])

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
    const { name, value, type } = e.target
    const error = validateField(name, value)
    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }))
  } 
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    const newValue = type === 'checkbox' ? checked : value
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }))

  }

  // Update input fields to show errors
  const getInputClassName = (fieldName: string) => {
    const baseClasses = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
    return `${baseClasses} ${
      fieldErrors[fieldName] 
        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
        : 'border-gray-300'
    }`
  }

  // Add error message display under inputs
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
    // Basic validation rules
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      return false
    }

    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      setErrorMessage('Please enter a valid 10-digit phone number')
      return false
    }

    if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      setErrorMessage('Please enter a valid ZIP code')
      return false
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
      // Clear form
      setFormData({
        ownerCompany: '',
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        propertyType: '',
        numberOfUnits: '',
        assignedParkingSpaces: '',
        guestParkingSpaces: '',
        notes: '',
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
            <p className="text-green-700 mb-6">
              Your application has been submitted successfully. Our team will review your information and contact you within 48-72 hours.
            </p>
            <a href="/" className="btn-primary inline-flex items-center justify-center">
              Return Home
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        onLoad={() => setIsGoogleLoaded(true)}
      />

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

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} suppressHydrationWarning className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
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
                  />
                  {renderFieldError('phone')}
                </div>
              </div>
            </div>

            {/* Updated Property Information Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Property Information</h2>
              
              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  ref={autocompleteRef}
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  required
                  className={getInputClassName('streetAddress')}
                  value={formData.streetAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your address"
                />
                {renderFieldError('streetAddress')}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className={getInputClassName('city')}
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    readOnly
                  />
                  {renderFieldError('city')}
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    className={getInputClassName('state')}
                    value={formData.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    readOnly
                  />
                  {renderFieldError('state')}
                </div>
              </div>

              <div className="w-1/2">
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  required
                  className={getInputClassName('zipCode')}
                  value={formData.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  readOnly
                />
                {renderFieldError('zipCode')}
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  className={getInputClassName('propertyType')}
                  value={formData.propertyType}
                  onChange={handleChange}
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {renderFieldError('propertyType')}
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
                  className={getInputClassName('numberOfUnits')}
                  value={formData.numberOfUnits}
                  onChange={handleChange}
                />
                {renderFieldError('numberOfUnits')}
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
                  className={getInputClassName('assignedParkingSpaces')}
                  value={formData.assignedParkingSpaces}
                  onChange={handleChange}
                />
                {renderFieldError('assignedParkingSpaces')}
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
                  className={getInputClassName('guestParkingSpaces')}
                  value={formData.guestParkingSpaces}
                  onChange={handleChange}
                />
                {renderFieldError('guestParkingSpaces')}
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className={getInputClassName('notes')}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any additional information about your property or specific requirements"
                />
                {renderFieldError('notes')}
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
              disabled={status === 'submitting'}
              className="btn-primary w-full flex items-center justify-center disabled:opacity-50"
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
          </form>
        </div>
      </div>
    </>
  )
} 