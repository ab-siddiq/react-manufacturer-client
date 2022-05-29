import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories,setCategories] = useState([]);
  useEffect(()=>{
    fetch('https://intense-sierra-65183.herokuapp.com/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])
  return (
    <div className="">
      <h2 className="text-4xl font-bold mt-[100px] mb-[40px] text-center">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
          {categories.map(category=><Category key={category._id} category={category}></Category>)}
      </div>
    </div>
  );
};

export default Categories;
