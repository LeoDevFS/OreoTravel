import React from "react";
import SectionTitle from "../title/SectionTitle";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./categories.css";
import { categories } from "../../Data";

function Categories() {
  return (
    <section className="categories container section">
      <div className="category-header">
        <SectionTitle
          title="Categories"
          decription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam laborum facilis mollitia reiciendis explicabo perferendis laudantium, dolores blanditiis accusamus similique illo odit exercitationem neque id. Voluptatem provident cumque dolorem quam."
        />
        <div className="swiper-btns">
          <button className="swiper-btn prev-btn">
            <RiArrowLeftDoubleFill />
          </button>

          <button className="swiper-btn next-btn">
            <RiArrowRightDoubleFill />
          </button>
        </div>
      </div>

      <Swiper
      slidesPerView={1}
      spaceBetween={12}
      grabCursor={true}
      loop={true}
      navigation={{
        nextEl: '.next-btn',
        prevEl:'.prev-btn'
      }}
        
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
          1208: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {categories.map(({ img, title }, index) => {
          return (
            <SwiperSlide className="category-slide" key={index}>
              <img src={img} alt="" className="category-img" />
              <h3 className="category-title">{title}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Categories;
