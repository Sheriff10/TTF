import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Roadmap() {
   const {
      state: { roadmap },
   } = useContext(DataContext);
   return (
      <div className="roadmap bg-tblack py-5 text-light">
         <div className="container px-lg-5">
            <div className="header py-5">
               <small>Our Detailed Plan</small> <br />
               <span className="fw-bold fs-1">TTF Roadmap</span>
            </div>
         </div>
         <div className="container">
            <div className="row">
               {roadmap.map((rCard, index) => (
                  <div className="col-lg-3 col-md-6 col-12" key={index}>
                     <div className="r-card bg-dark-blur p-4 h-100">
                        <div className="head flex mb-2">
                           <span className="fw-bold fs-4">{index+1}</span>
                        </div>
                        <div className="body">
                           <ul className="m-0 p-0">
                              {rCard.list.map(i => (
                                 <li key={i}>{i}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
