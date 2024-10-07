import React from 'react'
import subscribe1 from "../../../../assets/img/subscribe-1.png";
import subscribe2 from "../../../../assets/img/subscribe-2.png";

const Subscribe = () => {
  return (
    <div className='subscribe bg-[#005D63] py-[100px]' >
      <div className="inner" data-aos="fade-up">
          <section className="grid grid-rows-1 lg:grid-cols-2 md:grid-cols-2 gap-[30px] justify-between">
            <section className="subscribe__content lg:max-w-[470px] mr-auto min-h-full">
              <h1 className="subscribe__heading mt-[34px] mb-[40px] text-[2rem] font-[700] text-white leading-[4.25rem] lg:text-[3rem]">
              Đăng ký nhận bản tin của chúng tôi để nhận thông tin cập nhật sản phẩm mới nhất
              </h1>
              <div className='subscribe__row lg:flex items-center'>
                <input type="email" placeholder='Enter your email' className='pl-[16px] w-[297px] h-[60px] border-[1px] rounded-[5px] bg-[#005D63] outline-none'/>
                <button className="subscribe__btn mt-[20px] lg:mt-[0] lg:ml-[20px] px-[35px] py-[15px] rounded-[5px] bg-[#FFD44D] cursor-pointer text-white">Đăng ký</button>
              </div>
            </section>
            <figure className="subscribe__img flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[306px] lg:w-[500px] xl:w-[570px]">
                <img
                  src={subscribe1}
                  alt="iamge"
                  className="subscribe__img--rotate w-[251px] h-[294px] lg:w-[381px] lg:h-[424px] xl:w-[470px] xl:h-[550px] ml-auto"
                />
                <img
                  src={subscribe2}
                  alt="iamge"
                  className="subscribe__img--shadow w-[304px] h-[236px] lg:w-[462px] lg:h-[366px] xl:w-[570px] xl:h-[442px] overflow-hidden absolute bottom-0 right-0"
                />
              </div>
            </figure>
          </section>
        </div>
    </div>
  )
}

export default Subscribe
