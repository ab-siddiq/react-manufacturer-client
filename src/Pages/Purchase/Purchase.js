import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});
  const { name, description, price, quantity, ratings, image } = purchase;
  const [productQuantity, setProductQuantity] = useState(4);
  const [error,setError] = useState('');
  const [errorBG,setErrorBG] = useState('');


  const handleDecrease = () => {
    let error = '';
    if(productQuantity>4){
      setProductQuantity(productQuantity-1)
    }else{
      setError('need to buy more than 4 product');
      setErrorBG("ml-[40px] bg-red-500  p-[10px] rounded text-red-200");
    }
  };
  const handleIncrease = () => {
      setProductQuantity(productQuantity+1);
      setError('');
      setErrorBG('');
  };

  useEffect(() => {
    fetch(`https://enigmatic-journey-32306.herokuapp.com/purchase/${purchaseId}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);
  console.log(purchase);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold mb-[10px]">{name}</h1>
          <span className="mx-[20px]">Rating: {ratings}</span>
          <span className="mx-[20px]">
            Available Product: {quantity} {quantity > 1 ? "units" : "unit"}
          </span>

          <p className="py-6">{description}</p>
          <span className={`${errorBG}`}>{error}</span>
          
          <div className="ml-[40px] flex  items-center">
            <button className="btn disabled" onClick={handleDecrease}>
              -
            </button>
            <div className="input input-bordered w-20 max-w-xs m-[20px] flex items-center justify-center">
              {productQuantity}
            </div>
            <button className="btn " onClick={handleIncrease}>
              +
            </button>
          </div>
          <button className="btn btn-primary mx-[10px]">Buy Now</button>
          <button className="btn btn-primary mx-[10px]">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
