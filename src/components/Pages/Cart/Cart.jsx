import React, { useContext, useEffect } from "react";
import "./cart.scss";
import arrowRight from "../../../assets/icons/arrowRight.svg";
import iconDelete from "../../../assets/icons/delete.svg";
import heart from "../../../assets/icons/heart-cart.svg";
import iconUp from "../../../assets/icons/up.svg";
import iconDown from "../../../assets/icons/down.svg";
import arrowLeft from "../../../assets/icons/arrow-left.svg";
import { CartContext } from "../../../features/ContextProvider";
import { useLocation, Link } from "react-router-dom";


const Cart = () => {
  const {cart, dispatch} = useContext(CartContext)
  
  const totalProduct = cart.length
  const totalPrice = cart.reduce((sum, product) => sum + (product.discount * product.quantity) ,0)
  const totalPriceShip = cart.reduce((sum,product) => sum + product.priceShip ,0)
  const total = totalPrice + totalPriceShip

  const location = useLocation();
  const backPage =  location.state?.from || "/";

  return (
    <div className="cart bg-[#cccccc36] py-[70px]">
      <div className="inner">
        {/* ==== Breadcrumbs ==== */}
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item">
            <a href="" className="breadcrumbs__link text-[#9E9DA8]">
              Trang chủ
              <img src={arrowRight} alt="" className="breadcrumbs__icon" />
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a href="" className="breadcrumbs__link text-black">
              Giỏ Hàng
              <img src={arrowRight} alt="" className="breadcrumbs__icon" />
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a href="" className="breadcrumbs__link text-[#9E9DA8]">
              Thanh toán
              <img src={arrowRight} alt="" className="breadcrumbs__icon" />
            </a>
          </li>
        </ul>

        {/* ====== cart item ====== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          <div className="lg:col-span-2">
            <div className="cart-info">
              <div className="cart-info__list">
                {cart.map((product,index)=>(
                    <div key={index} className="cart-item">
                    <a href="">
                      <img src={product.img} alt="" className="cart-item__thumb" />
                    </a>
                    <div className="cart-item__content grid ">
                      <div className="cart-item__content-left">
                        <h3 className="cart-item__title">
                          Corporate Office Shoes
                        </h3>
                        <p className="cart-item__price">${product.discount}</p>
                        <div className="cart-item__ctrl">
                          <div className="cart-item__input">
                            <button className="cart-item__input-btn"
                              onClick={() => dispatch({type: "Decrease", id: product.id})}
                            >
                              <img src={iconDown} alt="" />
                            </button>
                            <span className="cart-item__input-qty">{product.quantity}</span>
                            <button className="cart-item__input-btn"
                              onClick={() => dispatch({type: "Increase", id: product.id})}
                            >
                              <img src={iconUp} alt="" />
                            </button>
                          </div>
                        </div>
                      </div>
  
                      <div className="cart-item__content-right">
                        <p className="cart-item__total-price">${product.discount}</p>
                        <div className="cart-item__ctrl">
                          <button className="cart-item__ctrl-btn">
                            <img src={heart} alt="" />
                            Lưu lại
                          </button>
                          <button className="cart-item__ctrl-btn"
                            onClick={()=> dispatch({type: "Remove", id: product.id})}
                          >
                            <img src={iconDelete} alt="" />
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              
              </div>

              <div className="mt-[30px]">
                <Link to={backPage} className="cart-info__link">
                  <img src={arrowLeft} alt="" className="cart-info__icon" />
                  Tiếp tục mua sắm
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="cart-info w-full">
              <div className="cart-info__row">
                <span className="cart-info__label">Tổng sản phẩm</span>
                <span className="cart-info__total-price">{totalProduct}</span>
              </div>
              <div className="cart-info__row">
                <span className="cart-info__label">Tổng giá</span>
                <span className="cart-info__total-price">${totalPrice}</span>
              </div>
              <div className="cart-info__row cart-info__row--border">
                <span className="cart-info__label">Tổng phí vận chuyển</span>
                <span className="cart-info__total-price">${totalPriceShip}</span>
              </div>
              <div className="cart-info__row">
                <span className="cart-info__label mt-[16px]">Thành tiền</span>
                <span className="cart-info__total-price">${total}</span>
              </div>

              <button className="cart-info__btn">Đặt Hàng</button>
            </div>
          </div>
        </div>

        {/* ====== có thể bạn cũng thích ====== */}

      </div>
    </div>
  );
};

export default Cart;
