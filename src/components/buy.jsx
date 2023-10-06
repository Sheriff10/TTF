import React from "react";

export default function Buy() {
   const imgArr = [
      "/PancakeSwap1.png",
      "/dexscreener1.png",
      "/PooCoin-Logo.png",
      "/dextools.png",
   ];
   return (
      <div className="buy py-5">
         <div className="container px-5">
            <span className="fs-5 fw-bold text-gray">
               Buy <span className="text-purple">TTF</span> Token or view <span className="text-purple">Chart</span> on your preffered platform
            </span>

            {/* img display */}
            <div className="row align-items-center rounded bg-gray mt-2 shadow">
               {imgArr.map((i) => (
                  <div className="col d-flex justify-content-center align-items-center  p-3" key={i}>
                     <img src={i} alt={i} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
