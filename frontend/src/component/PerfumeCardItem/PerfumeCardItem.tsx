import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./PerfumeCarItem.css";
import { Perfume } from "../../types/types";
import StarRating from "../StarRating/StarRating";

type PropsType = {
  key: number;
  perfume: Perfume;
  colSize: number;
  link: string;
  btnName: string;
};

const PerfumeCardItem: FC<PropsType> = ({
  key,
  perfume,
  colSize,
  link,
  btnName,
}) => {
  return (
    <div
      key={key}
      className={`col-lg-${colSize} perfume-card-item`}
      style={{ padding: "0 30px", margin: "10px 0" }}
    >
      <div
        className="card mb-5"
        style={{ height: "350px", border: "none", padding: "5px" }}
      >
        {/* <div style={{height: "92px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <LazyLoadImage
                        effect="blur"
                        style={{width: "80px", marginTop: "20px"}}
                        src={perfume.filename}/>
                </div>
                <div className="card-body text-center">
                    <StarRating perfumeRating={perfume.perfumeRating}/>
                    <h6>{perfume.perfumeTitle}</h6>
                    <h6>{perfume.perfumer}</h6>
                    <h6><span>${perfume.price}</span>.00</h6>
                </div>
                <div className="text-center align-items-end mb-3">
                    <Link to={`${link}/${perfume.id}`}>
                        <span className="btn btn-dark">{btnName}</span>
                        <h6>
              <span>${perfume.price}</span>.00
            </h6>
                    </Link>
                </div> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LazyLoadImage
            effect="blur"
            style={{
              width: "200px",
              height: "200px",
              transition: "all 0.5s ease",
            }}
            src={perfume.filename}
            className="item-image"
          />
          <a href="#" className="border-link"></a>
        </div>
        <div className="card-description">
          <div className="card-body text-center">
            <StarRating perfumeRating={perfume.perfumeRating} />
            <h6>{perfume.perfumeTitle}</h6>
            <h6>{perfume.perfumer}</h6>
          </div>
        </div>
        <div className="button-list">
          <div className="button-list__item button-list__show">
            <Link to={`${link}/${perfume.id}`}>
              <span className="">{btnName}</span>
            </Link>
          </div>

          <div className="button-list__item">
            <span>${perfume.price}</span>.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfumeCardItem;
