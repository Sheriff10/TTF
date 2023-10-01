import React, { useContext } from "react";
import { MdCheck, MdHighlightOff, MdRemoveRedEye } from "react-icons/md";
import { DataContext } from "../context/DataContext";

export default function Solution() {
   const {
      state: { solution },
      dispatch,
   } = useContext(DataContext);

   const iconArr = [<MdHighlightOff />, <MdRemoveRedEye />, <MdCheck />];

   return (
      <div className="solutions">
         <div className="container px-5">
            <div className="row">
               {solution.map((card, index) => (
                  <div className="col-lg-4 col-md-6 p-lg-5 p-2">
                     <div className="s-card">
                        <div className="heading">
                           <div className={`wrap fw-bold fs-4 d-flex align-items-center ${index === 0 && "bg-gray "} ${index === 1 && "bg-tblack "} ${index === 2 && "bg-red text-light"} p-3 mb-3 rounded`}>
                              <span className="s-card-icon f">
                                 {iconArr[index]}{" "}
                              </span>{" "}
                              <span className="t3 ms-1">{card.header}</span>
                           </div>
                        </div>

                        <div className={`body  ${index === 0 && "bg-gray "}  ${index === 1 && "bg-tblack text-light"} ${index === 2 && "bg-red text-light"} p-3 rounded`}>
                           {card.text}
                        </div>
                     </div>
                  </div>
               ))}

               {/* second card
               <div className="col-lg-4 col-md-6 p-lg-5 p-2">
                  <div className="s-card">
                     <div className="heading">
                        <div className="wrap fw-bold fs-4 d-flex align-items-center py-3 bg-tblack mb-4 p-3 rounded">
                           <span className="s-card-icon"><MdRemoveRedEye/></span>{" "}
                           <span className="t3 ms-1">Vision</span>
                        </div>
                     </div>

                     <div className="body bg-tblack p-3 rounded text-light">
                        The most important thing to do when beginning to invest
                        in cryptocurrencies is to practice safe trading. <br />{" "}
                        <br />
                        Trading cryptocurrency is a risky business but has the
                        potential for high rewards.This attracts investors from
                        all walks of life.But the reality is that only a
                        fraction of investors end up in profit.
                     </div>
                  </div>
               </div>

               {/* 3rd Card 
               <div className="col-lg-4 col-md-6 p-lg-5 p-2">
                  <div className="s-card">
                     <div className="heading">
                        <div className="wrap fw-bold fs-4 d-flex align-items-center py-3 bg-red text-black mb-4 p-3 rounded">
                           <span className="s-card-icon bg-tblack"><MdCheck/></span>{" "}
                           <span className=" ms-1">Solution</span>
                        </div>
                     </div>

                     <div className="body bg-red p-3 rounded text-black">
                        The most important thing to do when beginning to invest
                        in cryptocurrencies is to practice safe trading. <br />{" "}
                        <br />
                        Trading cryptocurrency is a risky business but has the
                        potential for high rewards.This attracts investors from
                        all walks of life.But the reality is that only a
                        fraction of investors end up in profit.
                     </div>
                  </div>
               </div> */}
            </div>
         </div>
      </div>
   );
}
