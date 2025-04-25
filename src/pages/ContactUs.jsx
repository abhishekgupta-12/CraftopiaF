import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-pink-100 to-purple-100 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">📬 Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition duration-300"
              >
                📤 Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-purple-50 p-8 rounded-2xl shadow-inner">
            <h2 className="text-2xl font-semibold text-purple-600 mb-6">📍 Contact Information</h2>
            <p className="text-gray-700 mb-4">
              Feel free to reach out to us via the contact form or through the information below. We would love to hear from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-purple-600 text-xl">🏠</span>
                <span className="text-gray-700">Marwadi University Rajkot-36003</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-purple-600 text-xl">📧</span>
                <span className="text-gray-700">simrankumari.122438@marwadiuniversity.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-purple-600 text-xl">📞</span>
                <span className="text-gray-700">+91 6200914365</span>
              </div>
            </div>

            <div className="mt-8">
              <img
                src="https://image.pollinations.ai/prompt/handmade%20craft%20store"
                alt="Contact Art"
                className="rounded-xl shadow-md w-full h-[200px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
