import React, { useContext, useEffect } from "react";
import "./details.scss";
import imgdetails from "../../../assets/img/details.png";
import iconStar from "../../../assets/icons/star.png";
import iconStars from "../../../assets/icons/stars.png";
import iconStarsDark from "../../../assets/icons/stars-dark.png";

//import best15 from "../../../assets/img/best-electronics-1.png";
import best1 from "../../../assets/img/best-electronics-1.png";
import best2 from "../../../assets/img/best-electronics-2.png";
import best3 from "../../../assets/img/best-electronics-3.png";
import best4 from "../../../assets/img/best-electronics-4.png";
import best5 from "../../../assets/img/best-electronics-5.png";
import best6 from "../../../assets/img/best-electronics-6.png";
import best7 from "../../../assets/img/best-electronics-3.png";
import best8 from "../../../assets/img/best-electronics-5.png";
import best9 from "../../../assets/img/new-electronics-7.png";
import best10 from "../../../assets/img/new-electronics-8.png";
import best11 from "../../../assets/img/new-electronics-9.png";
import best12 from "../../../assets/img/new-electronics-10.png";
import best13 from "../../../assets/img/new-electronics-11.png";
import best14 from "../../../assets/img/new-electronics-12.png";
import best15 from "../../../assets/img/best-electronics-1.png";
import best16 from "../../../assets/img/best-electronics-4.png";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../../features/ContextProvider";
import { AuthContext } from "../../../features/UserContextProvider";


