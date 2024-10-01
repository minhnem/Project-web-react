import React from "react";
import "./hero.scss";
import imghero1 from "../../../../assets/img/electronics-hero.png";

const Hero = () => {
  return (
    <div className="hero-electronics bg-[#F1DEB4] pt-[40px] lg:pt-[80px] pb-[160px]">
      <div className="inner" data-aos="fade-right">
        <section className="grid grid-rows-1 lg:grid-cols-2 md:grid-cols-2 gap-[30px] justify-between">
          <section className="hero-elctronics__content lg:max-w-[600px] mr-auto min-h-full">
            <h1 className="hero-elctronics__heading mt-[34px] mb-[20px] text-[2.5rem] font-[700] leading-[4.25rem] lg:text-[3.5rem]">
              Choose Your Latest Electronics Products
            </h1>
            <p className="hero-elcetronics__desc mb-[34px] text-[1.125rem] font-[400] leading-[1.875rem]">
              The most wanted styles is waiting for you. Find the best styles of
              modern shoes for you. Still, the second option holds promised.
              could make the tagline.
            </p>
            <button className="hero-elcetronics__btn mb-[20px] px-[35px] py-[15px] rounded-[5px] bg-[#005D63] cursor-pointer text-white">
              Explore Product
            </button>
          </section>
          <figure className="hero-electronics__wrap flex items-center justify-center">
            <div className="hero-electronics__img relative">
              <img
                src={imghero1}
                alt="iamge"
                className="hero-electronics__image relative w-[251px] h-[294px] lg:w-[381px] lg:h-[424px] xl:w-[435px] xl:h-[485px] z-[1]"
              />
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default Hero;
