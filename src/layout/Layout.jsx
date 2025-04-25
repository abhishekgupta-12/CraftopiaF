import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      className="w-full min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1685754671556-324edb39a3f3?auto=format&fit=crop&w=1920')`,
      }}
    >
      <div className="sm:w-[70%] w-[95%] mx-auto min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
