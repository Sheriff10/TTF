import React from "react";

export default function Roadmap() {
   return (
      <div className="roadmap bg-tblack py-5 text-light">
         <div className="container px-lg-5">
            <div className="header py-5">
               <small>Our Detailed Plan</small> <br />
               <span className="fw-bold fs-1">TTF Roadmap</span>
            </div>
         </div>
         <div className="container">
            <img src="rd.png" alt="roadmap" className="img-fluid w-100" />
         </div>
      </div>
   );
}
