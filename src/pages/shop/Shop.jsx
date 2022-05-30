import { useContext } from "react";

import { ProductContext } from "../../context/products";

import { ShopCard } from "../../components/shop-card/ShopCard";

import "./Shop.scss";
export const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="shop-container">
      {products.map((product) => (
        <ShopCard key={product.id} data={product} />
      ))}
    </div>
  );
};
