import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swipper.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allTestimonialsAction } from "../../redux/slices/testimonialSlices";
const SwiperComponent = ({ data }) => {
  const dispatch=useDispatch();
  useEffect(()=>{
    const mess="hi";
    dispatch(allTestimonialsAction(mess));
  },[dispatch]);

  let {test}=useSelector((state)=>state.testimonial?.testimonials);
  console.log(test);
  return (
    <div className="app1">
      <div className="upper">
        <div>
          <h3 className="core">WHAT USERS SAY</h3>
          <h1 className="reviww">Recent Reviews</h1>
        </div>
        <div>
          <Link to="/review" className="add-your-review-btn">
            Add Your Review
          </Link>
        </div>
      </div>
      <div className="line2"></div>
      <Swiper
        // install Swiper modules
        spaceBetween={50}
        slidesPerView={3}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        // navigation
        onSwiper={(swiper) => console.log(swiper)}
  
      >
        {data.map((item) => (
          <SwiperSlide className="card">
            <p>{item.description}</p>
            <div className="line"></div>
            <div className="lower">
              <div>
                <img src={item.image_link} alt="wrong" />
              </div>
              <div>
                <p className="heading">{item.heading}</p>
                <p className="user-giving-review-name">{item.user}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
