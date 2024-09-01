import React from "react";
import Bestseller from "../components/Bestseller";
import ContactUs from "../components/ContactUs";
import Footer from "../components/footer";

const BestsellerAndContactUs = () => {
  return (
    <div className="overflow-x-hidden">
      <Bestseller />
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default BestsellerAndContactUs;
