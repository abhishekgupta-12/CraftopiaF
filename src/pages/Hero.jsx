import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Hero = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios("/assets/products.json"); // loads from public folder
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
          <p className="absolute flex items-center justify-center pt-28 text-sky-400">✍️ Whether you're an artist, a student, or a dreamer, find everything you need to express your imagination and bring your ideas to life</p>
        </div>
      </div>

      {/* Grid for Products */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products?.map((item, id) => (
          <ProductCard item={item} key={id} />
        ))}
      </section>
    </Layout>
  );
};

export default Hero;
