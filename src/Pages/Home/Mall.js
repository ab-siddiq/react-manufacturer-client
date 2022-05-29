import React from "react";
import useProducts from "../../hooks/useProducts";
import Part from "./Part";

const Mall = () => {
  const [products] = useProducts();
  return (
    <div className="">
          <h2 className="mt-[100px] mb-[40px] text-center text-4xl font-bold">Latest Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto">
          {products.slice(6,12).map(product=><Part key={product._id} product={product}></Part>)}
      </div>
      </div>
  );
};

export default Mall;
