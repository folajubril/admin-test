import React from 'react';
import Layout from '@/layouts';
import Head from 'next/head';
import { useRouter } from 'next/router';
const CheckoutPage = () => {
    const router = useRouter();
    const goBack = () => {
        router.back()
      };
    return (
        <Layout>
        <Head>
          <title>Checkout / Simple - Shopper</title>
          <meta name="description" content="Ecommerce application" />
        </Head>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6 ">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
            <div
        onClick={goBack}
        className="flex items-center space-x-2 cursor-pointer border-gray rounded-md p-[6px]"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span className="text-gray-800">Back</span>
      </div>
                <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

                <form>
                    {/* Personal Information */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            placeholder="john@example.com"
                            required
                        />
                    </div>

                    {/* Payment Information */}
                    <div className="mb-4">
                        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="card-number"
                            name="card-number"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            placeholder="1234 5678 9012 3456"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                id="expiry"
                                name="expiry"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                                placeholder="MM/YY"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                CVC
                            </label>
                            <input
                                type="text"
                                id="cvc"
                                name="cvc"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                                placeholder="123"
                                required
                            />
                        </div>
                    </div>

                    {/* Address Information */}
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Shipping Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            placeholder="123 Main St, City, Country"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Complete Checkout
                    </button>
                </form>
            </div>
        </div>
        </Layout>
    );
};

export default CheckoutPage;
