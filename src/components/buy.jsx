import React from "react";

export default function Buy() {
   const imgFunc = (img, link) => {
      return { img, link };
   };
   const imgArr = [
      imgFunc("/uniswap.png", "https://app.uniswap.org/tokens/ethereum/0x8e32b8a41f2e86a3ee198912ac8d756c84295b40"),
      imgFunc("/dexscreener1.png", "https://dexscreener.com/ethereum/0x8e32b8a41f2e86a3ee198912ac8d756c84295b40"),
      imgFunc("/dexview.png", "https://www.dexview.com/eth/0x8e32b8a41f2e86a3ee198912ac8d756c84295b40"),
      imgFunc("/dextools.png", "https://www.dextools.io/app/en/ether/pair-explorer/0x8e32b8a41f2e86a3ee198912ac8d756c84295b40"),
      ,
   ];
   return (
      <div className="buy py-5">
         <div className="container px-5">
            <span className="fs-5 fw-bold text-gray">
               Buy <span className="text-purple">TTF</span> Token or view{" "}
               <span className="text-purple">Chart</span> on your preffered
               platform
            </span>

            {/* img display */}
            <div className="row align-items-center rounded bg-gray mt-2 shadow">
               {imgArr.map((i, index) => (
                  <div
                     className="col d-flex justify-content-center align-items-center  p-3"
                     key={index}
                  >
                     <a href={i.link} target="_blank">
                        <img src={i.img} alt={i.img} />
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
