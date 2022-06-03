import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import Part from "./Part";

const Parts = () => {
    const [products] = useProducts();


    
  console.log(products,'prod')
  
  return (
      <div className="" >
          <h2 className="mt-[100px] mb-[40px] text-center text-4xl font-bold">Our Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[40px] ">
          {products.slice(0,6).map(product=><Part key={product._id} product={product}></Part>)}
      </div>
      </div>
      
   
  );
};

export default Parts;
