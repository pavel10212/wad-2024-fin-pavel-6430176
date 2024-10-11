"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CustomerDetail({ params }) {
  const APIBASE = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const { id } = params;
  const [customer, setCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`${APIBASE}/customer/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch customer");
        }
        const customerData = await response.json();
        setCustomer(customerData);
      } catch (error) {
        console.error("Error fetching customer:", error);
        alert("Failed to load customer data");
        router.push("/customer");
      }
    };

    fetchCustomer();
  }, [id, APIBASE, router]);

  const handleEdit = () => setIsEditing(true);

  const handleSave = async () => {
    try {
      const response = await fetch(`${APIBASE}/customer/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      if (!response.ok)
        throw new Error(`Failed to update customer: ${response.status}`);
      console.log(customer, "customer");
      alert("Customer updated successfully");
      setIsEditing(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        const response = await fetch(`${APIBASE}/customer/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete customer");
        alert("Customer deleted successfully");
        router.push("/customer");
      } catch (error) {
        console.error("Error deleting customer:", error);
        alert(error.message);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  if (!customer) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Customer Details
      </h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <CustomerField
            label="Name"
            value={customer.name}
            isEditing={isEditing}
            name="name"
            onChange={handleInputChange}
          />
          <CustomerField
            label="Date of Birth"
            value={new Date(customer.dateOfBirth).toLocaleDateString()}
            isEditing={isEditing}
            name="dateOfBirth"
            onChange={handleInputChange}
            type="date"
            editValue={
              new Date(customer.dateOfBirth).toISOString().split("T")[0]
            }
          />
          <CustomerField
            label="Member Number"
            value={customer.memberNumber}
            isEditing={isEditing}
            name="memberNumber"
            onChange={handleInputChange}
          />
          <CustomerField
            label="Interests"
            value={customer.interests}
            isEditing={isEditing}
            name="interests"
            onChange={handleInputChange}
          />
        </div>
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Edit
            </button>
          )}
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/customer")}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Back to Customer List
        </button>
      </div>
    </div>
  );
}

function CustomerField({
  label,
  value,
  isEditing,
  name,
  onChange,
  type = "text",
  editValue,
}) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      {isEditing ? (
        <input
          type={type}
          name={name}
          value={type === "date" ? editValue : value}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
        />
      ) : (
        <div className="bg-gray-100 p-3 rounded text-gray-800">{value}</div>
      )}
    </div>
  );
}
