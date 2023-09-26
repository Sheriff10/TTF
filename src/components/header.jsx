import React from "react";

export default function Header() {
   return (
      <div className="header sticky-top">
         <div className="container px-5 pt-4">
            <div className="row align-items-center rounded-pill px-3">
               <div className="col-lg-3">
                  <div className="logo-con">
                    <img src="TTFgif.gif" alt="TTF" className="img-fluid" />
                  </div>
               </div>

               {/* Menu */}
               <div className="col-lg-6 ">
                  <div className="menu-con  w-100">
                     <ul className="d-lg-flex justify-content-between align-items-center  mt-2">
                        <li>
                           <a href="#">Home</a>
                        </li>
                        <li>
                           <a href="#">About</a>
                        </li>
                        <li>
                           <a href="#">Tokenomics</a>
                        </li>
                        <li>
                           <a href="#">Team</a>
                        </li>
                        <li>
                           <a href="#">Roadmap</a>
                        </li>
                     </ul>
                  </div>
               </div>

               {/* Btn */}
               <div className="col-lg-3">
                  <div className="btn-wrap d-flex justify-content-end">
                     <button className="btn">Try TTf Bot</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
