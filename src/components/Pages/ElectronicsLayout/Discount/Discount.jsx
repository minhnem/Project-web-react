import React, { useContext, useEffect, useState } from "react";
import iconCarShipping from "../../../../assets/icons/car-shiping.png";
import iconSupport from "../../../../assets/icons/support.png";
import iconCartOder from "../../../../assets/icons/car-shiping.png";
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

const Discount = () => {
  const [products, setProducts] = useState([]);

  const { productsWish, dispatch } = useContext(WishContext);
  const { state } = useContext(AuthContext);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://my-data-json-server.vercel.app/products"
    );
    const data = await response.json();
    const listProduct = data.filter(
      (item) => item.category_id === 1 && item.isDiscount === true
    );
    setProducts(listProduct);
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
    <div className="best-electronics relative mb-[25px] pt-[350px] sm:pt-[200px] pb-[50px] bg-[#cccccc36]">
      <div className="flex justify-center ">
        <div className="best-electronics__row max-w-[1170px] grid grid-rows-1 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4 gap-[5px] absolute top-[-84px] px-[40px] py-[45px] rounded-[16px] bg-[#FFF]">
          <div className="best-electronics__wrap flex items-center">
            <img src={iconCarShipping} alt="" />
            <div className="best-electronics__inner ml-[5px]">
              <h4 className="text-[1.3125rem] font-[600]">Miễn phí vận chuyển</h4>
              <p className="text-[0.875rem] font-[400]">
                Miễn phí vận chuyển cho tất cả các đơn hàng
              </p>
            </div>
          </div>
          <div className="best-electronics__wrap flex items-center">
            <img src={iconSupport} alt="" />
            <div className="best-electronics__inner ml-[5px]">
              <h4 className="text-[1.3125rem] font-[600]">Hỗ trợ 24/7</h4>
              <p className="text-[0.875rem] font-[400]">
                Hỗ trợ 24 giờ một ngày
              </p>
            </div>
          </div>
          <div className="best-electronics__wrap flex items-center">
            <img src={iconCartOder} alt="" />
            <div className="best-electronics__inner ml-[5px]">
              <h4 className="text-[1.3125rem] font-[600]">Tiền trả lại</h4>
              <p className="text-[0.875rem] font-[400]">
                Đảm bảo trả lại trong vòng 5 ngày
              </p>
            </div>
          </div>
          <div className="best-electronics__wrap flex items-center">
            <img src={iconCartOder} alt="" />
            <div className="best-electronics__inner ml-[5px]">
              <h4 className="text-[1.3125rem] font-[600]">Đặt hàng giảm giá</h4>
              <p className="text-[0.875rem] font-[400]">
                Với mỗi đơn hàng trên $150
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="inner" data-aos="fade-up">
        <section className="best-electronics__row flex justify-between items-center mb-[40px] xl:mb-[70px]">
          <h2 className="product__heading max-w-[240px] lg:max-w-[470px]">
            Những Sản Phẩm Giảm Giá
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
                      -50%
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

export default Discount;
