import React from "react";
import { FaTelegram } from "react-icons/fa";

export default function Team() {
   const teamFunc = (name, img, post, link) => {
      return { name, img, post, link };
   };
   const teamArr = [
      teamFunc(
         "Don",
         "/don.jpeg",
         "CFO & Logistics Manager",
         "https://t.me/DON_the_only"
      ),
      teamFunc("Dan", "/dan.jpeg", "COO & CMO", "https://t.me/dantek5"),
      teamFunc(
         "Muhammad",
         "/t1.jpeg",
         "CTO & Senior Developer",
         "https://t.me/hosnybtw"
      ),
      teamFunc(
         "Emma",
         "/emma.jpeg",
         "Junior Developer",
         "https://t.me/Emma_6873"
      ),
   ];
   return (
      <div className="team py-5" id="team">
         <div className="container px-5">
            <div className="header">
               <small className="badge text-light bg-purple">
                  The HardWorking Members
               </small>
               <br />
               <span className="fs-1 fw-bold text-light">TTF Team </span>

               <div className="text-wrap my-3 text-gray">
                  <span className="">
                     We are an international team of 4 from Canada, France,
                     Egypt, and Australia, with a diversified skill set from
                     development, marketing, and business management. We share a
                     common vision about safer trading, and have come together
                     to help traders with their due diligence and help founders
                     to provide transparency.
                  </span>
               </div>
            </div>
            <div className="row t-card">
               {teamArr.map((i, index) => (
                  <div
                     className="col-12 col-sm-6 col-lg-3 p-lg-2 mb-4"
                     key={index}
                  >
                     <div className="box h-100 bg-tblack py-4 px-3 shadow">
                        <div className="box-img d-flex justify-content-center">
                           <img src={i.img} alt={i.name} width={100} />
                        </div>
                        <div className="box-text p-1 text-center">
                           <small className="text-purple fs-3">...</small>{" "}
                           <br />
                           <span className="fs-4 fw-bold text-purple d-flex gap-2 align-items-center justify-content-center">
                              {i.name}{" "}
                              {(index == 1 || index == 2) && (
                                    <div className="wrap">
                                       <img
                                          src="kyc.png"
                                          alt="KYCed"
                                          className="img-fluid"
                                          width={20}
                                       />
                                    </div>
                                 )}
                           </span>{" "}
                           <br />
                           <small className="text-gray">{i.post}</small> <br />
                           <small>
                              <a href={i.link} className="text-primary fs-5">
                                 <FaTelegram className="bg-white rounded-circle" />{" "}
                              </a>
                           </small>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
