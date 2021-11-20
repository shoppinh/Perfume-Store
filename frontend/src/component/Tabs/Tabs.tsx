import React, { useState, ReactElement, useEffect } from "react";
import "./style.css";
import Tab from "../Tab/Tab";
import { Perfume } from "../../types/types";
import RequestService from "../../utils/request-service";
import { AxiosPromise } from "axios";
const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const [data, setData] = useState<Perfume[]>([]);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  let num: number = 8;
  const getPerfumeNewest = (): AxiosPromise<any> => {
    const response = RequestService.get("/perfumes/get-newest-perfumes/" + num);
    return response;
  };

  const getPerfumePopular = (): AxiosPromise<any> => {
    const response = RequestService.get("/perfumes/most-popular/" + num);
    return response;
  };

  const getPerfumeStar = (): AxiosPromise<any> => {
    const response = RequestService.get("/perfumes/most-star/" + num);
    return response;
  };
  useEffect(() => {
    const getDataAsync = async () => {
      if (toggleState === 1) {
        setData((await getPerfumePopular()).data);
      } else if (toggleState === 2) {
        setData((await getPerfumeNewest()).data);
      } else {
        setData((await getPerfumeStar()).data);
      }
    };
    getDataAsync();
  }, [toggleState]);

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Popular
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          New Arrival
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Top Rated
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Tab index={1} productList={data} />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Tab index={2} productList={data} />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Tab index={3} productList={data} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
