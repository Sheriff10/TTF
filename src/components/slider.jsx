import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { DataContext } from "../context/DataContext";

export default function Slider() {
   const {
      state: { feature },
   } = useContext(DataContext);

   return (
      <div className="slider bg-dark-blur">
         <div className="container">
            <div className="header py-5">
               <small className="bg-purple badge text-light">
                  Features & Benefits
               </small>{" "}
               <br />
               <span className="fs-1 fw-bold text-light">TTF Bot</span>
            </div>

            {/* Sider Section */}
            <Swiper
               // slidesPerView={3}
               // spaceBetween={30}
               pagination={{
                  clickable: true,
               }}
               breakpoints={{
                  640: {
                     slidesPerView: 1,
                     spaceBetween: 20,
                  },
                  768: {
                     slidesPerView: 2,
                     spaceBetween: 30,
                  },
                  1024: {
                     slidesPerView: 3,
                     spaceBetween: 30,
                  },
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               {feature.map((i, index) => (
                  <SwiperSlide>
                     <div className="col h-100">
                        <div className="card mb-3 h-100">
                           <div className="img-wrap position-relative">
                              <img src={i.img} alt="card" loading="lazy" />
                              <div className="wrap img-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                                 <a href={i.img} target="_blank">
                                    <button className="btn bg-purple text-white">
                                       View Image
                                    </button>
                                 </a>
                              </div>
                           </div>
                           <div className="text-group mb-5 p-3 bg-tblack mt-3 h-100">
                              <div className="text-wrap">
                                 <span className="fs-4 fw-bold text-light">
                                    {i.title}
                                 </span>
                              </div>
                              <div className="text-wrap text-gray h-100">
                                 <span>{i.text}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}
