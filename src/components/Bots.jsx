// import React from "react";
// import { FaCheck } from "react-icons/fa";

// export default function Bots() {
//    return (
//       <div className="bots py-5 bg-gray" id="version">
//          <div className="container px-5">
//             <div className="header py-5">
//                <small>What we offer</small> <br />
//                <span className="fs-1 fw-bold">Bot Versions</span>
//             </div>

//             {/* Basic */}
//             <div className="row my-2 align-items-center text-gray">
//                <div className="col-lg-6 text-center py-4">
//                   <small className="text-secondary">For everyone</small> <br />
//                   <span className="fs-2 fw-bold text-black">BASIC VERSION</span>
//                </div>
//                <div className="col-lg-6 b-version r bg-tblack p-3 py-5">
//                   <div className="wrap ">
//                      <ul className="p-0 m-0">
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Analysis Reports
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            On-demand Charts
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Fees Summary Report
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Monitor Tax Changes
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Monitor Max Trx's
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Monitor Team Funds
//                         </li>
//                      </ul>

//                      <div className="btn-wrap">
//                         <button className="btn btn-sm bg-red p-1 text-light w-100 mt-2 rounded-pill">
//                            GET ACCESS NOW
//                         </button>
//                      </div>
//                   </div>
//                </div>
//             </div>

//             {/* Pro */}
//             <div className="row my-2 align-items-center text-gray">
//                <div className="col-lg-6 b-version l bg-tblack p-3 py-5">
//                   <div className="wrap ">
//                      <ul className="m-0 p-0">
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Everything in Basic
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Monitor Liquidity
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Monitor Contracts
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Monitor Airdrops
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Buybacks, Burns, Sells
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            No Sponsored Ads
//                         </li>
//                      </ul>

//                      <div className="btn-wrap">
//                         <button className="btn btn-sm bg-red p-1 text-light w-100 mt-2 rounded-pill">
//                            HOLD $200 OF TFF
//                         </button>
//                      </div>
//                   </div>
//                </div>
//                <div className="col-lg-6 text-center py-4">
//                   <small className="text-secondary">For Holders</small> <br />
//                   <span className="fs-2 fw-bold text-black">PRO VERSION</span>
//                </div>
//             </div>

//             {/* Premium */}
//             <div className="row my-2 align-items-center text-gray">
//                <div className="col-lg-6 text-center py-4">
//                   <small className="text-secondary">For VIP</small> <br />
//                   <span className="fs-2 fw-bold text-black">
//                      PREMIUM VERSION
//                   </span>
//                </div>
//                <div className="col-lg-6 b-version r bg-tblack p-3 py-5">
//                   <div className="wrap ">
//                      <ul className="m-0 p-0">
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Everything in Pro
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Labeled Callers
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Labeled Influencers
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Labeled Exchanges
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            TTF VIP Lounge
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Facilitate OTC Trades
//                         </li>
//                      </ul>

//                      <div className="btn-wrap">
//                         <button className="btn btn-sm bg-red p-1 text-light w-100 mt-2 rounded-pill">
//                            HOLD $1000 OF TFF
//                         </button>
//                      </div>
//                   </div>
//                </div>
//             </div>

//             {/* Custom */}
//             <div className="row my-2 align-items-center text-gray">
//                <div className="col-lg-6 b-version l bg-tblack p-3 py-5">
//                   <div className="wrap ">
//                      <ul className="m-0 p-0">
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Everything in Pro
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            No Sponsored Ads
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Set a Default Token
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Pinned in TTF Channel
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Follow-up Pinned Post
//                         </li>
//                         <li>
//                            <i className="text-success">
//                               <FaCheck />
//                            </i>{" "}
//                            Buyback into Project
//                         </li>
//                      </ul>

//                      <div className="btn-wrap">
//                         <button className="btn btn-sm bg-red p-1 text-light w-100 mt-2 rounded-pill">
//                            CHAT NOW
//                         </button>
//                      </div>
//                   </div>
//                </div>
//                <div className="col-lg-6 text-center py-4">
//                   <small className="text-secondary">For Devs</small> <br />
//                   <span className="fs-2 fw-bold text-black">PRO VERSION</span>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// }

import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { FaCheck } from "react-icons/fa";

export default function Roadmap() {
   const {
      state: { roadmap },
   } = useContext(DataContext);
   const botCard = [
      {
         title: "Basic Version",
         subtTitle: "For Everyone",
         list: [
            "On-demand Charts",
            "Fees Summary Report",
            "Monitor Tax Changes",
            "Analysis Reports",
            "Monitor Max Trx's",
            "Monitor Team Funds",
         ],
         btnText: "GET ACCESS NOW",
         link: "https://t.me/ttfbotbot",
      },
      {
         title: "Pro Version",
         subtTitle: "For Holders",
         list: [
            "Everything in Basic",
            "Monitor Liquidity",
            "Monitor Contracts",
            "Monitor Airdrops",
            "Buybacks, Burns, Sells",
            "No Sponsored Ads",
         ],
         btnText: "HOLD $200 OF TTF",
         link: "https://app.uniswap.org/tokens/ethereum/0x8e32b8a41f2e86a3ee198912ac8d756c84295b40",
      },
      {
         title: "Premium Version",
         subtTitle: "For Vip",
         list: [
            "Everything in Pro",
            "Labeled Callers",
            "Labeled Influencers",
            "Labeled Exchanges",
            "TTF VIP Lounge",
            "Facilitate OTC Trades",
         ],
         btnText: "HOLD $1000 OF TTF",
         link: "https://app.uniswap.org/tokens/ethereum/0x8e32b8a41f2e86a3ee198912ac8d756c84295b40",
      },
      {
         title: "Custom Version",
         subtTitle: "For Dev",
         list: [
            "Everything in Pro",
            "No Sponsored Ads",
            "Set a Default Token",
            "Pinned in TTF Channel",
            "Follow-up Pinned Post",
            "Buyback into Project",
         ],
         btnText: "CHAT NOW",
         link: "https://t.me/dantek5",
      },
   ];
   return (
      <div className="roadmap bg-tblack py-5 p-5 text-light" id="roadmap">
         <div className="container">
            <div className="header py-5">
               <small className="bg-purple badge text-light">
                  What we offer
               </small>{" "}
               <br />
               <span className="fw-bold fs-1">Bot Versions</span>
            </div>
         </div>
         <div className="container">
            <div className="row">
               {botCard.map((botCard, index) => (
                  <div className="col-lg-3 col-md-6 col-12 mb-4 " key={index}>
                     <div className="r-card bg-dark-blur p-4 h-100">
                        <div className="head d-flex mb-2 justify-content-center align-items-center ">
                           <div className="col-12 text-center">
                              <small className="badge text-gray">
                                 {botCard.subtTitle}
                              </small>{" "}
                              <br />
                              <small className="fw-bold me-1">
                                 {botCard.title}
                              </small>
                           </div>
                           <span className="fw-bold fs-6">{index + 1}</span>
                        </div>
                        <div className="body py-5 pb-2">
                           <ul className="m-0 p-0">
                              {botCard.list.map((i) => (
                                 <li
                                    className="d-flex align-items-center gap-3 mb-2"
                                    key={i}
                                 >
                                    {" "}
                                    <small className="icon text-purple px-2 rounded bg-tblack">
                                       <FaCheck />{" "}
                                    </small>
                                    {i}
                                 </li>
                              ))}
                           </ul>
                           <div className="btn-wrap text-center mt-5">
                              <a href={botCard.link}>
                                 <button className="btn bg-gray fw-bold w-100">
                                    {botCard.btnText}
                                 </button>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
