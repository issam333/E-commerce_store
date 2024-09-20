import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Bestseller from "../components/Bestseller";
import ContactUs from "../components/ContactUs";
import Footer from "../components/footer";
import Product1 from "../components/product1";
import Product2 from "../components/product2";
import PartTiger from "../components/partTiger";
import ScrollTop from '../components/scrollTop'


const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <About />
      <Product1 />
      <Product2 />
      <PartTiger/>
      <Bestseller />
      <ContactUs />
      <Footer />
      <ScrollTop/>
    </div>
  );
};

export default HomePage;
