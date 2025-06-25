/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ProductContext } from "@utils/context";
import useStore from "@/store";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import axios from 'axios';


export default function ProductCardList({ products }: any) {
  const [cartItem, setCartItem] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [fItem, setFitem] = useState<any>(null);


  const { setCart } = useStore((state) => state);

  const router = useRouter();


  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [modal, setModal] = useState(false);

  const showDetail = (id: any) => {
    router.push(`/product/${id}`);
  };

  const editProduct = (id: any) => {
    router.push({
      pathname: "/createProduct",
      query: { id },
    });
  }
  const deleteProduct = async () => {
    console.log('fItem', fItem);
    if (fItem) {
      try {
        setLoading(true);

        const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${fItem?.id}`);
        setResponse(res.data);
        alert(`item ${fItem?.title} deleted!`);
setModal(false);
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product.' );
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

  }
  useEffect(() => {
    setCart(cartItem);
  }, [cartItem]);


  return (
    <>


      <div className=" relative p-6 flex flex-wrap flex-col justify-between items-center gap-[45px]">

       {modal && <div className="fixed inset-0 bg-black bg-opacity-60 z-50 "><div className='mt-[20%] mx-[30%] absolute flex flex-col w-[420px] bg-white rounded-lg shadow-md p-8 mb-4'>
          <h1 className="font-semibold text-2xl text-center">Are you sure you want to delete this item?</h1>
          <div className="flex justify-end space-x-2 mt-4">
            <button onClick={() => setModal(false)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-200">
              Close
            </button>
            <button className="bg-red-500 py-2 px-4  text-white rounded-lg hover:bg-blue-600 focus:outline-none hover:scale-105 transition-transform duration-200" onClick={deleteProduct}>Delete</button>

          </div>
        </div></div>}
        {products?.map((item: any) => (
          <>
            <div className="cursor-pointer flex items-center mx-auto w-[70%] h-fit bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                onClick={() => showDetail(item?.id)}
                className="w-full h-[48px] object-contain hover:scale-120 transition-transform duration-200"
                src={item?.images[0]}
                alt={item?.title}
                width={200}
                height={200}
              />

              <div className="p-4 flex flex-col justify-between gap-2 items-start w-full">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 uppercase">{item?.category?.name}</p>

                  <h3 className="text-lg font-bold text-gray-800 mt-2">
                    {item?.title}
                  </h3>
                </div>
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col">
                    <p className="text-xl font-semibold text-blue-500 mt-2">
                      ${item?.price}
                    </p>
                  </div>
                  <div className="flex felx-end space-x-4">
                    <button
                      onClick={() => editProduct(item.id)}
                      className="edit bg-none rounded py-2 hover:scale-110 focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke=" blue" stroke-width="2">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>

                    </button>
                    <button

                      className="delete bg-none py-2 rounded hover:scale-110 focus:outline-none"
                      onClick={()=> {
                        setModal(true);
                        setFitem(item);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="red" stroke-width="2">
                        <path d="M3 6h18M9 6v12m6-12v12M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m4 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </>
        ))}

      </div>
    </>
  );
}
