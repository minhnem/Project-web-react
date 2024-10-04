import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconHeart from "../../../../assets/icons/icon-heart.png";
import iconStar from "../../../../assets/icons/star.png";
import { Pagination } from "antd";
import iconHeartRed from "../../../../assets/icons/iconHert-red.svg";
import { WishContext } from "../../../../features/WishContextProvider";
import { AuthContext } from "../../../../features/UserContextProvider";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const { productsWish, dispatch } = useContext(WishContext);
  const { state } = useContext(AuthContext);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://my-data-json-server.vercel.app/products"
    );
    const data = await response.json();
    const listProduct = data.filter((item) => item.category_id === 1);
    setProducts(listProduct);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
              <article className="product bg-[#FFF]">
                <Link to={`/details/${item.id}`}>
                  <div className="product__wrap relative">
                    <img src={item.img} alt="" className="product__img" />
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
