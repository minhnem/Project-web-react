import React from "react";
import best1 from "../../../../assets/img/best-1.png";
import hurry1 from "../../../../assets/img/hurry-1.png";
import hurry2 from "../../../../assets/img/hurry-2.png";
import hurry3 from "../../../../assets/img/hurry-3.png";
import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconStar from "../../../../assets/icons/star.png";
import banner from "../../../../assets/img/Banner.png";
const Hurry = () => {
  const item = [
    { img: best1, title: "Mid Century Modern T-Shirt" },
    { img: hurry1, title: "Mid Century Modern T-Shirt" },
    { img: hurry2, title: "Mid Century Modern T-Shirt" },
    { img: hurry3, title: "Mid Century Modern T-Shirt" },
    { img: best1, title: "Mid Century Modern T-Shirt" },
    { img: hurry2, title: "Mid Century Modern T-Shirt" },
  ];
  return (
    <div className="hurry my-[25px] py-[50px] bg-[#cccccc36]">
      <section className="inner" data-aos="fade-up">
        <section className="hurry__row flex justify-between items-center mb-[40px] xl:mb-[70px]">
          <h2 className="product__heading max-w-[240px] lg:max-w-[470px]">
            Hurry, don’t miss out on this offers
          </h2>
          <div>
            <button className="product__browse btn">
              Browse All
            </button>
          </div>
        </section>
        <div className="grid lg:grid-rows-2 lg:grid-cols-4 sm:grid-rows-3 sm:grid-cols-3 grid-rows-1 grid-cols-2 gap-[20px] xl:gap-[30px]">
          <figure className="flex justify-center xl:col-span-2 col-span-2">
            <img
              src={banner}
              alt=""
              className="w-[327px] h-[219px] sm:w-[390px] sm:h-[270px] md:w-[490px] md:h-[310px] xl:w-[570px] xl:h-[350px]"
            />
          </figure>
          {/* item 1 */}
          {item.map((item, index) => (
            <div key={index} className="product__item ">
              <article className="product bg-[#FFF]">
                <div className="product__wrap">
                  <div className="relative">
                    <img src={item.img} alt="" className="product__img" />
                    <p className="py-[8px] lg:py-[10px] text-center text-[0.8rem] lg:text-[1.125rem] bg-[#F86624] text-[#FFF] absolute top-[37%] w-full">
                      OUT OF STOCK
                    </p>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hurry;
