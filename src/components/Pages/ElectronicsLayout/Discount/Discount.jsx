import React from "react";
import best1 from "../../../../assets/img/best-electronics-1.png";
import best2 from "../../../../assets/img/best-electronics-2.png";
import best3 from "../../../../assets/img/best-electronics-3.png";
import best4 from "../../../../assets/img/best-electronics-4.png";
import best5 from "../../../../assets/img/best-electronics-5.png";
import best6 from "../../../../assets/img/best-electronics-6.png";
import best7 from "../../../../assets/img/best-electronics-3.png";
import best8 from "../../../../assets/img/best-electronics-5.png";

import iconCarShipping from "../../../../assets/icons/car-shiping.png";
import iconSupport from "../../../../assets/icons/support.png";
import iconCartOder from "../../../../assets/icons/car-shiping.png";
import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconStar from "../../../../assets/icons/star.png";
import { Link } from "react-router-dom";

const Discount = () => {
  const item = [
    { id: 25, img: best1, title: "Apple Watch Series 6", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 26, img: best2, title: "iPhone 14 Max Pro", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 27, img: best3, title: "Alarm Clock", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 28, img: best4, title: "Apple Watch Series 5", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 29, img: best5, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 30, img: best6, title: "Headphone", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 31, img: best7, title: "Alarm Clock", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 32, img: best8, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
  ];
  return (
    <div className="best-electronics relative mb-[25px] pt-[350px] sm:pt-[200px] pb-[50px] bg-[#cccccc36]">
      <div className="flex justify-center ">
        <div className="best-electronics__row max-w-[1170px] grid grid-rows-1 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4 gap-[5px] absolute top-[-84px] px-[40px] py-[45px] rounded-[16px] bg-[#FFF]">
          <div className="best-electronics__wrap flex items-center">
            <img src={iconCarShipping} alt="" />
            <div className="best-electronics__inner ml-[5px]">
              <h4 className="text-[1.3125rem] font-[600]">Free Shipping</h4>
              <p className="text-[0.875rem] font-[400]">Free Shipping On All Order</p>
            </div>
          </div>
          <div className="best-electronics__wrap flex items-center">
            <img src={iconSupport} alt="" />
            <div className="best-electronics__inner ml-[5px]">
              <h4 className="text-[1.3125rem] font-[600]">Support 24/7</h4>
              <p className="text-[0.875rem] font-[400]">Support 24 hours a day</p>
            </div>
          </div>
          <div className="best-electronics__wrap flex items-center">
            <img src={iconCartOder} alt="" />
            <div className="best-electronics__inner ml-[5px]">
              <h4 className="text-[1.3125rem] font-[600]">Money return</h4>
              <p className="text-[0.875rem] font-[400]">Back guaramtee under 5 days</p>
            </div>
          </div>
          <div className="best-electronics__wrap flex items-center">
            <img src={iconCartOder} alt="" />
            <div className="best-electronics__inner ml-[5px]">
              <h4 className="text-[1.3125rem] font-[600]">Order Discounts</h4>
              <p className="text-[0.875rem] font-[400]">Onevery order over $150</p>
            </div>
          </div>
        </div>
      </div>
      <section className="inner" data-aos="fade-up">
        <section className="best-electronics__row flex justify-between items-center mb-[40px] xl:mb-[70px]">
          <h2 className="product__heading max-w-[240px] lg:max-w-[470px]">
            Our Best Collection
          </h2>
          <div>
            <button className="product__browse btn">Browse All</button>
          </div>
        </section>
        <div className="product__list grid grid-rows-4 grid-cols-2 md:grid-rows-3 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-4 gap-[20px]">
          {/* item 1 */}
          {item.map((item, index) => (
            <div key={index} className="product__item ">
              <Link to={`/details/${item.id}`}>
                <article className="product bg-[#FFF]">
                  <div className="product__wrap relative">
                    <div>
                      <img src={item.img} alt="" className="product__img" />
                    </div>
                    <p className="flex justify-center items-center px-[10px] py-[6px] w-[35px] h-[35px] absolute top-[8px] left-[8px] rounded-full bg-[#ff0000f1] text-[0.6rem] lg:text-[0.875rem] text-[#FFF]">
                      50%
                    </p>
                    {/* added to wish list */}
                  </div>
                  <section className="product__content">
                    <div className="product__row">
                      <span className="product__brand">Men-Cloths</span>
                      <button>
                        <img src={iconHeart} alt="" className="product__icon" />
                      </button>
                    </div>
                    <h3 className="product__title">{item.title}</h3>
                    <div className="product__row">
                      <div className="product-rate">
                        <img
                          src={iconStar}
                          alt=""
                          className="product-rate__icon"
                        />
                        <span className="product-rate__rate">5.0 (18)</span>
                      </div>
                      <div className="product-rate__price flex ">
                          <span className="mr-[8px] line-through">$210</span>
                          <span className="text-red-600">$110</span>
                      </div>
                    </div>
                  </section>
                </article>
              </Link>
            </div>
          ))}
        </div>
        <div className="product__row max-w[1170px] h-[4px] bg-[#F1DEB4] mt-[55px]"></div>
      </section>
    </div>
  );
};

export default Discount;
