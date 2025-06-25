import React from "react";
import useGetProduct from "@/hooks/queries/product/useGetOneProduct";
import { useRouter } from "next/router";
import Layout from "@/layouts";
import Head from "next/head";
import Image from "next/image";

const ProductDetail = () => {

  const router = useRouter();

  const { id } = router.query;

  const { data: productDetails } = useGetProduct(Number(id));
  const product = productDetails?.data;

  

 



  const goBack = () => {
    router.back()
  };  
  // useEffect(() => {
  //   setCart(cartItem);
  // }, [cartItem]);
  console.log("Product Detail", product);
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div
        onClick={goBack}
        className="flex mb-[10px]items-center space-x-2 cursor-pointer border-gray rounded-md p-[6px]"
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
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/2">
          <Image
            className="w-full h-full object-cover"
            src={product?.images[0]}
            alt={product?.title}
            width={200}
            height={200}
          />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500 uppercase">
              {product?.category?.name}
            </p>
            <h1 className="text-2xl font-bold text-gray-800 mt-1">
              {product?.title}
            </h1>
          </div>

        

          <p className="text-gray-600 mt-4">{product?.description}</p>

          <div className="flex justify-between">
            <div className="mt-4 text-xl font-semibold text-blue-500">
              ${product?.price}
            </div>
            
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default function ProductPage() {
  return (
    <Layout>
      <Head>
        <title>Ecommerce - Admin</title>
        <meta name="description" content="Ecommerce application" />
      </Head>
      <div className="mt-[80px]">
        <ProductDetail />
      </div>
    </Layout>
  );
}
