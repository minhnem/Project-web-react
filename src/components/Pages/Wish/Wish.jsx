import React, { useContext } from "react";
import "./wish.scss"
import arrowRight from "../../../assets/icons/arrowRight.svg";
import iconDelete from "../../../assets/icons/delete.svg";
import heart from "../../../assets/icons/iconHert-red.svg";
import iconUp from "../../../assets/icons/up.svg";
import iconDown from "../../../assets/icons/down.svg";
import arrowLeft from "../../../assets/icons/arrow-left.svg";
import { useLocation, Link } from "react-router-dom";
import { WishContext } from "../../../features/WishContextProvider";


const Wish = () => {
    const {productsWish, dispatch} = useContext(WishContext)
    const totalProduct = productsWish.length
    const totalPrice = productsWish.reduce((sum, product) => sum + (product.discount * product.quantity) ,0)
    const totalPriceShip = productsWish.reduce((sum,product) => sum + product.priceShip ,0)
    const total = totalPrice + totalPriceShip
  
    const location = useLocation();
    const backPage =  location.state?.from || "/";
    
    return (
      <div className="wish bg-[#cccccc36] py-[70px]">
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
                Sản phẩm yêu thích
                <img src={arrowRight} alt="" className="breadcrumbs__icon" />
              </a>
            </li>
          </ul>
  
          {/* ====== wish item ====== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
            <div className="lg:col-span-2">
              <div className="wish-info">
                <div className="wish-info__list">
                  {productsWish.map((product,index)=>(
                      <div key={index} className="wish-item">
                      <a href="">
                        <img src={product.img} alt="" className="wish-item__thumb" />
                      </a>
                      <div className="wish-item__content grid ">
                        <div className="wish-item__content-left">
                          <h3 className="wish-item__title">
                            Corporate Office Shoes
                          </h3>
                          <p className="wish-item__price">${product.discount}</p>
                          <div className="wish-item__ctrl">
                            <div className="wish-item__input">
                              <button className="wish-item__input-btn"
                                onClick={() => dispatch({type: "Decrease_wish", id: product.id})}
                              >
                                <img src={iconDown} alt="" />
                              </button>
                              <span className="wish-item__input-qty">{product.quantity}</span>
                              <button className="wish-item__input-btn"
                                onClick={() => dispatch({type: "Increase_wish", id: product.id})}
                              >
                                <img src={iconUp} alt="" />
                              </button>
                            </div>
                          </div>
                        </div>
    
                        <div className="wish-item__content-right">
                          <p className="wish-item__total-price">${product.discount}</p>
                          <div className="wish-item__ctrl">
                            <button className="wish-item__ctrl-btn">
                              <img src={heart} alt="" />
                              Lưu lại
                            </button>
                            <button className="wish-item__ctrl-btn"
                              onClick={()=> dispatch({type: "Remove_wish", id: product.id})}
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
}

export default Wish
