import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import useGetProduct from "@/hooks/queries/product/useGetOneProduct";
import Layout from '@/layouts';
import Head from 'next/head';
import React from 'react';
export default function CreateProductPage() {

  const router = useRouter();
  const { id } = router.query;

  const { data: productDetails } = useGetProduct(Number(id));
  const product = productDetails?.data;
  console.log('productDetails', productDetails, product);
  const [form, setForm] = useState({
    title:  '',
    price:  '',
    description:  '',
    categoryId:  '',
    imageUrl:  '',
  });
  const [loading, setLoading] = useState(false);
  // const [, setResponse] = useState<null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const payload = {
        title: form.title,
        price: Number(form.price),
        description: form.description,
        categoryId: Number(form.categoryId),
        images: [form.imageUrl],
      };

      const res = await axios.post('https://api.escuelajs.co/api/v1/products/', payload);
      alert(`Product ${res.data?.title} created!`);
      console.log('Product created:', res.data);
      setForm({
        title: res.data?.title,
        price: res.data?.price,
        description: res.data?.description,
        categoryId:  res.data?.category?.id,
        imageUrl: res.data?.images[0],
      })
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to create product.');
    } finally {
      setLoading(false);
    }
  };
  const goBack = () => {
    router.back()
  };  

  useEffect(() => {
    if (id && product) {
      setForm({
        title: product.title,
        price: product.price,
        description: product.description,
        categoryId: product.category.id,
        imageUrl: product.images[0],
      });
    }
  }, [id, product]);
  return (
    <Layout>
      <Head>
        <title>Create / Edit - Product</title>
        <meta name="description" content="Ecommerce application" />
      </Head>
      <>
    
      <div className='flex mt-[100px] items-center justify-center w-full'>
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
        <div className="flex flex-col h-fit py-[10px] px-[20px] w-[60%]" >
          <h2 className='text-left'>Create Product</h2>
          <br />
          <label className='text-sm text-gray-600 text-left'>Title</label>
          <input
            name="title"
            placeholder="Title"
            className='h-[48px] border border-gray-300 rounded-lg p-4 w-full'
            value={form.title}
            onChange={handleChange}
          /><br />
          <label className='text-sm text-gray-600 text-left'>Price</label>

          <input
            name="price"
            className='h-[48px] border border-gray-300 rounded-lg p-4 w-full'
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          /><br />
          <label className='text-sm text-gray-600 text-left'>Description</label>
          <textarea
            name="description"
            className='h-[148px] border border-gray-300 rounded-lg p-4 w-full'
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          /><br />
          <label className='text-sm text-gray-600 text-left'>Category ID</label>
          <input
            name="categoryId"
            className='h-[48px] border border-gray-300 rounded-lg p-4 w-full'
            placeholder="Category ID"
            value={form.categoryId}
            onChange={handleChange}
          /><br />
          <label className='text-sm text-gray-600 text-left'>Image URL</label>

          <input
            name="imageUrl"
            placeholder="Image URL"
            className='h-[48px] border border-gray-300 rounded-lg p-4 w-full'
            value={form.imageUrl}
            onChange={handleChange}
          /><br />

          <button className="h-[48px] py-2 px-4 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none hover:scale-105 transition-transform duration-200" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Creating...' : 'Create Product'}
          </button>

         
        </div>
      </div>
      </>
    </Layout>
  );
}
