import React, { useEffect, useState } from "react";

const SearchInput = ({ ...args }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { search, products } = args;

  const searchProductByName = async (productName: any) => {
    if (productName.toLowerCase().length > 0) {
      const searched = products?.filter((product: any) => {
        return (product = product?.title
          .toLowerCase()
          .includes(productName.toLowerCase()));
      });
      search(searched);
    } else if (productName.toLowerCase().length <= 0) {
      return products;
    }
  };

 

  useEffect(() => {
    searchProductByName(searchTerm);
  }, [searchTerm]);

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white h-[58px] w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 4a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7zm0 0l6 6"
        />
      </svg>

      <input
        type="text"
        value={searchTerm as string}
        onChange={async (e) => {
          await setSearchTerm(e.target.value as string);
        }}
        placeholder="Search..."
        className="flex-grow outline-none text-gray-700 "
      />

      {searchTerm.length > 0 ? (
        <button
          onClick={async() => {
            await setSearchTerm("" as string);
            await search(products);
          }}
          className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
        >
          ✕
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchInput;
