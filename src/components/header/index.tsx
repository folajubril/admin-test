import React, { useContext } from "react";
import Logo from "@components/svgs/logo";
import ShoppingCartButton from '@/components/AddProductButton'
import { useRouter } from "next/router";

interface HeaderProps {
  // Add any props you need to pass to the Header component
}

export default function Header({ }: HeaderProps) {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem('authToken');
    router.push('/');
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-white h-[70px] px-[120px] py-auto flex justify-between items-center shadow-md z-50">
      <div className="text-xl font-bold cursor-pointer" onClick={() => router.push("/dashboard")}>
        <Logo />
      </div>

<div className="flex items-center gap-4">
      <button
        onClick={() => logout()}
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none hover:scale-105 transition-transform duration-200"
      >Logout
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-log-out"
          viewBox="0 0 24 24"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </button>
      <ShoppingCartButton />
    </div>
</div>
  );
}
