import React, { useContext, useRef, useState } from "react";
import "../../auth/auth.scss";
import logo from "../../../../assets/img/Logo2.png";
import iconEmail from "../../../../assets/icons/icon-email.svg";
import iconPassword from "../../../../assets/icons/icon-password.svg";
import iconGmail from "../../../../assets/icons/icon-gmail.svg";
import intro from "../../../../assets/icons/intro.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../features/UserContextProvider";
import { ToastContainer, toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const { dispatch } = useContext(AuthContext);

  // kiểm tra tài khoản người dùng hợp lệ hay không
  const checkUsers = async (email, password) => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    return data.some(
      (user) => user.email === email && user.password === password
    );
  };

  let validateErrors = {};

  const validateEmail = () => {
    if (/[^a-zA-Z0-9@._-]/.test(inputEmailRef.current.value)) {
      validateErrors.email =
        "Email không được để trống hoặc chứa ký tự đặc biệt";
    } else if (!/\S+@\S+\.\S+/.test(inputEmailRef.current.value)) {
      validateErrors.email = "Email không hợp lệ";
    } else {
      delete validateErrors.email;
    }
  };

  const validatePassword = () => {
    if (
      /[^a-zA-Z0-9@._-]/.test(inputPasswordRef.current.value) ||
      inputPasswordRef.current.value == ""
    ) {
      validateErrors.password =
        "Mật khẩu không được bỏ trống hoặc chứa ký tự đặc biệt";
    } else if (inputPasswordRef.current.value.length < 8) {
      validateErrors.password = "Mật khẩu phải chứa ít nhất 8 ký tự";
    } else {
      delete validateErrors.password;
    }
  };

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const handleTouched = (fail) => {
    setTouched((prev) => ({ ...prev, [fail]: true }));
    validateErrors = { ...errors };

    if (fail === "email") validateEmail();
    if (fail === "password") validatePassword();
    setErrors(validateErrors);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    setErrors(validateErrors);
    if (Object.keys(validateErrors).length === 0) {
      const email = inputEmailRef.current.value;
      const password = inputPasswordRef.current.value;
      if (await checkUsers(email, password)) {
        dispatch({ type: "LOGIN" });
        navigate("/");
        toast.success("Đăng nhập thành công");
      } else {
        toast.error("Mật khẩu hoặc tài khoản không đúng");
      }
    }
  };

  return (
    <div className="auth min-h-[100vh] grid grid-rows-1 grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block bg-[#cccccc36]">
        <div className="auth__intro">
          <img src={intro} alt="" className="auth__intro-img" />
          <p className="auth__intro-desc max-w-[460px] text-center text-[20px] font-[600]">
            Chào mừng bạn quay lại để đăng nhập. Là khách hàng quay lại, bạn có
            thể truy cập vào tất cả thông tin đã lưu trước đó.
          </p>
        </div>
      </div>
      <div className="auth__content flex justify-center items-center">
        <div className="auth__content-inner">
          <a href="" className="auth__link-logo">
            <img src={logo} alt="" className="auth__logo" />
          </a>
          <h1 className="auth__heading">Đăng Nhập</h1>
          <p className="auth__desc mb-[60px] text-center">
            Hãy đăng nhập và bắt đầu mua sắm với những sản phẩm của chúng tôi.
          </p>
          <form action="" className="form auth__form">
            <div
              className={`form__group ${
                touched.email && errors.email ? "form__group--error" : ""
              }`}
            >
              <input
                ref={inputEmailRef}
                type="text"
                placeholder="Email"
                className="form__input"
                onBlur={() => handleTouched("email")}
              />
              <img src={iconEmail} alt="" className="form__icon" />
            </div>
            {errors.email && <p className="form__error">{errors.email}</p>}
            <div
              className={`form__group ${
                touched.password && errors.password ? "form__group--error" : ""
              }`}
            >
              <input
                ref={inputPasswordRef}
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                className="form__input"
                onBlur={() => handleTouched("password")}
              />
              {showPassword ? (
                <FaRegEye
                  className="form__icon-show"
                  onClick={() => handleShow()}
                />
              ) : (
                <FaRegEyeSlash
                  className="form__icon-show"
                  onClick={() => handleShow()}
                />
              )}
              <img src={iconPassword} alt="" className="form__icon" />
            </div>
            {errors.password && (
              <p className="form__error">{errors.password}</p>
            )}
            <a href="" className="auth__link block text-end">
              Quyên mật khẩu
            </a>
            <button
              className="auth__btn mb-[20px] bg-[#FFD44D]"
              onClick={handleLogin}
            >
              Đăng nhập
            </button>
            <button className="auth__btn mb-[50px] auth__btn--gmail">
              <img src={iconGmail} alt="" className="auth__icon-gmail" />
              Đắng nhập bằng Gmail
            </button>
          </form>
          <div className="auth__line">
            <p className="auth__desc">Bạn đã có tài khoản chưa?</p>
            <Link to={"/Signup"} className="auth__link-signin">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
