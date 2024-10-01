import React from "react";
import best1 from "../../../../assets/img/best-electronics-1.png";
import best2 from "../../../../assets/img/best-electronics-2.png";
import best3 from "../../../../assets/img/best-electronics-3.png";
import best4 from "../../../../assets/img/best-electronics-4.png";
import best5 from "../../../../assets/img/best-electronics-5.png";
import best6 from "../../../../assets/img/best-electronics-6.png";
import best7 from "../../../../assets/img/best-electronics-3.png";
import best8 from "../../../../assets/img/best-electronics-5.png";

import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconStar from "../../../../assets/icons/star.png";
import { Link } from "react-router-dom";

const New = () => {
  const item = [
    { id: 17, img: best1, title: "Apple Watch Series 6", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 18, img: best2, title: "iPhone 14 Max Pro", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 19, img: best3, title: "Alarm Clock", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 20, img: best4, title: "Apple Watch Series 5", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 21, img: best5, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 22, img: best6, title: "Headphone", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 23, img: best7, title: "Alarm Clock", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 24, img: best8, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
  ];
  return (
    <div className="best-electronics relative mb-[25px] py-[70px] bg-[#cccccc36]">
      <section className="inner" data-aos="fade-up">
        <section className="best-electronics__row flex justify-between items-center mb-[40px] xl:mb-[70px]">
          <h2 className="product__heading max-w-[240px] lg:max-w-[470px]">
            New Arrivals
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
                      New
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
                      <span className="product-rate__price">$110</span>
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

export default New;
