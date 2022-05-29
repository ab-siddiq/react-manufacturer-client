import React from "react";

const Part = ({product}) => {
    const {name,image,description,price,quantity,ratings} = product;
  return (
    <div className="card w-full bg-base-100 shadow-xl my-5">
      <figure>
        <img style={{height: '300px',width: '100%', borderRadius: '10px'}}
          src={image}
          alt={image}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
        <h2 className="card-title"> {name.slice(0,15)} </h2>
        <h2 className="badge badge-secondary card-title py-4">&#2547; {price}</h2>
        </div>
        
        <p>{description.slice(0,80)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline py-4">Available: {quantity} units</div>
          <div className="badge badge-outline py-4">Rating: {ratings}</div>
        </div>
      </div>
    </div>
  );
};

export default Part;
