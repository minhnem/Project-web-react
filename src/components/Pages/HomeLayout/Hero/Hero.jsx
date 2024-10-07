import React from 'react'
import imghero1 from "../../../../assets/img/img-hero.png";
import imghero2 from "../../../../assets/img/img-hero-2.png";
import heroshadow from "../../../../assets/img/img-hero-shadow.png";

const Hero = () => {
  return (
    <div className='hero bg-[#F1DEB4]' >
      <div className="inner" data-aos="fade-right">
          <section className="grid grid-rows-1 lg:grid-cols-2 md:grid-cols-2 py-[70px] mb-[25px] gap-[30px] justify-between">
            <section className="hero__content lg:max-w-[470px] mr-auto min-h-full">
              <h1 className="hero__heading mt-[34px] mb-[20px] text-[2.5rem] font-[700] leading-[4.25rem] lg:text-[3.7rem]">
              Tìm kiếm những kiểu dáng giày hiện đại tốt nhất
              </h1>
              <p className="hero__desc mb-[34px] text-[1.125rem] font-[400] leading-[1.875rem]">
              Những kiểu dáng được săn đón nhất đang chờ bạn. Tìm ngay các mẫu giày hiện đại phù hợp với bạn.
              </p>
              <button className="hero__btn px-[35px] py-[15px] rounded-[5px] bg-[#005D63] cursor-pointer text-white">Explore Product</button>
            </section>
            <figure className="hero__wrap flex items-center justify-center">
              <div className="relative w-[306px] lg:w-[500px] xl:w-[570px]">
                <img
                  src={imghero1}
                  alt="iamge"
                  className="hero__img--rotate relative w-[251px] h-[294px] lg:w-[381px] lg:h-[424px] xl:w-[470px] xl:h-[550px]"
                />
                <img src={imghero2} alt="iamge" className="hero__img--start absolute top-[100px] left-[-26px] lg:left-[-50px] w-[53px] h-[53px] lg:w-[100px] lg:h-[100px]"/>
                <img
                  src={heroshadow}
                  alt="iamge"
                  className="hero__img--shadow w-[304px] h-[236px] lg:w-[462px] lg:h-[366px]  xl:w-[570px] xl:h-[442px] overflow-hidden absolute bottom-0"
                />
              </div>
            </figure>
          </section>
          <div className="hero__act flex gap-[10px] pb-[70px]">
            <div className="bg-[#131717] w-[30px] h-[3px]"></div>
            <div className="bg-[#fff] w-[30px] h-[3px]"></div>
            <div className="bg-[#fff] w-[30px] h-[3px]"></div>
          </div>
        </div>
    </div>
  )
}

export default Hero
