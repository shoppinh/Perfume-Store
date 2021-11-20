import { closeSync } from "fs";
import React from "react";
import { Perfume } from "../../types/types";
import ProductItem from "../ProductItem/ProductItem";
import "./style.css";
type Props = {
  index: number;
  productList: Perfume[];
};

const Tab: React.FC<Props> = ({ productList, index }) => {
  console.log("productList in child", productList);
  return (
    <div className="grid-card">
      {productList.length > 0 &&
        productList.map((productItem) => (
          <ProductItem key={productItem.id} productData={productItem} />
        ))}
    </div>
  );
};

Tab.defaultProps = {
  productList: [],
};

export default Tab;
