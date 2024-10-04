import React from "react";
import "./profile.scss";
import avatar from "../../../assets/img/avatar.png";
import iconUser from "../../../assets/icons/user.svg";
import iconAdress from "../../../assets/icons/adress.svg";
import arrowleft from "../../../assets/icons/arrow-left.svg"
import iconProfile1 from "../../../assets/icons/iconProfile-1.svg";
import iconProfile2 from "../../../assets/icons/iconProfile-2.svg";
import iconProfile3 from "../../../assets/icons/iconProfile-3.svg";
import iconProfile4 from "../../../assets/icons/iconProfile-4.svg";
import iconProfile5 from "../../../assets/icons/iconProfile-5.svg";

const Profile = () => {
  return (
    <div className="profile bg-[#cccccc36]">
      <div className="inner">
        {/* ====== profile item ====== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          <div className="lg:col-span-1">
            <div className="profile-sidebar">
              <div className="profile-user">
                <img src={avatar} alt="" className="profile-user__avatar" />
                <h1 className="profile-user__name">Tên người dùng</h1>
                <p className="profile-user__email">nam@gmail.com</p>
              </div>
              <div className="profile-menu">
                <h3 className="profile-menu__title">Quản lý tài khoản</h3>
                <ul className="profile-menu__list">
                  <li>
                    <a href="" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src={iconUser} alt="" />
                      </span>
                      Thông tin cá nhân
                    </a>
                  </li>
                  <li>
                    <a href="" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src={iconAdress} alt="" />
                      </span>
                      Địa chỉ
                    </a>
                  </li>
                </ul>

                <h3 className="profile-menu__title">Các mặt hàng của tôi</h3>
                <ul className="profile-menu__list">
                  <li>
                    <a href="" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src={iconProfile1} alt="" />
                      </span>
                      Sắp xếp
                    </a>
                  </li>
                  <li>
                    <a href="" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src={iconProfile2} alt="" />
                      </span>
                      Danh sách yêu thích
                    </a>
                  </li>
                </ul>

                <h3 className="profile-menu__title">Gói đăng ký & kế hoạch</h3>
                <ul className="profile-menu__list">
                  <li>
                    <a href="" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src={iconProfile3} alt="" />
                      </span>
                      Kế hoạch bảo vệ
                    </a>
                  </li>
                </ul>

                <h3 className="profile-menu__title">Dịch vụ khách hàng</h3>
                <ul className="profile-menu__list">
                  <li>
                    <a href="" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src={iconProfile4} alt="" />
                      </span>
                      Trợ giúp
                    </a>
                  </li>
                  <li>
                    <a href="" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src={iconProfile5} alt="" />
                      </span>
                      Điều khoản sử dụng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="profile-info">
              <h1 className="profile-info__title">
                Thông tin cá nhân
              </h1>
              <form action="" className="form">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[30px]">
                  <div className="form-info">
                    <label htmlFor="" className="form-info__label">Họ và tên</label>
                    <div className="form-info__group">
                      <input
                        type="text"
                        placeholder="Họ và tên"
                        className="form-info__input"
                      />
                    </div>
                    <label htmlFor="" className="form-info__label">Số điện thoại</label>
                    <div className="form-info__group">
                      <input
                        type="text"
                        placeholder="Số điện thoại"
                        className="form-info__input"
                      />
                    </div>
                  </div>

                  <div className="form-info">
                  <label htmlFor="" className="form-info__label">Địa chỉ email</label>
                    <div className="form-info__group">
                      <input
                        type="number"
                        className="form-info__input"
                      />
                    </div>
                    <label htmlFor="" className="form-info__label">Mật khẩu</label>
                    <div className="form-info__group">
                      <input
                        type="password"
                        className="form-info__input"
                      />
                    </div>
                  </div>
                </div>

                <div className="form__row">
                  <button className="form__btn form__btn--cancel">Hủy</button>
                  <button className="form__btn form__btn--save">Lưu lại</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ====== có thể bạn cũng thích ====== */}
      </div>
    </div>
  );
};

export default Profile;
