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
        console.log(data);
      });
  }, []);

  return (
    <section id="services" className="container-fluid">
      <div className="row my-5">
        <div className="services_head col-md-12 text-center m-auto">
          <h2 className="title">
            {" "}
            <span>Services</span> We Provide
          </h2>
        </div>
      </div>

      <div className="services">
        <Swiper
          slidesPerView={"auto"}
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
            delay:5000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          className="container"
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
      </div>
    </section>
  );
};

export default Services;
