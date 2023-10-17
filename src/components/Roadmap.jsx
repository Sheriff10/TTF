import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { FaCheck } from "react-icons/fa";

export default function Roadmap() {
   const {
      state: { roadmap },
   } = useContext(DataContext);
   return (
      <div className="roadmap bg-tblack py-5 text-light" id="roadmap">
         <div className="container">
            <div className="header py-5 text-center">
               <small className="bg-purple badge text-light">
                  Our Detailed Plan
               </small>{" "}
               <br />
               <span className="fw-bold fs-1">TTF Roadmap</span>
            </div>
         </div>
         <div className="container">
            <div className="wrap">
               {roadmap.map((road, index) => (
                  <div className="row" key={index}>
                     <div className="liner-left col-sm-6 ">
                        {index % 2 !== 0 && (
                           <div className="box">
                              <div className="head-wrap d-flex justify-content-end">
                                 <div className="head">
                                    <span className="fw-bold text-purple fs-4">
                                       Q{index + 1}
                                    </span>
                                 </div>
                              </div>
                              <div className="body-wrap d-flex justify-content-end ">
                                 <div className="body">
                                    <ul className="m-0 p-0">
                                       {road.list.map((map, index) => (
                                          <li
                                             className="d-flex align-items-center gap-3 mb-2 justify-content-end"
                                             key={index}
                                          >
                                             {" "}
                                             {map}
                                             <small className="icon text-purple px-2 rounded bg-tblack">
                                                <FaCheck />{" "}
                                             </small>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                     <div className="liner-right col-sm-6">
                        {index % 2 === 0 && (
                           <div className="box justify-content-end">
                              <div className="head-wrap">
                                 <div className="head">
                                    <span className="fw-bold text-purple fs-4">
                                       Q{index + 1}
                                    </span>
                                 </div>
                              </div>
                              <div className="body-wrap d-flex">
                                 <div className="body">
                                    <ul className="m-0 p-0">
                                       {road.list.map((map, index) => (
                                          <li
                                             className="d-flex align-items-center gap-3 mb-2"
                                             key={map}
                                          >
                                             {" "}
                                             <small className="icon text-purple px-2 rounded bg-tblack">
                                                <FaCheck />{" "}
                                             </small>
                                             {map}
                                          </li>
                                          // <li key={index}>{map}</li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               ))}
               {/* <div className="row">
                  <div className="liner-left col-lg-6">
                     <div className="box">
                        <div className="head-wrap d-flex justify-content-end">
                           <div className="head">
                              <span className="fw-bold text-purple fs-4">
                                 Q1
                              </span>
                           </div>
                        </div>
                        <div className="body-wrap d-flex justify-content-end">
                           <div className="body">
                              <ul className="m-0 p-0">
                                 <li>Roadmap here</li>
                                 <li>Roadmap here</li>
                                 <li>
                                    Roadmap RoadmapRoadmapRoadmapRoadmap here
                                 </li>
                                 <li>Roadmap here</li>
                                 <li>Roadmap here</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="liner-right col-lg-6">
                     <div className="box justify-content-end">
                        <div className="head-wrap">
                           <div className="head">
                              <span className="fw-bold text-purple fs-4">
                                 Q1
                              </span>
                           </div>
                        </div>
                        <div className="body-wrap d-flex">
                           <div className="body">
                              <ul className="m-0 p-0">
                                 <li>Roadmap here</li>
                                 <li>Roadmap here</li>
                                 <li>
                                    Roadmap RoadmapRoadmapRoadmapRoadmap here
                                 </li>
                                 <li>Roadmap here</li>
                                 <li>Roadmap here</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div> */}
            </div>
         </div>
      </div>
   );
}
