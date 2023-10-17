import React, { useContext } from "react";
import { MdCheck, MdHighlightOff, MdRemoveRedEye } from "react-icons/md";
import { DataContext } from "../context/DataContext";

export default function Solution() {
   const {
      state: { solution },
   } = useContext(DataContext);

   const iconArr = [<MdHighlightOff />, <MdRemoveRedEye />, <MdCheck />];

   return (
      <div className="solutions">
         <div className="container">
            <div className="row bg-dar">
               {solution.map((card, index) => (
                  <div className="col-lg-4 col-md-6 p-lg-5 p-2" key={index}>
                     <div className="s-card h-100 bg-dange">
                        <div className="heading">
                           <div className={`wrap fw-bold fs-4 d-flex align-items-center bg-purple  p-3 mb-3 rounded`}>
                              <span className="s-card-icon f">
                                 {iconArr[index]}{" "}
                              </span>{" "}
                              <span className=" ms-1">{card.header}</span>
                           </div>
                        </div>

                        <div className={`body p-3 rounded bg-tblack text-gray`}>
                           {card.text}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
