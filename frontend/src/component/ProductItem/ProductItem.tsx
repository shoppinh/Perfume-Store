import React from "react";
import { Perfume } from "../../types/types";
import "./style.css";
type Props = {
  productData: Perfume;
};

const ProductItem: React.FC<Props> = ({ productData }) => {
  return (
    <div className="card-item">
      <section className="card-sec-img">
        <div className="card-img">
          <img src={productData.filename} className="card-image" />
        </div>
      </section>

      <div className="card-title">{productData.perfumeTitle}</div>
      <div className="card-content">{productData.description}</div>
      <div className="card-price">${productData.price}</div>
    </div>
  );
};

export default ProductItem;
