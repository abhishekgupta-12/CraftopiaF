import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Craftopia</span>. All Rights Reserved.
        </p>
        <p className="text-lx mt-2">
          Developed by <span className="font-semibold">Simran</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
