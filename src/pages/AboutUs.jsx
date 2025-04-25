import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10 mt-10">
        <h1 className="text-5xl font-bold text-center text-purple-700 mb-8 tracking-tight">About Us</h1>

        <p className="text-gray-800 text-xl leading-relaxed mb-10 text-center">
          Welcome to <span className="font-semibold text-pink-500">Stesnaru</span>, your ultimate destination for
          unique and handcrafted <span className="font-semibold text-yellow-500">art products</span> that tell stories and spark imagination.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-purple-500 mb-4">🌟 Our Story</h2>
            <p className="text-gray-700 text-lg">
              Stesnaru was born out of passion for creativity and expression. Every piece is more than a product — it’s
              a reflection of artistic soul. Our mission is to add joy, elegance, and handmade love to your space.
            </p>
          </div>

          <img
            src="https://image.pollinations.ai/prompt/artistic%20notebook%20set"
            alt="Art Product"
            className="w-full h-[320px] object-cover rounded-xl shadow-lg hover:scale-105 hover:rotate-1 transition-transform duration-500"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="https://image.pollinations.ai/prompt/watercolor%20set%20with%20brushes"
            alt="Stesnaru Studio"
            className="w-full h-[320px] object-cover rounded-xl shadow-lg hover:scale-105 hover:-rotate-1 transition-transform duration-500"
          />

          <div>
            <h2 className="text-2xl font-semibold text-purple-500 mb-4">🎨 What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Handmade Sketchbooks and Journals</li>
              <li>Canvas Art & Watercolor Prints</li>
              <li>Decorative Crafts and DIY Kits</li>
              <li>Customized Art Products for Gifting</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-800 font-medium">Join us in celebrating creativity and supporting handmade wonders!</p>
          <button className="mt-6 px-8 py-3 bg-purple-600 text-white text-lg rounded-full shadow-md hover:bg-purple-700 transition-transform hover:scale-105">
            🎁 Explore Our Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
