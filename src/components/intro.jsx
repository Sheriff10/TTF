import React from "react";

export default function Intro() {
   return (
      <div className="intro">
         <div className="container px-5">
            <div className="row align-items-center bg-dar">
               <div className="col-lg-6">
                  <div className="intro-text">
                     <div className="text-wrap">
                        <h1 className="t fw-boold">
                           TTF Token: Safeguarding Your Crypto Investments
                        </h1>
                     </div>
                     <div className="text-wrap d-flex">
                        <div className="wrap blur-bg p-2 px-4 rounded-pill ">
                           <span className="t3 fw-bold">Track</span>{" "}
                           <span className="t2 fw-bold">The</span>{" "}
                           <span className="t3 fw-bold">Fund</span>
                        </div>
                     </div>
                     <p className="text-gray">
                        In a crypto world fraught with scams, meet TTF Token—a
                        symbol of safety and transparency.
                     </p>

                     <div className="btn-wrap row gap-2 ">
                        <div className="col-5">
                           <button className="btn bg-red text-white rounded col-12  p-2 ">
                              Read Whitepaper
                           </button>
                        </div>
                        <div className="col-5">
                           <button className="btn  text-dark rounded p-2 col-12 bg-gray ">
                              Bot guide
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="intro-img d-flex justify-content-end">
                     <div className="wrap">
                        <img src="TTFgif.gif" alt="TTF" className="img-fluid" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
