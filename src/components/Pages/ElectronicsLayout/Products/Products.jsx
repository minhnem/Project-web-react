import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import best1 from "../../../../assets/img/best-electronics-1.png";
import best2 from "../../../../assets/img/best-electronics-2.png";
import best3 from "../../../../assets/img/best-electronics-3.png";
import best4 from "../../../../assets/img/best-electronics-4.png";
import best5 from "../../../../assets/img/best-electronics-5.png";
import best6 from "../../../../assets/img/best-electronics-6.png";
import best7 from "../../../../assets/img/best-electronics-3.png";
import best8 from "../../../../assets/img/best-electronics-5.png";
import best9 from "../../../../assets/img/new-electronics-7.png";
import best10 from "../../../../assets/img/new-electronics-8.png";
import best11 from "../../../../assets/img/new-electronics-9.png";
import best12 from "../../../../assets/img/new-electronics-10.png";
import best13 from "../../../../assets/img/new-electronics-11.png";
import best14 from "../../../../assets/img/new-electronics-12.png";
import best15 from "../../../../assets/img/best-electronics-1.png";
import best16 from "../../../../assets/img/best-electronics-4.png";

import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconStar from "../../../../assets/icons/star.png";

const Products = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () =>{
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json()
    setProducts(data);
  }
  
  useEffect(()=>{
      fetchProducts()
  },[])

  const item = [
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
  ];



  return (
    <div className="best-electronics mb-[25px] py-[70px] bg-[#cccccc36]">
      <section className="inner" data-aos="fade-up">
        <section className="best-electronics__row flex justify-between items-center mb-[40px] xl:mb-[70px]">
          <h2 className="product__heading max-w-[240px] lg:max-w-[470px]">
            Our Products
          </h2>
          <div>
            <button className="product__browse btn">Browse All</button>
          </div>
        </section>
        <div className="product__list grid grid-rows-8 grid-cols-2 md:grid-rows-3 md:grid-cols-3 lg:grid-rows-4 lg:grid-cols-4 gap-[20px]">
          {/* item 1 */}
          {item.map((item, index) => (
            <div key={index} className="product__item ">
              <Link to={`/details/${item.id}`}>
                <article className="product bg-[#FFF]">
                  <div className="product__wrap relative">
                    <img src={item.img} alt="" className="product__img" />
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
              </Link>
            </div>
          ))}
        </div>
        <div className="product__row max-w[1170px] h-[4px] bg-[#F1DEB4] mt-[55px]"></div>
      </section>
    </div>
  );
};

export default Products;
