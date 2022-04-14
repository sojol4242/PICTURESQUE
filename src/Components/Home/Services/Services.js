import React, { useEffect, useState } from "react";
import "./service.css";
import Service from "./Service";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

const Services = () => {
  SwiperCore.use([Pagination, Autoplay]);
  const [newServices, setNewServices] = useState([]);

  useEffect(() => {
    fetch("https://photography-app-2021.herokuapp.com/getNewServices")
      .then((res) => res.json())
      .then((data) => {
        setNewServices(data);
      });
  }, []);

  return (
    <section id="services" className="container-fluid">
      <div className="row">
        <div className="services_head col-md-12 text-center m-auto">
          <h2 className="title">
            {" "}
            <span>Services</span> We Provide
          </h2>
        </div>
      </div>

      {newServices.length > 0 ? (
        <Swiper
          pagination={true}
          loop={true}
          className="mySwiper"
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 3,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          // effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
        >
          {
            //
            newServices.map((service) => (
              <SwiperSlide>
                <Service service={service} key={service._id} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      ) : (
        <div className="container d-flex justify-content-center align-items-center">
          <img
            src="https://i.ibb.co/GJVBCfr/9313-loader.gif"
            alt="loader"
            title="Please Wait"
            style={{ height: "200px", background: "transparent" }}
          />
        </div>
      )}
    </section>
  );
};

export default Services;
