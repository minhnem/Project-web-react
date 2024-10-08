import React, { useContext, useState } from "react";
import "./header.scss";
import { Col, Row } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AlignLeftOutlined, CloseOutlined } from "@ant-design/icons";
import logo from "../../../assets/img/Logo.png";
import search from "../../../assets/icons/icon-search.png";
import shopping from "../../../assets/icons/icon-shopping.png";
import person from "../../../assets/icons/icon-person.png";
import heart from "../../../assets/icons/icon-heart-white.png";
import arrow from "../../../assets/icons/arrow.png";
import { CartContext } from "../../../features/ContextProvider";
import { AuthContext } from "../../../features/UserContextProvider";
import { BiLogOut } from "react-icons/bi";
import { FaHouseUser } from "react-icons/fa";
import {toast} from 'react-toastify';
import { WishContext } from "../../../features/WishContextProvider";

const Header = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [isShow, setisShow] = useState(false);
  const handleOpen = () => {
    setisOpenMenu(!isOpenMenu);
    setisShow(!isShow);
  };

  const { cart } = useContext(CartContext);
  const { state, dispatch } = useContext(AuthContext);
  const { productsWish } = useContext(WishContext)
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user")
    dispatch({ type: "LOGOUT" });
    toast.success("Đăng xuất thành công.")
  }

  return (
    <>
      <div className="header px-[24px]  pt-[28px] bg-[#005D63] sticky top-0 z-[9]">
        <div className="header__container">
          <Row className="header__content sm:flex sm:justify-between sm:w-full">
            <Col xs={10} lg={4} className="header__left">
              <Row className="mt-[0.31rem]">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </Row>
            </Col>
            <Col span={15} className="header__center hidden lg:block">
              <Row>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Tìm kiếm những thứ bạn cần"
                    className="h-[44px]] xl:w-[700px] lg:w-[600px] pl-[10px] rounded-l-lg outline-none"
                  />
                  <img
                    src={search}
                    alt="icon-search"
                    className="rounded-r-lg"
                  />
                </div>
              </Row>

              {/*=================== Navbar ================== */}
              <Row className="nav__list mt-[28px] relative">
                <Col className="nav-page">
                  <Link to="/" className="nav-page__menu">
                    Trang chủ
                  </Link>
                </Col>
                <Col className="nav-page nav-page__category pb-[28px]">
                  <a href="#" className="nav-page__menu">
                    Danh mục
                    <img src={arrow} alt="icon-arrow" className="ml-[6px]" />
                  </a>

                  {/* dropdowwn-menu */}
                  <div className="nav-page__list absolute top-[55px] w-[210px] bg-[#005D63]">
                    <Col>
                      <Link to="/electronics" className="item-page__item">
                        ĐIện tử
                      </Link>
                    </Col>
                  </div>
                </Col>
                <Col className="nav-page">
                  <a href="#" className="nav-page__menu">
                    Thương hiệu
                  </a>
                </Col>
                <Col className="nav-page">
                  <a href="#" className="nav-page__menu">
                    Sản phẩm
                  </a>
                </Col>
                <Col className="nav-page">
                  <a href="#" className="nav-page__menu">
                    Giới thiệu
                  </a>
                </Col>
              </Row>
            </Col>
            <Col xs={14} lg={5} className="header__right">
              {state.isAuthenticated ? (
                <Row className="flex justify-end flex-nowrap pt-[10px]">
                  <Link className="dropdown-info relative">
                    <img src={person} alt="icon-user" />
                    <div className="dropdown-act absolute w-[149px] rounded-[5px] top-[38px] bg-white">
                      <Link to={"/profile"} className="flex gap-[5px] items-center px-[18px] py-[11px] border-b-[1px] text-[1rem] font-[600] text-[#005D63]">
                        <FaHouseUser /> Tài khoản
                      </Link>
                      <Link
                        to={"/"}
                        className="flex gap-[5px] items-center px-[18px] py-[11px] text-[1rem] font-[600] text-[#005D63]"
                        onClick={() => handleLogout()}
                      >
                        <BiLogOut /> Đăng xuất
                      </Link>
                    </div>
                  </Link>
                  <Link to={"/wish"} className="flex ml-[20px]">
                    <img src={heart} alt="icon-heart" className="mr-[4px]" />
                    <span className="quantity">{productsWish.length}</span>
                  </Link>
                  <Link
                    to={"/cart"}
                    state={{ from: location.pathname }}
                    className="flex ml-[18px]"
                  >
                    <img
                      src={shopping}
                      alt="icon-shopping"
                      className="mr-[4px]"
                    />
                    <span className="quantity">{cart.length}</span>
                  </Link>
                </Row>
              ) : (
                <div className="flex gap-[5px] justify-end">
                  <Link
                    to={"/Signup"}
                    className="px-[18px] py-[11px] rounded-[8px] text-[1rem] font-[600] text-[#005D63] bg-white"
                  >
                    Đăng ký
                  </Link>
                  <Link
                    to={"/Login"}
                    className="px-[10px] py-[11px] rounded-[8px] text-[1rem] font-[600] text-[#005D63] bg-[#FFD44D]"
                  >
                    Đăng nhập
                  </Link>
                </div>
              )}
            </Col>

            {/* ================== menu mobile ================ */}
            <div className="flex items-center justify-between w-full mt-[24px] pb-[28px] lg:hidden">
              <button className="text-white text-[1rem]" onClick={handleOpen}>
                {isOpenMenu ? (
                  <CloseOutlined className="pr-[5px]" />
                ) : (
                  <AlignLeftOutlined className="pr-[5px]" />
                )}
                Menu
              </button>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Tìm kiếm những thứ bạn cần"
                  className="h-[44px]] w-[170px] pl-[10px] outline-none"
                />
                <img src={search} alt="icon-search" className="rounded-r-lg" />
              </div>
            </div>

            {/* ================ dropdown menu mobile ============== */}
            <div
              className={isShow ? "dropdown__menu--active" : "dropdown__menu"}
            >
              <div className="lg:hidden">
                <Col className="nav__list px-[24px] pb-[28px]">
                  <Col className="nav-page">
                    <Link
                      to="/"
                      className="nav-page__menu nav-page__menu--mobile justify-between"
                    >
                      Trang chủ
                    </Link>
                  </Col>
                  <Col className="nav-page nav-page__category">
                    <a
                      href="#"
                      className="nav-page__menu nav-page__menu--mobile justify-between"
                    >
                      Danh mục
                      <img src={arrow} alt="icon-arrow" className="ml-[6px]" />
                    </a>

                    {/* dropdowwn-menu */}
                    <div className="nav-page__list w-fulln">
                      <Col>
                        <Link to="/electronics" className="item-page__item text-[#005D63]">
                          Điện tử
                        </Link>
                      </Col>
                    </div>
                  </Col>
                  <Col className="nav-page">
                    <a
                      href="#"
                      className="nav-page__menu nav-page__menu--mobile justify-between"
                    >
                      Thương hiệu
                      <img src={arrow} alt="icon-arrow" className="ml-[6px]" />
                    </a>
                  </Col>
                  <Col className="nav-page">
                    <a
                      href="#"
                      className="nav-page__menu nav-page__menu--mobile justify-between"
                    >
                      Sản phẩm
                      <img src={arrow} alt="icon-arrow" className="ml-[6px]" />
                    </a>
                  </Col>
                  <Col className="nav-page">
                    <a
                      href="#"
                      className="nav-page__menu nav-page__menu--mobile justify-between"
                    >
                      Giới thiệu
                      <img src={arrow} alt="icon-arrow" className="ml-[6px]" />
                    </a>
                  </Col>
                </Col>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Header;
