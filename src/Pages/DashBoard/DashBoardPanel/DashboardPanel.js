import React from "react";
import useProducts from "../../../hooks/useProducts";

const DashboardPanel = () => {
  const [products] = useProducts();
  // return <div>dd</div>
  return <div>{products.map(product=>product.name)}</div>;
};

export default DashboardPanel;
