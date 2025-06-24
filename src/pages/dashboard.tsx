import React from "react";
import Layout from "@/layouts";
import Head from "next/head";
import Products from "@components/products"

import { ProductContext, productContextValue } from "@utils/context";

export default function Home() {
 

  return (
    <ProductContext.Provider value={productContextValue}>
      <Layout>
        <Head>
          <title>Simple - Shopper</title>
          <meta name="description" content="Ecommerce application" />
        </Head>
        <Products/>
      </Layout>
    </ProductContext.Provider>
  );
}
