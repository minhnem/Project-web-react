import React from "react";
import "./home.scss";
import Hero from "./Hero/Hero";
import Explore from "./Explore/Explore";
import Popular from "./Popular/Popular";
import New from "./New/New";
import Best from "./Best/Best";
import Hurry from "./Hurry/Hurry";
import Subscribe from "./Subscribe/Subscribe";
import Brand from "./Brand/Brand";
import Learn from "./Learn/Learn"
import iconFire from "../../../assets/icons/fire.png";



const Home = () => {
  return (
    <div className="home">
      {/* ==== Hero ==== */}
      <Hero/>

      {/* =========== Explore ========= */}
      <Explore/>

       {/* ========= Panel Discount ========= */}
       <div className="overflow-hidden w-full ">
        <div className="discount-panel flex my-[37px] h-[90px] bg-[#131717] items-center rotate-[-2deg]">
          <div className="marquee flex">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="discount-panel__wrap flex items-center mx-4"
                >
                  <img
                    src={iconFire}
                    alt="Fire icon"
                    className="discount-panel__icon"
                  />
                  <span className="discount-panel__desc text-white ml-2">
                    GET 50% OFF IN THE BELOW PRODUCT
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>


      {/* =========== Hurry ========= */}
      <Hurry/>

      {/* ======== New ======== */}
      <New/>

      {/* ========= Best ======== */}
      <Best/>

      {/* ========== Popular ========== */}
      <Popular/>

      {/* ========= Brand ========= */}
      <Brand/>

      {/* ========= Learn ========= */}
      <Learn/>

      {/* ========= Subscribe ========= */}
      <Subscribe/>

    {/* ====================================== */}
    </div>
  );
};

export default Home;
