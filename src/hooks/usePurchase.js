import { useState } from "react";

const usePurchase = () => {
  const [purchase, setPurchase] = useState({});
  return [purchase, setPurchase];
};
export default usePurchase;
