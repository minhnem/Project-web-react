import React from "react";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
