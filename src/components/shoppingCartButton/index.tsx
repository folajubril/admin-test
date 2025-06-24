import React from "react";
import useStore from "@/store";
import { useRouter } from "next/router";

export default function ShoppingCartButton() {
  const { cart } = useStore((state) => state);
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.push("/createProduct")}
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none hover:scale-105 transition-transform duration-200"
      >
          Add Product
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

      </button>
    </div>
  );
}
