import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Bestseller from "../components/Bestseller";
import ContactUs from "../components/ContactUs";
import Footer from "../components/footer";


const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <About />
      <Bestseller />
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default HomePage;
