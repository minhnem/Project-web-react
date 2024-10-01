import React from 'react'
import './learn.scss'
import learn1 from "../../../../assets/img/learn-1.png";
import learn2 from "../../../../assets/img/learn-2.png";
import learn3 from "../../../../assets/img/learn-3.png";

const Learn = () => {
  const item = [
    {img: learn1, desc: "How to start an online store"},
    {img: learn2, desc: "7 examples of the best eCommerce websites to take notes from"},
    {img: learn3, desc: "How to start a t-shirt business: ultimate step-by-step guide"},
  ]

  return (
    <div className="learn my-[25px]">
        <section className="inner py-[50px]" data-aos="fade-up">
          <h2 className="learn__heading max-w-[327px] md:max-w-[470px]">
            Learn how to build and grow your online store
          </h2>
          <p className='learn__desc max-w-[327px] md:max-w-[470px]'>
            Get insider tips and step-by-step guidance from eCommerce experts and successful Wix Merchants.
          </p>
          <div className="learn__list grid lg:grid-rows-1 lg:grid-cols-3 grid-rows-3 grid-cols-1 gap-[30px]">
            {item.map((item, index) => (
              <div key={index} className="flex justify-center">
                <article>
                  <figure>
                      <img src={item.img} alt="" />
                  </figure>
                  <p className='learn__desc--blog'>{item.desc}</p>
                  <a href="#!" className='learn__link'>Read the blog </a>
                  </article>
              </div>
            ))}
          </div>
        </section>
      </div>
  )
}

export default Learn
