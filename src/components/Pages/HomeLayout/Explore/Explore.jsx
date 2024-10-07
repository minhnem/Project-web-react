import React from 'react'
import './explore.scss'
import explore1 from "../../../../assets/img/explore-1.png";
import explore2 from "../../../../assets/img/explore-2.png";
import explore3 from "../../../../assets/img/explore-3.png";
import explore4 from "../../../../assets/img/explore-4.png";
import explore5 from "../../../../assets/img/explore-5.png";
import explore6 from "../../../../assets/img/explore-6.png";
import explore7 from "../../../../assets/img/explore-7.png";
import explore8 from "../../../../assets/img/explore-8.png";
import explore9 from "../../../../assets/img/explore-9.png";
import explore10 from "../../../../assets/img/explore-10.png";
import explore11 from "../../../../assets/img/explore-11.png";
import explore12 from "../../../../assets/img/explore-12.png";

const Explore = () => {
  const item = [
    {img:explore1, title:"Men Fashion"},
    { img: explore2, title: "Women Fashion" },
    { img: explore3, title: "Kids Fashion" },
    { img: explore4, title: "Baby Fashion" },
    { img: explore5, title: "Mobile Device" },
    { img: explore6, title: "Computer Device" },
    { img: explore7, title: "Beauty Products" },
    { img: explore8, title: "Furniture" },
    { img: explore9, title: "Smart Watch" },
    { img: explore10, title: "Modern Shoes" },
    { img: explore11, title: "Beautiful Jewelry" },
    { img: explore12, title: "Home Products" },
  ]
  return (
    <div>
      <div className="explore bg-[#f1deb431] my-[25px]">
        <section className="inner py-[50px]" data-aos="fade-up">
          <h2 className="explore__heading mb-[70px] max-w-[470px] lg:max-w-[490px]">
          Khám phá và tìm thấy chính xác những gì bạn cần
          </h2>
          <div className="explore__list grid xl:grid-rows-3 xl:grid-cols-4 lg:grid-rows-4 lg:grid-cols-3 md:grid-rows-6 md:grid-cols-2 gap-[20px]">
            {item.map((item,index)=>(
              <section key={index} className="flex justify-center">
                <a href="#!" className="explore__item">
                  <figure className="explore__wrap-img">
                    <img src={item.img} alt={item.title} className="explore__img pt-[30px] my-0 mx-auto" />
                  </figure>
                  <h3 className="explore__title">{item.title}</h3>
                </a>
              </section>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Explore
