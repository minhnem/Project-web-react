import React, { useEffect, useRef, useState } from "react";
import "../../auth/auth.scss";
import logo from "../../../../assets/img/Logo2.png";
import iconEmail from "../../../../assets/icons/icon-email.svg";
import iconPassword from "../../../../assets/icons/icon-password.svg";
import iconGmail from "../../../../assets/icons/icon-gmail.svg";
import intro from "../../../../assets/icons/intro.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputCfPasswordRef = useRef();

  const navigate = useNavigate()

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

  const validateConfirmPassWord = () => {
    if (
      inputCfPasswordRef.current.value !== inputPasswordRef.current.value ||
      inputCfPasswordRef.current.value == ""
    ) {
      validateErrors.cfPassword = "Mật khẩu không khớp";
    } else {
      delete validateErrors.cfPassword;
    }
  };

  const handleTouched = (fail) => {
    setTouched((prev) => ({ ...prev, [fail]: true }));
    validateErrors = { ...errors };

    if (fail === "email") validateEmail();
    if (fail === "password") validatePassword();
    if (fail === "confirmPassword") validateConfirmPassWord();
    setErrors(validateErrors);
  };

  //show password
  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  // kiểm tra email đã tồn tại trong db hay chưa
  const checkUsers = async (email) => {
    const response = await fetch("https://my-data-json-server.vercel.app/users");
    const data = await response.json();
    return data.some((user) => user.email === email);
  };

  // POST user
  async function addUser(email, password) {
    if (await checkUsers(email)) {
      toast.error("Email đã tồn tại");
      return;
    }
    fetch("https://my-data-json-server.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }

  const handleSignup = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    validateConfirmPassWord();
    setErrors(validateErrors);
    if (Object.keys(validateErrors).length === 0) {
      const email = inputEmailRef.current.value;
      const password = inputPasswordRef.current.value;
      toast.success("Đăng ký thành công")
      addUser(email, password);
      navigate("/Login")
    }
  };

  return (
    <div className="auth min-h-[100vh] grid grid-rows-1 grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block bg-[#cccccc36]">
        <div className="auth__intro">
          <img src={intro} alt="" className="auth__intro-img" />
          <p className="auth__intro-desc max-w-[460px] text-center text-[20px] font-[600]">
            Hãy đăng ký tài khoản để đến với những sản phẩm tốt nhất, chất lượng
            cao và trải nhiệm dịch vụ sáng tạo của chúng tôi.
          </p>
        </div>
      </div>
      <div className="auth__content flex justify-center items-center">
        <div className="auth__content-inner">
          <a href="" className="auth__link-logo">
            <img src={logo} alt="" className="auth__logo" />
          </a>
          <h1 className="auth__heading">Đăng Ký</h1>
          <p className="auth__desc mb-[40px] text-center">
            Hãy đăng ký tài khoản và đến với những sản phẩm của chúng tôi.
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
            <div
              className={`form__group ${
                touched.confirmPassword && errors.cfPassword
                  ? "form__group--error"
                  : ""
              }`}
            >
              <input
                ref={inputCfPasswordRef}
                type={showPassword ? "text" : "password"}
                placeholder="Xác nhận mật khẩu"
                className="form__input"
                onBlur={() => handleTouched("confirmPassword")}
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
            {errors.cfPassword && (
              <p className="form__error">{errors.cfPassword}</p>
            )}
            <a href="" className="auth__link block text-end">
              Quên mật khẩu
            </a>
            <button
              className="auth__btn mb-[20px] bg-[#FFD44D]"
              onClick={handleSignup}
            >
              Đăng ký
            </button>
            <button className="auth__btn mb-[50px] auth__btn--gmail">
              <img src={iconGmail} alt="" className="auth__icon-gmail" />
              Đắng ký bằng Gmail
            </button>
          </form>
          <div className="auth__line">
            <p className="auth__desc">Bạn đã có tài khoản chưa?</p>
            <Link to={"/Login"} className="auth__link-signin">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
