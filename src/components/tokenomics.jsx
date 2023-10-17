import React from "react";
import { VictoryPie } from "victory-pie";

export default function Tokenomics() {
   const data = [
      { x: "2%", y: 2 },
      { x: "5%", y: 5 },
      { x: "3%", y: 3 },
   ];
   return (
      <div className="tk bg-dark-blur " id="tokenomics">
         <div className="container">
            <div className="header py-5">
                <small className="bg-purple badge text-light">Our Economic Value</small> <br />
                <span className="fs-1 fw-bold text-light">Tokenomics</span>
            </div>
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-6 d-flex bg-dark justify-content-end rounded mb-4">
                  <VictoryPie
                     data={data}
                     colorScale={["#e2e2e2", "#5916f3", "#131b23"]}
                     labelRadius={({ innerRadius }) => innerRadius + 5}
                     radius={({ datum }) => 50 + datum.y * 20}
                     innerRadius={50}
                     width={700}
                     style={{
                        labels: {
                           fill: "white",
                           fontSize: 20,
                           fontWeight: "bold",
                        },
                     }}
                  />
               </div>
               <div className="col-lg-6 row">
                  <div className="wrap col-lg-4 mb-4 text-gray">
                     <div className="text d-flex mb-4">
                        <div className="box px-3 me-2 blur-bg"></div>{" "}
                        <span className="fw-bold">Liquidity 2%</span>
                     </div>
                     <div className="text d-flex mb-4">
                        <div className="box px-3 me-2 bg-purple"></div>{" "}
                        <span className="fw-bold">Operations 3%</span>
                     </div>
                     <div className="text d-flex">
                        <div className="box px-3 me-2 bg-tblack"></div>{" "}
                        <span className="fw-bold">Marketing 5%</span>
                     </div>
                  </div>
                  <div className="bg-dark text-light d-flex p-3 rounded align-items-center col-lg-8 col-12">
                     <div className="box border-2 border-right col">
                        <small>Max Wallet</small> <br />
                        <span className="text-purple fw-bold fs-3">2.00%</span>
                     </div>
                     <div className="box col">
                        <span>Total Supply</span> <br />
                        <span className="text-purple fw-bold fs-3">100,000,000</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
