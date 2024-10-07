import React, { useContext, useEffect, useState } from "react";
import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconStar from "../../../../assets/icons/star.png";
import { Link } from "react-router-dom";

import {
  Navigation,
  Grid,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import iconHeartRed from "../../../../assets/icons/iconHert-red.svg";
import { WishContext } from "../../../../features/WishContextProvider";
import { AuthContext } from "../../../../features/UserContextProvider";
import { toast } from "react-toastify";

const New = () => {
  const [products, setProducts] = useState([]);

  const { productsWish, dispatch } = useContext(WishContext);
  const { state } = useContext(AuthContext);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://my-data-json-server.vercel.app/products"
    );
    const data = await response.json();
    const listProducts = data.filter(
      (item) => item.category_id === 1 && item.isNew === true
    );
    setProducts(listProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const hendleWish = (item) => {
    if (state.isAuthenticated) {
      if (productsWish.some((product) => product.id === item.id)) {
        dispatch({ type: "Remove_wish", id: item.id });
      } else {
        dispatch({ type: "Add_wish", product: item });
      }
    } else {
      toast.error("Đăng nhập trước khi thêm vào danh sách yêu thích");
    }
  };

  return (
    <div className="best-electronics relative mb-[25px] py-[70px] bg-[#cccccc36]">
      <section className="inner" data-aos="fade-up">
        <section className="best-electronics__row flex justify-between items-center mb-[40px] xl:mb-[70px]">
          <h2 className="product__heading max-w-[240px] lg:max-w-[470px]">
            Sản Phẩm Mới
          </h2>
          <div>
            <button className="product__browse btn">Xem tất cả</button>
          </div>
        </section>
        <Swiper
          className="h-[490px] md:h-[750px]"
          modules={[Navigation, Grid, Pagination, Scrollbar, A11y, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: "row",
              },
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              grid: {
                rows: 2,
                fill: "row",
              },
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              grid: {
                rows: 2,
                fill: "row",
              },
              spaceBetween: 20,
            },
          }}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {/* item 1 */}
          {products.map((item, index) => (
            <SwiperSlide key={index} className="product__item flex items-end">
              <article className="product bg-[#FFF]">
                <Link to={`/details/${item.id}`}>
                  <div className="product__wrap relative">
                    <div>
                      <img src={item.img} alt="" className="product__img" />
                    </div>
                    <p className="flex justify-center items-center px-[10px] py-[6px] w-[35px] h-[35px] absolute top-[8px] left-[8px] rounded-full bg-[#ff0000f1] text-[0.6rem] lg:text-[0.875rem] text-[#FFF]">
                      Mới
                    </p>
                    {/* added to wish list */}
                  </div>
                </Link>
                <section className="product__content">
                  <div className="product__row">
                    <span className="product__brand">Men-Cloths</span>
                    <button onClick={() => hendleWish(item)}>
                      <img
                        src={
                          productsWish.some((product) => product.id === item.id) ? iconHeartRed : iconHeart
                        }
                        alt=""
                        className="product__icon"
                      />
                    </button>
                  </div>
                  <Link to={`/details/${item.id}`}>
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
                  </Link>
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