const Details = () => {

  const productData = [
    { id: 1, img: best1, title: "Apple Watch Series 6", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10},
    { id: 2, img: best2, title: "iPhone 14 Max Pro", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 3, img: best3, title: "Đồng Hồ Báo Thức", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 4, img: best4, title: "Apple Watch Series 5", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 5, img: best5, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 6, img: best6, title: "Tai Nghe", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 7, img: best7, title: "Đồng Hồ Báo Thức", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 8, img: best8, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 9, img: best9, title: "Apple Watch Series 6", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 10, img: best10, title: "iPhone 14 Max Pro", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 11, img: best11, title: "Đồng Hồ Báo Thức", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 12, img: best12, title: "Apple Watch Series 5", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 13, img: best13, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 14, img: best14, title: "Headphone", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 15, img: best15, title: "Đồng Hồ Báo Thức", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 16, img: best16, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 17, img: best1, title: "Apple Watch Series 6", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 18, img: best2, title: "iPhone 14 Max Pro", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 19, img: best3, title: "Alarm Clock", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 20, img: best4, title: "Apple Watch Series 5", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 21, img: best5, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 22, img: best6, title: "Headphone", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 23, img: best7, title: "Alarm Clock", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 24, img: best8, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 25, img: best1, title: "Apple Watch Series 6", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 26, img: best2, title: "iPhone 14 Max Pro", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 27, img: best3, title: "Alarm Clock", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 28, img: best4, title: "Apple Watch Series 5", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 29, img: best5, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 30, img: best6, title: "Headphone", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 31, img: best7, title: "Alarm Clock", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
    { id: 32, img: best8, title: "Normal Watch", rate: 18, price: 210, discount: 110, quantity: 1, priceShip: 10 },
  ];

  const {id} = useParams()

  const product = productData.find(item=>item.id.toString() === id)
  const {dispatch} = useContext(CartContext)
  const {state} = useContext(AuthContext)
  const navigate = useNavigate()

  const authenticate = () => { 
    if(state.isAuthenticated === false){
      navigate("/Login")
    }else {     
      dispatch({type: "Add", product: product})
    }
  }

  return (
    <div className="details py-0 md:py-[70px] bg-[#cccccc36]">
      <div className="inner">
        <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:gap-[30px] xl:gap-[100px]">
          <figure className="details__wrap">
            <img src={product.img} alt="" />
          </figure>
          <div className="details-infor">
            <span className="details-infor__brand">Women-Cloths</span>
            <h3 className="details-infor__heading">{product.title}</h3>
            <div className="details-infor__row">
              <span className="details-infor__price">${product.price}</span>
              <span className="details-infor__price--discount">${product.discount}</span>
            </div>
            <div className="details-infor__row mt-[13px] mb-[20px]">
              <img src={iconStar} alt="" />
              <span className="details-infor__price--rate">5.0 (37)</span>
            </div>
            <div className="details-infor__row mb-[20px]">
              <p className="details-infor__title">Màu sắc:</p>
              <div className="details-infor__row">
                <button className="details-infor__color bg-[#90A338]"></button>
                <button className="details-infor__color bg-[#2A2A2A]"></button>
                <button className="details-infor__color bg-[#EF8195]"></button>
                <button className="details-infor__color bg-[#FFF]"></button>
              </div>
            </div>
            <div className="details-infor__row mb-[20px]">
              <p className="details-infor__title">Kích cỡ:</p>
              <div className="details-infor__row">
                <button className="details-infor__size">XL</button>
                <button className="details-infor__size">L</button>
                <button className="details-infor__size">S</button>
                <button className="details-infor__size">XS</button>
              </div>
            </div>

            <div className="details-infor__row mb-[50px]">
              <p className="details-infor__title">Số lượng:</p>
              <div className="details-infor__row">
                <button className="details-infor__up">-</button>
                <span className="details-infor__quantity">{product.quantity}</span>
                <button className="details-infor__down">+</button>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-2 md:grid-rows-2 md:grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-[20px]">
              <button className="w-full py-[15px] bg-[#005D63] text-[1.125rem] text-[#fff] font-[600] rounded-[8px]" 
                onClick={() => {
                  authenticate()
                }}
              >
                Thêm Vào Giỏ Hàng
              </button>
              <button className="w-full py-[15px] bg-[#FFD44D] text-[1.125rem] font-[600] rounded-[8px]" onClick={authenticate}>
                Mua Ngay
              </button>
            </div>
          </div>
        </div>

        {/* ====== row chứa styles sản phẩm ====== */}
        <figure className="details__row--img">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </figure>
        <div className="details__about max-w-[570px] mt-[60px]">
          <h4 className="mb-[20px] text-[1.7rem] font-[600] leading-[1.875rem]">Thông tin về sản phẩm</h4>
          <p className="details__desc mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nostrud ipsum consectetur sed do.
          </p>
          <ul className="list-disc mb-[20px] pl-[30px]">
            <li className="details__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li className="details__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li className="details__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>
          <p className="details__desc">
            <span className="mr-[5px] text-black font-[600]">Ghi chú:</span>Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, nostrud ipsum consectetur sed do.
          </p>
        </div>

        <div className="details-inner grid  grid-rows-2 grid-cols-1 xl:grid-rows-1 xl:grid-cols-2 xl:gap-[60px] mt-[45px]">
          <div className="details-inner__rate mb-[25px]">
            <h4 className="text-[1.7rem] font-[600] leading-[1.875rem] mb-[5px]">Đánh giá của khách hàng</h4>
            <div>
              <div>
                <img src={iconStars} alt=""/>
                <p className="details__desc my-[10px]">77 Reviews</p>
              </div>
              <div className="grid grid-rows-1 grid-cols-3 gap-[15px]">
                <p className="details-inner__desc details__desc">
                  5 sao(<span>13</span>)
                </p>
                <p className="details-inner__desc details__desc">
                  4 sao(<span>9</span>)
                </p>
                <p className="details-inner__desc details__desc">
                  3 sao(<span>0</span>)
                </p>
                <p className="details-inner__desc details__desc">
                  2 sao(<span>0</span>)
                </p>
                <p className="details-inner__desc details__desc">
                  1 sao(<span>0</span>)
                </p>
              </div>
            </div>
          </div>

          <div className="details-inner__write">
            <h4 className="mb-[5px] text-[1.7rem] font-[600] leading-[1.875rem]">Viết đánh giá</h4>
            <img src={iconStarsDark} alt="" />
            <p className="details__desc font-bold my-[10px]">Nhập tiêu đề</p>
            <input type="text" placeholder="Viết tiêu đề đánh giá" className="w-full h-[52px] pl-[5px] outline-none border-[2px]"/>
            <p className="details__desc font-bold my-[10px]">Viết đánh giá</p>
            <input type="text" placeholder="Viết nội dung đánh giá" className="w-full h-[52px] pl-[5px] outline-none border-[2px]"/>
            <button className="btn py-[15px] px-[35px] bg-[#005D63] mt-[20px] text-[#fff] rounded-[8px]">Gửi Đánh Giá</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
