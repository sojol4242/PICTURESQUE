import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import "./review.css";
import Review from "./Review";
 
SwiperCore.use([  Pagination, Autoplay]);
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://photography-app-2021.herokuapp.com/getReview")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section id="reviews" className="container-fluid">
       <div className="row">
            <div className="review_head col-md-12 text-center mx-auto">
              <h2 className="title">
                {" "}
                <span>What clients</span> say about us
              </h2>
            </div>
          </div>
      {reviews.length > 0 ? (
        <>
         
          <div className="review py-5">
            <Swiper
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
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
           
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 50,
                stretch:1,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
            
              className="container mySwiper"
            >
              
              {reviews.map((rev,i) => (
                <SwiperSlide>
                <Review rev={rev} i={i}/>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      ) : (
        <div className="container d-flex justify-content-center align-items-center">
          <img
            src="https://i.ibb.co/GJVBCfr/9313-loader.gif"
            alt="loader"
            style={{ height: "200px", background: "w" }}
          />
        </div>
      )}
    </section>
  );
};

export default Reviews;
