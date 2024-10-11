"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [customer, setCustomer] = useState({
    name: '',
    dateOfBirth: '',
    memberNumber: '',
    interests: ''
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const createCustomer = async (data) => {
    try {
      const response = await fetch('/api/customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error(`Failed to create customer: ${response.status}`);
      }
      alert('Customer created successfully');
      router.push('/customer'); // Redirect to the customer list page
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add Customer</h1>
      <form onSubmit={handleSubmit(createCustomer)} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            {...register('dateOfBirth', { required: 'Date of Birth is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.dateOfBirth && <p className="text-red-500 text-xs italic">{errors.dateOfBirth.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="memberNumber" className="block text-gray-700 text-sm font-bold mb-2">Member Number</label>
          <input
            type="text"
            id="memberNumber"
            {...register('memberNumber', { required: 'Member Number is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.memberNumber && <p className="text-red-500 text-xs italic">{errors.memberNumber.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="interests" className="block text-gray-700 text-sm font-bold mb-2">Interests</label>
          <input
            type="text"
            id="interests"
            {...register('interests')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Customer
          </button>
          <button
            type="button"
            onClick={() => router.push('/')}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}