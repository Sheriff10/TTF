import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

export default function Slider() {
   const dum = [1, 1, 1, 1, 1, 1];
   const imgFunc = (img, title, description, link) => {};
   return (
      <div className="slider bg-dark-blur">
         <div className="container px-3">
         <div className="header py-5">
                <small className="bg-purple badge text-light">Features & Benefits</small> <br />
                <span className="fs-1 fw-bold text-light">TTF Bot</span>
            </div>

            {/* Sider Section */}
            <Swiper
               slidesPerView={3}
               spaceBetween={30}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               {dum.map((i, index) => (
                  <SwiperSlide>
                     <div className="col">
                        <div className="card mb-3">
                           <div className="img-wrap position-relative">
                              <img
                                 src="https://ttfbot.io/utility-1.png"
                                 alt="card"
                                 loading="lazy"
                              />
                              <div className="wrap img-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                                 <button className="btn bg-purple text-white">
                                    View Image
                                 </button>
                              </div>
                           </div>
                           <div className="text-group mb-5 p-3 bg-tblack mt-3">
                              <div className="text-wrap">
                                 <span className="fs-4 fw-bold text-light">
                                    Token Reports
                                 </span>
                              </div>
                              <div className="text-wrap text-gray">
                                 <span>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Amet nobis culpa magnam
                                    consequuntur praesentium. Enim sed labore
                                    nulla, libero cum, autem ratione, beatae
                                    placeat dignissimos omnis fugiat quas illo
                                    recusandae.
                                 </span>
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
