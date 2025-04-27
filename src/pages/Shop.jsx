import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import ShopCard from "../components/ShopCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/assets/shop.json"); // clear method
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch product data", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full h-64 pt-10">
        <img
          src="/Banner.png"
          alt="Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
          <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
        </div>
      </div>

      {/* Products Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products?.map((item) => (
          <ShopCard item={item} key={item.id || item.name} /> // use item.id or fallback
        ))}
      </section>
    </Layout>
  );
};

export default Shop;
