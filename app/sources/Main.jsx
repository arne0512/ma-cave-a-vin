import React from "react";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

function Main(props) {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Main;
