import React from "react";
import brand1 from "../../../../assets/img/brand-1.png";
import brand2 from "../../../../assets/img/brand-2.png";
import brand3 from "../../../../assets/img/brand-3.png";
import brand4 from "../../../../assets/img/brand-4.png";

const Brand = () => {
  const item = [
    { img: brand1, title: "Dell Brand" },
    { img: brand2, title: "HP Brand" },
    { img: brand3, title: "Nike Brand" },
    { img: brand4, title: "Louis Vuitton" },
  ];
  return (
    <div>
      <div className="brand my-[25px]">
        <section className="inner py-[50px]" data-aos="fade-up">
          <h2 className="explore__heading mb-[70px] max-w-[470px] lg:max-w-[490px]">
          Khám phá và tìm thấy chính xác những gì bạn cần
          </h2>
          <div className="explore__list grid lg:grid-rows-1 lg:grid-cols-4 grid-rows-2 grid-cols-2  gap-[20px]">
            {item.map((item, index) => (
              <section key={index} className="flex justify-center">
                <a href="#!" className="explore__item">
                  <figure className="brand__wrap-img flex justify-center items-center w-[155px] h-[155px] sm:w-[220px] sm:h-[190px] xl:w-[243px] xl:h-[230px] rounded-[15px] bg-[#F1DEB4]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="explore__img my-0 mx-auto w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
                    />
                  </figure>
                  <h3 className="explore__title">{item.title}</h3>
                </a>
              </section>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Brand;
