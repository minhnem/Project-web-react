import React from 'react'
import best1 from "../../../../assets/img/best-1.png";
import best2 from "../../../../assets/img/best-2.png";
import best3 from "../../../../assets/img/best-3.png";
import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconStar from "../../../../assets/icons/star.png";

const Best = () => {
  const item = [
    { img: best1, title: "Modern Black T-Shirt" },
    { img: best2, title: "Modern Stylish Shoes" },
    { img: best3, title: "Women Hand Bags" },
    { img: best2, title: "Modern Stylish Shoes" },
  ];
  return (
    <div className="best py-[50px] my-[25px] bg-[#cccccc36]">
      <section className="inner" data-aos="fade-up">
        <h2 className="product__heading">Meet Our Best products</h2>
        <div className="product__row flex justify-between mb-[70px]">
          <p className="product__desc">
            Browse our most popular products and make your day more beautiful
            and glorious.
          </p>
          <button className="product__browse btn">Browse All</button>
        </div>
        <div className="product__list grid grid-rows-2 grid-cols-2 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-4 gap-[20px]">
          {/* item 1 */}
          {item.map((item, index) => (
            <div key={index} className="product__item ">
              <article className="product relative bg-[#FFF]">
                <div className="product__wrap">
                  <div>
                    <img src={item.img} alt="" className="product__img" />
                  </div>
                  <p className="px-[10px] py-[6px] bg-[#131717] text-[0.6rem] lg:text-[0.875rem] text-[#FFF] absolute top-[16px] left-[16px] rounded">
                    Best Seller
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
            </div>
          ))}
        </div>
        <div className="product__row max-w[1170px] h-[4px] bg-[#F1DEB4] mt-[55px]"></div>
      </section>
    </div>
  )
}

export default Best
