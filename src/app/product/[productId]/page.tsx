/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import axios from "axios";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  battery_life: number;
}

type ProductByIdType = {
  params: {
    productId: string;
  };
};

const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await axios.get("https://static.staticsave.com/laptoppartial/laptops-json.json");
    const products: Product[] = response.data;
    return products.find(product => product.id.toString() === id) || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const generateMetadata = (props: ProductByIdType): Metadata => {
  return {
    title: `Product-${props.params.productId}`,
  };
};

export default async function ProductById({ params }: ProductByIdType) {
  const product = await getProductById(params.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-6 bg-white max-w-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center">
        <img className="rounded-xl w-full object-cover h-64" src={product.image} alt={product.name} />
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="mt-2 text-gray-700">Price: NPR {product.price}</p>
          <p className="mt-2 text-gray-700">Battery Life: {product.battery_life} hours</p>
          <p className="mt-4 text-gray-600">{product.description}</p>
        </div>
        <button className="mt-6 text-white font-semibold bg-green-500 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform hover:scale-110">
          Buy Now
        </button>

        <button className="mt-6 text-white font-semibold bg-green-500 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform hover:scale-110">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
