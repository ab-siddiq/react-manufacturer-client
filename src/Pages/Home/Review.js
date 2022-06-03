import React from "react";

const Review = ({ review }) => {
  const { name, message, image } = review;
  return (
    <div className="card w-full bg-base-100 shadow-xl my-[40px] bg-gray-600 text-zinc-300">
      <figure className="px-10 pt-10">
        <img
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            border: "1px solid grey",
          }}
          src={image}
          alt={image}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{message}</p>
        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Review;
