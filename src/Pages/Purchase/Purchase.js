import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});
  const { name, description, price, quantity, ratings, image } = purchase;
  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${purchaseId}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);
  console.log(purchase);
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold mb-[10px]">{name}</h1>
          <span className="mx-[20px]">Rating: {ratings}</span>
          <span className="mx-[20px]">
            Available Product: {quantity} {quantity > 1 ? "units" : "unit"}
          </span>

          <p class="py-6">{description}</p>
          <div className="ml-[40px]">
            <button className="btn">-</button>
            <input
              type="text"
              value={4}
              className="input input-bordered w-20 max-w-xs m-[20px] text-center"
            />
            <button className="btn ">+</button>
          </div>
          <button class="btn btn-primary mx-[10px]">Buy Now</button>
          <button class="btn btn-primary mx-[10px]">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
