import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconStar from "../../../../assets/icons/star.png";
import { Pagination } from "antd";

const Products = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;
  // Chia dữ liệu theo trang
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const fetchProducts = async () =>{
    const response = await fetch('https://my-data-json-server.vercel.app/products')
    const data = await response.json()
    const listProduct = data.filter((item)=> item.category_id === 1)
    setProducts(listProduct);
  }
  
  useEffect(()=>{
    fetchProducts()
  },[])


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
          {currentProducts.map((item, index) => (
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
        <Pagination
          className="flex justify-center mt-6"
          current={currentPage}
          pageSize={pageSize}
          total={products.length}
          onChange={handlePageChange}
        />
        <div className="product__row max-w[1170px] h-[4px] bg-[#F1DEB4] mt-[55px]"></div>
      </section>
    </div>
  );
};

export default Products;
