import React, { FC, useEffect } from "react";

import HomePageTheme from "../../component/HomePageTheme/HomePageTheme";
import CarouselImageSlider from "../../component/CarouselImageSlider/CarouselImageSlider";
import SliderBrands from "../../component/SliderBrands/SliderBrands";
import SliderCards from "../../component/PerfumeCardsSlider/PerfumeCardsSlider";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../redux/thunks/cart-thunks";
import ScrollButton from "../../component/ScrollButton/ScrollButton";
import Introduction from "../../component/Introduction/Introduction";
import Specification from "../../component/Specification/Specification";
import AboutUs from "../../component/AboutUs/AboutUs";
import VideoIntroduction from "../../component/VideoIntroduction/VideoIntroduction";
import SendEmail from "../../component/SendEmail/SendEmail";
const HomePage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const perfumesFromLocalStorage: Map<number, number> = new Map(
      JSON.parse(localStorage.getItem("perfumes") as string)
    );
    dispatch(fetchCart(Array.from(perfumesFromLocalStorage.keys())));
  }, []);

  return (
    <div className="HomePage">
      <ScrollButton />
      {/* <CarouselImageSlider /> */}
      <Introduction />
      <Specification />
      <SliderBrands />
      <HomePageTheme />
      <AboutUs />
      <VideoIntroduction />
      <SliderCards />
      <SendEmail />
    </div>
  );
};

export default HomePage;
