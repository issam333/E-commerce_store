import React from "react";

import product1type1 from "../images/product-1-type-1.png";
import product1type2 from "../images/product-1-type-2.png";
import product2type1 from "../images/product-2-type-1.png";
import product2type2 from "../images/product-2-type-2.png";
import product3type1 from "../images/product-3-type-1.png";
import product3type2 from "../images/product-3-type-2.png";
import { CgEnter } from "react-icons/cg";
import { useRef, useEffect, useState } from "react";

function Bestseller() {
  const dataPrt = [
    {
      img: product1type1,
      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },

    {
      img: product2type1,
      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },

    {
      img: product3type1,
      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },
  ];
  const dataHoverProduct = [
    {
      img: product1type2,
      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },
    {
      img: product2type2,
      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },
    {
      img: product3type2,
      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },
  ];
  const [hover, setHover] = useState(false);

  return (
    <div className=" w-[100%] px-2.5 mb-20 capitalize ">
      <h1 className="ml-[5%] text-4xl font-bold">Our Bestseller</h1>
      <div className=" flex gap-2.5 flex-wrap justify-around mt-7">
        {dataPrt.map((el) => (
          <div className="bg-gray-200 flex flex-col gap-2.5 h-[350px] w-[250px] rounded-lg justify-center items-center p-7.5 shadow-[1px_5px_20px_0px_#0B0B0B]">
            <img
              onMouseEnter={() => {hover?setHover(false):setHover(true)}}
              style={
                hover ? { opacity:'0', } : {  }
              }
              onMouseLeave={() => {hover?setHover(false):setHover(true)}}
              className="h-[100PX]"
              src={el.img}
            ></img>
            <div className="text-center">
              <div className="font-medium leading-[23.74px]">{el.title}</div>
              <div className="font-serif font-normal text-base leading-[18.74px]">
                {el.disc}
              </div>
              <div className="font-serif font-semibold text-lg leading-[23.42px]">
                {el.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bestseller;
