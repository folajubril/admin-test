import React, { useState, useEffect, useMemo } from "react";
import useGetAllProductsCategories from "@/hooks/queries/product/useGetCategories";
import useGetProductsByCategory from "@/hooks/queries/product/useGetProductByCategory";

const FilterTags = ({ ...args }) => {
  const { getFilteredProducts, products } = args;
  const { data: categories } = useGetAllProductsCategories();

  const [filterd, setFilterd] = useState({
    filter: null,
    status: false,
    id: 0,
  });
  let cat = filterd?.id ? filterd?.id : "";
  const searchProductByCategory = async (categoryName: any) => {
    if (categoryName) {
      const searched = products?.filter((product: any) => {
        return (product =
          product?.category?.id=== categoryName);
      });
      getFilteredProducts(searched);
    } else if (!categoryName) {
      return products;
    }
  };

  const clearFilters = async () =>  {
    await setFilterd({
      filter: null,
      status: false,
      id: 0,
    });
    getFilteredProducts(products)
  }
  const { data: productsInCategory } = useGetProductsByCategory(cat);
  useEffect(() => {
    searchProductByCategory(cat);
  }, [cat, categories]);

    const squared = useMemo(() => {
    console.log('Calculating square...');
    return categories ;
  }, [categories]);
  console.log(squared, )
  return (
    <div className="flex space-x-2">
       { squared?.map((filter: any, index: any) => (
        <div key={index} className="flex justify-between gap-[16px]">
          <div 
            key={index + 1}
            onClick={async () => {
              await setFilterd({
                filter: filter?.name,
                status: true,
                id: filter?.id,
              });
            }}
            className={`flex items-center bg-gray-100 text-gray-400 px-3 py-1 rounded-full cursor-pointer  `}
          >
            <span
              className={`${
                filterd?.id == index + 1 && filterd?.status === true
                  ? "scale-110 bg-grey-300 text-gray-600 "
                  : ""
              }`}
            >
              {filter?.name}
            </span>
          </div>
        </div>
      ))}
      {filterd.filter ? (
        <div
          onClick={() => clearFilters()
          }
          className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full cursor-pointer text-[16px]"
        >
          X
        </div>
      ) : ''} 
    </div>
  );
};

export default FilterTags;
