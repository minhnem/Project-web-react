import React from "react";
import popular1 from "../../../../assets/img/popular-1.png";
import popular2 from "../../../../assets/img/popular-2.png";
import popular3 from "../../../../assets/img/popular-3.png";
import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconStar from "../../../../assets/icons/star.png";

const Popular = () => {
  const item = [
    { img: popular1, title: "Mid Century Modern T-Shirt" },
    { img: popular2, title: "Mid Century Modern T-Shirt" },
    { img: popular3, title: "Mid Century Modern T-Shirt" },
    { img: popular3, title: "Mid Century Modern T-Shirt" },
    { img: popular1, title: "Mid Century Modern T-Shirt" },
    { img: popular2, title: "Mid Century Modern T-Shirt" },
    { img: popular3, title: "Mid Century Modern T-Shirt" },
    { img: popular3, title: "Mid Century Modern T-Shirt" },
  ];
  return (
    <div className="popular py-[50px] my-[25px] bg-[#cccccc36]">
      <section className="inner" data-aos="fade-up">
        <h2 className="product__heading">Our product products</h2>
        <div className="product__row flex justify-between mb-[70px]">
          <p className="product__desc">
            Browse our most popular products and make your day more beautiful
            and glorious.
          </p>
          <button className="product__browse btn">
            Browse All
          </button>
        </div>
        <div className="product__list grid grid-rows-4 grid-cols-2 md:grid-rows-3 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-4 gap-[20px]">
          {/* item 1 */}
          {item.map((item, index) => (
            <div key={index} className="product__item ">
              <article className="product bg-[#FFF]">
                <div className="product__wrap">
                  <div>
                    <img src={item.img} alt="" className="product__img"/>
                  </div>
                  {/* added to wish list */}
                </div>
                <section className="product__content">
                  <div className="product__row">
                    <span className="product__brand">Men-Cloths</span>
                    <button>
                      <img src={iconHeart} alt="" className="product__icon" />
                    </button>
                  </div>
                  <h3 className="product__title">
                    {item.title}
                  </h3>
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
            </div>
          ))}
        </div>
        <div className="product__row max-w[1170px] h-[4px] bg-[#F1DEB4] mt-[55px]"></div>
      </section>
    </div>
  );
};

export default Popular;
