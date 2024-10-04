import React, { useContext, useEffect, useState } from "react";
import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconHeartRed from "../../../../assets/icons/iconHert-red.svg";
import iconStar from "../../../../assets/icons/star.png";
import banner from "../../../../assets/img/Banner.png";
import panelDiscount from "../../../../assets/img/panelDiscount-4.png";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { WishContext } from "../../../../features/WishContextProvider";
import { AuthContext } from "../../../../features/UserContextProvider";
import {toast} from 'react-toastify';

const Hurry = () => {
  const [products, setProducts] = useState([]);

  const { productsWish, dispatch } = useContext(WishContext);
  const { state } = useContext(AuthContext)

  const fetchProucts = async () => {
    const response = await fetch(
      "https://my-data-json-server.vercel.app/products"
    );
    const data = await response.json();
    const listProducts = data.filter((item) => item.isDiscount === true);
    const listProductShow = listProducts.slice(0, 6);
    setProducts(listProductShow);
  };

  useEffect(() => {
    fetchProucts();
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
    <div className="hurry my-[25px] py-[50px] bg-[#cccccc36]">
      <section className="inner" data-aos="fade-up">
        <section className="hurry__row flex justify-between items-center mb-[40px] xl:mb-[70px]">
          <h2 className="product__heading max-w-[240px] lg:max-w-[470px]">
            Hurry, don’t miss out on this offers
          </h2>
          <div>
            <button className="product__browse btn">Browse All</button>
          </div>
        </section>
        <div className="grid lg:grid-rows-2 lg:grid-cols-4 sm:grid-rows-3 sm:grid-cols-3 grid-rows-1 grid-cols-2 gap-[20px] xl:gap-[30px]">
          <figure className="flex justify-center xl:col-span-2 col-span-2">
            <Swiper
              className=""
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide className="flex justify-center">
                <img
                  src={banner}
                  alt=""
                  className="w-[327px] h-[219px] sm:w-[390px] sm:h-[270px] md:w-[490px] md:h-[310px] xl:w-[570px] xl:h-[350px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <img
                  src={panelDiscount}
                  alt=""
                  className="w-[327px] h-[219px] sm:w-[390px] sm:h-[270px] md:w-[490px] md:h-[310px] xl:w-[570px] xl:h-[350px]"
                />
              </SwiperSlide>
            </Swiper>
          </figure>
          {/* item 1 */}
          {products.map((item, index) => (
            <div key={index} className="product__item ">
              <article className="product bg-[#FFF]">
                <Link to={`/details/${item.id}`}>
                  <div className="product__wrap">
                    <div className="relative">
                      <img src={item.img} alt="" className="product__img" />
                      <p className="py-[8px] lg:py-[10px] text-center text-[0.8rem] lg:text-[1.125rem] bg-[#F86624] text-[#FFF] absolute top-[37%] w-full">
                        OUT OF STOCK
                      </p>
                    </div>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hurry;
