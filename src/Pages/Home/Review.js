import React from "react";

const Review = ({ review }) => {
  const {name, message,image} = review;
  return (
    <div class="card w-full bg-base-100 shadow-xl my-[40px]">
      <figure class="px-10 pt-10">
        <img
        style={{height: '100px', width: '100px', borderRadius: '50%', border: '1px solid grey'}}
          src={image}
          alt={image}
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{message}</p>
        {/* <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Review;
