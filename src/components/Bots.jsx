import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Bots() {
   return (
      <div className="bots py-5 bg-gray">
         <div className="container px-5">
            <div className="header py-5">
               <small>What we offer</small> <br />
               <span className="fs-1 fw-bold">Bot Versions</span>
            </div>

            {/* Basic */}
            <div className="row my-2 align-items-center text-gray">
               <div className="col-lg-6 text-center py-4">
                  <small className="text-secondary">For everyone</small> <br />
                  <span className="fs-2 fw-bold text-black">BASIC VERSION</span>
               </div>
               <div className="col-lg-6 b-version r bg-tblack p-3 py-5">
                  <div className="wrap ">
                     <ul className="p-0 m-0">
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Analysis Reports
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           On-demand Charts
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Fees Summary Report
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Monitor Tax Changes
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Monitor Max Trx's
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Monitor Team Funds
                        </li>
                     </ul>

                     <div className="btn-wrap">
                        <button className="btn btn-sm bg-red p-1 text-light w-100 mt-2 rounded-pill">
                           GET ACCESS NOW
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Pro */}
            <div className="row my-2 align-items-center text-gray">
               <div className="col-lg-6 b-version l bg-tblack p-3 py-5">
                  <div className="wrap ">
                     <ul className="m-0 p-0">
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Everything in Basic
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Monitor Liquidity
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Monitor Contracts
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Monitor Airdrops
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Buybacks, Burns, Sells
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           No Sponsored Ads
                        </li>
                     </ul>

                     <div className="btn-wrap">
                        <button className="btn btn-sm bg-red p-1 text-light w-100 mt-2 rounded-pill">
                           HOLD $200 OF TFF
                        </button>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 text-center py-4">
                  <small className="text-secondary">For Holders</small> <br />
                  <span className="fs-2 fw-bold text-black">PRO VERSION</span>
               </div>
            </div>

            {/* Premium */}
            <div className="row my-2 align-items-center text-gray">
               <div className="col-lg-6 text-center py-4">
                  <small className="text-secondary">For VIP</small> <br />
                  <span className="fs-2 fw-bold text-black">
                     PREMIUM VERSION
                  </span>
               </div>
               <div className="col-lg-6 b-version r bg-tblack p-3 py-5">
                  <div className="wrap ">
                     <ul className="m-0 p-0">
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Everything in Pro
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Labeled Callers
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Labeled Influencers
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Labeled Exchanges
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           TTF VIP Lounge
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Facilitate OTC Trades
                        </li>
                     </ul>

                     <div className="btn-wrap">
                        <button className="btn btn-sm bg-red p-1 text-light w-100 mt-2 rounded-pill">
                           HOLD $1000 OF TFF
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Custom */}
            <div className="row my-2 align-items-center text-gray">
               <div className="col-lg-6 b-version l bg-tblack p-3 py-5">
                  <div className="wrap ">
                     <ul className="m-0 p-0">
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Everything in Pro
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           No Sponsored Ads
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Set a Default Token
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Pinned in TTF Channel
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Follow-up Pinned Post
                        </li>
                        <li>
                           <i className="text-success">
                              <FaCheck />
                           </i>{" "}
                           Buyback into Project
                        </li>
                     </ul>

                     <div className="btn-wrap">
                        <button className="btn btn-sm bg-red p-1 text-light w-100 mt-2 rounded-pill">
                           CHAT NOW
                        </button>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 text-center py-4">
                  <small className="text-secondary">For Devs</small> <br />
                  <span className="fs-2 fw-bold text-black">PRO VERSION</span>
               </div>
            </div>
         </div>
      </div>
   );
}
