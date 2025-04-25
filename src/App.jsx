import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Router";
import Footer from "./components/nav/footer"; // Importing Footer component

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
      <Footer /> {/* Add Footer at the bottom of the app */}
    </div>
  );
};

export default App;
