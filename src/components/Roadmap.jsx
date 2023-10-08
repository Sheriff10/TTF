import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import {FaCheck} from 'react-icons/fa'

export default function Roadmap() {
   const {
      state: { roadmap },
   } = useContext(DataContext);
   return (
      <div className="roadmap bg-tblack py-5 p-5 text-light" id="roadmap">
         <div className="container">
            <div className="header py-5">
               <small className="bg-purple badge text-light">Our Detailed Plan</small> <br />
               <span className="fw-bold fs-1">TTF Roadmap</span>
            </div>
         </div>
         <div className="container">
            <div className="row">
               {roadmap.map((rCard, index) => (
                  <div className="col-lg-3 col-md-6 col-12 mb-4 " key={index}>
                     <div className="r-card bg-dark-blur p-4 h-100">
                        <div className="head d-flex mb-2 justify-content-center align-items-cent ">
                         <span className="fw-bold fs-6">{index+1}</span>
                        </div>
                        <div className="body py-5">
                           <ul className="m-0 p-0">
                              {rCard.list.map(i => (
                                 <li className="d-flex align-items-center gap-3 mb-2" key={i}> <small className="icon text-purple px-2 rounded bg-tblack"><FaCheck /> </small>{i}</li>
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
