import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  console.log(typeof reviews)
    useEffect(() => {
      fetch("https://intense-sierra-65183.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])

  return (
    <div className="">
      <h2 className="mb-[40px] text-4xl font-bold text-center">
        Customer Reviews
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {reviews.slice(0,6).map(review=><Review key={review._id} review={review}></Review>)}
        {/* {reviews.map(review=><Review key={review._id} review={review}></Review>)} */}
      </div>
    </div>
  );
};

export default Reviews;
