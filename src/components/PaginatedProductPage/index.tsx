import React, { useState, useEffect } from "react";
import ProductCardList from "@components/card";
import SearchInput from "@components/searchInput";
import FilterTags from "@components/categoryTags";
import useGetProducts from "@/hooks/queries/product/useGetProucts";
import Spinner from "../spinner";

const PaginatedProductPage = ({ ...args }) => {
  const { itemsPerPage } = args;
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useGetProducts();

  const [productList, setProductList] = useState<any>(data);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = productList?.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(productList?.length / itemsPerPage);
  const getFilteredProducts = async (products: any) => {
    await setProductList(products);
    setCurrentPage(1);
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const setPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setProductList(data);
  }, [data]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto p-4 flex flex-col gap-[40px]">
          <SearchInput search={getFilteredProducts} products={data} />
          <FilterTags
            getFilteredProducts={getFilteredProducts}
            products={data}
          />
          <ProductCardList products={currentItems} />

          <div className="flex justify-center space-x-2 mt-[50px]">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded ${
                currentPage === 1
                  ? "bg-gray-300"
                  : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setPage(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300"
                  : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PaginatedProductPage;
