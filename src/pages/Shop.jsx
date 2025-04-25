import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios("/assets/shop.json"); // loads from public folder
      setProducts(data);
    } catch (error) {
      console.log("Failed to fetch product data", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      {/* Full Height Image (Hero Image) with reduced height and padding on top */}
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

      {/* Grid for Products */}
      <section className="grid py-10 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products?.map((item, id) => (
          <ProductCard item={item} key={id} />
        ))}
      </section>
    </Layout>
  );
};

export default Shop;
