import React, { useContext, useEffect } from "react";
import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconStar from "../../../../assets/icons/star.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import iconHeartRed from "../../../../assets/icons/iconHert-red.svg";
import { WishContext } from "../../../../features/WishContextProvider";
import { AuthContext } from "../../../../features/UserContextProvider";
import {toast} from 'react-toastify';

const New = () => {
  const [item, setItem] = useState([]);

  const { productsWish, dispatch } = useContext(WishContext);
  const { state } = useContext(AuthContext)

  const fetchProduct = async () => {
    const response = await fetch(
      "https://my-data-json-server.vercel.app/products"
    );
    const data = await response.json();
    const products = data.filter((product) => product.isNew === true);
    setItem(products);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const hendleWish = (item) => {
    if(state.isAuthenticated){
      if (productsWish.some((product) => product.id === item.id)) {
        dispatch({ type: "Remove_wish", id: item.id });
      } else {
        dispatch({ type: "Add_wish", product: item });
      }
    }else{
      toast.error("Đăng nhập trước khi thêm vào danh sách yêu thích")
    }
  };

  return (
    <div className="new py-[50px] my-[25px] bg-[#cccccc36]">
      <section className="inner" data-aos="fade-up">
        <h2 className="product__heading">Những sản phảm mới của chúng tôi</h2>
        <div className="product__row flex justify-between mb-[10px]">
          <p className="product__desc">
          Khám phá những sản phẩm phổ biến nhất của chúng tôi và biến ngày của bạn trở nên đẹp đẽ và rực rỡ hơn.
          </p>
          <button className="product__browse btn">Xem tất cả</button>
        </div>
        <Swiper
          className="h-[300px] md:h-[450px]"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
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
                <Link to={`/details/${item.id}`}>
                  <div className="product__wrap">
                    <div>
                      <img src={item.img} alt="" className="product__img" />
                    </div>
                    <p className="px-[10px] py-[6px] bg-[#ff0000f1] text-[0.6rem] lg:text-[0.875rem] text-[#FFF] absolute top-[16px] left-[16px] rounded">
                      New Product
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
                      <span className="product-rate__price">$110</span>
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
