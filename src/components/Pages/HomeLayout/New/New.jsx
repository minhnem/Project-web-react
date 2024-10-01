import React, { useEffect } from "react";
import new1 from "../../../../assets/img/new-1.png";
import new2 from "../../../../assets/img/new-2.png";
import new3 from "../../../../assets/img/new-3.png";
import new4 from "../../../../assets/img/new-2.png";
import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconStar from "../../../../assets/icons/star.png";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const New = () => {
  const[item, setItem] = useState([])

  const fetchProduct = async() => {
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()
    const products = data.filter((product)=> product.isNew === true)
    setItem(products)
  }

  useEffect(()=>{
    fetchProduct()
  },[])

  // useEffect(()=>{
  //   console.log("hihi", item);
  // },[item])

  // const item = [
  //   { img: new1, title: "Modern Black T-Shirt" },
  //   { img: new2, title: "Modern Stylish Shoes" },
  //   { img: new3, title: "Women Hand Bags" },
  //   { img: new2, title: "Modern Stylish Shoes" },
  // ];
  return (
    <div className="new py-[50px] my-[25px] bg-[#cccccc36]">
      <section className="inner" data-aos="fade-up">
        <h2 className="product__heading">Our New products</h2>
        <div className="product__row flex justify-between mb-[70px]">
          <p className="product__desc">
            Browse our most popular products and make your day more beautiful
            and glorious.
          </p>
          <button className="product__browse btn">Browse All</button>
        </div>
        <Swiper
          className="h-[280px] md:h-[450px]"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          breakpoints={{
            // Hiển thị 2 slide trên màn hình nhỏ hơn 768px
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // Hiển thị 3 slide trên màn hình từ 768px đến 1024px
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // Hiển thị 4 slide trên màn hình từ 1024px trở lên
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ 
            delay: 2500,
            disableOnInteraction: true
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {/* item 1 */}
          {item.map((item, index) => (
            <SwiperSlide
              key={index}
              className="product__item flex items-center"
            >
              <article className="product relative bg-[#FFF]">
                <div className="product__wrap">
                  <div>
                    <img src={item.img} alt="" className="product__img" />
                  </div>
                  <p className="px-[10px] py-[6px] bg-[#ff0000f1] text-[0.6rem] lg:text-[0.875rem] text-[#FFF] absolute top-[16px] left-[16px] rounded">
                    New Product
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
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="product__row max-w[1170px] h-[4px] bg-[#F1DEB4] mt-[55px]"></div>
      </section>
    </div>
  );
};

export default New;
