import React from "react";
import "./footer.scss";
import starRate from "../../../assets/icons/star-rate.png";
import trustpilot from "../../../assets/icons/icon-trustpilot.png";
import iconUs from "../../../assets/icons/icon-us-footer.png";
import logo from "../../../assets/img/Logo2.png";
import iconPay1 from "../../../assets/icons/fb-1.png";
import iconPay2 from "../../../assets/icons/fb-2.png";
import iconPay3 from "../../../assets/icons/fb-3.png";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-[#131717] py-[55px]">
        <div className="inner" data-aos="fade-up">
          <div className="footer-top flex justify-center">
            <div className="footer-top__wrap">
              <h4 className="footer__title text-center">Excellent</h4>
              <div className="footer-top__row">
                <img src={starRate} alt="" />
              </div>
              <p className="footer-top__views text-center">
                Based on 13,586 reviews
              </p>
              <div className="footer-top__row mb-[100px] flex justify-center">
                <img src={trustpilot} alt="" />
              </div>
            </div>
          </div>
          <div className="footer-body grid grid-rows-1 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-5 gap-[20px]">
            <div className="footer-body__col">
              <h4 className="footer__title">Customer Service</h4>
              <ul>
                <li>
                  <a href="#!" className="footer-body__link">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Order Lookup
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Corporate Gifting
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-body__col">
              <h4 className="footer__title">About Us</h4>
              <ul>
                <li>
                  <a href="#!" className="footer-body__link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    News & Blog
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Press Center
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Investors
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Suppliers
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-body__col">
              <h4 className="footer__title">Credit Card</h4>
              <ul>
                <li>
                  <a href="#!" className="footer-body__link">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Gift Cards Balance
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Shop with Points
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Reload Your Balance
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-body__col">
              <h4 className="footer__title">Sell</h4>
              <ul>
                <li>
                  <a href="#!" className="footer-body__link">
                    Start Selling
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Learn to Sell
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-body__link">
                    Affiliates & Partners
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-body__col">
              <h4 className="footer__title">Follow us</h4>
              <figure>
                <img src={iconUs} alt="" className="footer-body__icon" />
              </figure>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom py-[28px] bg-[#F1DEB4]">
        <div className="inner grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3">
          <div className="col-span-2 flex items-center justify-between">
            <img src={logo} alt="" className="footer-bottom__logo" />
            <figure className="flex items-center gap-[20px]">
              <img src={iconPay1} alt="" className="footer-bottom__iconPay" />
              <img src={iconPay2} alt="" className="footer-bottom__iconPay" />
              <img src={iconPay3} alt="" className="footer-bottom__iconPay" />
            </figure>
          </div>
          <p className="footer-bottom__desc text-center mt-[16px] lg:mt-0 lg:text-end">
            Copyright © 2022 UIHUT All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
