import React from "react";
import Stars from "./Stars";
import SectionTitle from "../title/SectionTitle";
import {
  RiArrowLeftDoubleFill,
  RiArrowRightDoubleFill,
  RiTelegram2Fill,
  RiCalendar2Line,
} from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./tours.css";
import { tours } from "../../Data";
import ScrollLink from "../links/ScrollLink";

function Tours() {
  return (
    <section className="tours container section">
      <div className="category-header">
        <SectionTitle
          subtitle="Epic Adventures"
          title="Select Your Tours"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Magnam laborum facilis mollitia reiciendis explicabo perferendis laudantium,
            dolores blanditiis accusamus similique illo odit exercitationem neque id.
            Voluptatem provident cumque dolorem quam."
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
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1208: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {tours.map(({ img, title, location, days, price, stars }, index) => {
          return (
            <SwiperSlide className="tours-item" key={index}>
              <img src={img} alt="" className="tours-img" />

              <div className="tour-details">
                <Stars stars={stars}></Stars>
                <h3 className="tour-titles">{title}</h3>
                <p className="tour-location">{location}</p>
                <hr className="tour-separator" />
                <div className="tour-days">
                  <RiCalendar2Line className="tour-icon" />
                  {days}
                </div>

                <div className="tour-bottom">
                  <p>
                    <span className="tour-price">{price}</span>
                    <span className="tour-person">/Person</span>
                  </p>
                  <ScrollLink
                    to="/"
                    name="More Details"
                    className="button"
                  >
                    <RiTelegram2Fill className="button-icon" />
                  </ScrollLink>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Tours;
