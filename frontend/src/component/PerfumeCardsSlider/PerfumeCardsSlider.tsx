import React, { FC, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "../Tabs/Tabs";
import {
  fetchPerfumesByIds,
  fetchPerfumesByIdsQuery,
} from "../../redux/thunks/perfume-thunks";
import "./PerfumeCardsSlider.css";
import { AppStateType } from "../../redux/reducers/root-reducer";
import { Perfume } from "../../types/types";
import StarRating from "../StarRating/StarRating";

const PerfumeCardsSlider: FC = () => {
  const dispatch = useDispatch();
  const settings = { controls: false };

  return (
    <div>
      <div className="container text-center my-3">
        <h5 className="header_perfume_product">Perfume Product</h5>
        <h3 className="header_perfume_product_our">Our Perfume Product</h3>
        <p className="header_perfume_content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <Tabs />
    </div>
  );
};

export default PerfumeCardsSlider;
