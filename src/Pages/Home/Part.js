import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePurchase from "../../hooks/usePurchase";

const Part = ({ product }) => {
  const { _id, name, image, description, price, quantity, ratings } = product;
  const [setPurchase] = usePurchase();
  const navigate = useNavigate();

  const handleBuyNow = (id) => {
    console.log(id);
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card w-full bg-gray-600 text-zinc-300 border-gray-600 shadow-xl my-5">
      <figure>
        <img
          className="hover:scale-x-125 transition ease-in-out delay-150"
          style={{ height: "300px", width: "100%", borderRadius: "10px" }}
          src={image}
          alt={image}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title"> {name.slice(0, 15)} </h2>
          <h2 className="badge badge-secondary card-title py-4">
            &#2547; {price}
          </h2>
        </div>

        <p>{description.slice(0, 80)}</p>
        <div className="flex justify-between items-center mt-[20px]">
          <div className="card-actions ">
            <div className="badge badge-outline py-4">
              Available: {quantity} units
            </div>
            <div className="badge badge-outline py-4">Rating: {ratings}</div>
          </div>
          <div className="card-actions ">
            <button
              onClick={() => {
                handleBuyNow(_id);
              }}
              className="btn btn-secondary "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part;
