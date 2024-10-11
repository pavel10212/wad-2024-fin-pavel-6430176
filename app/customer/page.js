"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CustomerList() {
  const APIBASE = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [customerList, setCustomerList] = useState([]);

  async function fetchCustomers() {
    try {
      const response = await fetch(`${APIBASE}/customer`);
      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }
      const customers = await response.json();
      setCustomerList(customers);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleRowClick = (customerId) => {
    router.push(`/customer/${customerId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Customer List
      </h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Member Number
              </th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((customer) => (
              <tr 
                key={customer._id} 
                onClick={() => handleRowClick(customer._id)}
                className="cursor-pointer transition duration-300 ease-in-out hover:bg-blue-100"
              >
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap font-semibold">{customer.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{customer.memberNumber}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <button
          onClick={() => router.push("/customer/addCustomer")}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
        >
          Add Customer
        </button>
      </div>
    </div>
  );
}