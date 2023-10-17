import React from "react";

export default function Buy() {
   const imgFunc = (img, link) => {
      return { img, link };
   };
   const imgArr = [
      imgFunc(
         "/uniswap.png",
         "https://app.uniswap.org/tokens/ethereum/0x8e32b8a41f2e86a3ee198912ac8d756c84295b40"
      ),
      imgFunc(
         "/dexscreener1.png",
         "https://dexscreener.com/ethereum/0x8e32b8a41f2e86a3ee198912ac8d756c84295b40"
      ),
      imgFunc(
         "/dexview.png",
         "https://www.dexview.com/eth/0x8e32b8a41f2e86a3ee198912ac8d756c84295b40"
      ),
      imgFunc(
         "/dextools.png",
         "https://www.dextools.io/app/en/ether/pair-explorer/0x8e32b8a41f2e86a3ee198912ac8d756c84295b40"
      ),
      imgFunc(
         "/cmc.png",
         "https://coinmarketcap.com/dexscan/ethereum/0x0675a2a87e7678b8fa8af3dc7dd284bbd87cca7e/"
      ),
      imgFunc(
         "/cg.png",
         "https://www.geckoterminal.com/eth/pools/0x0675a2a87e7678b8fa8af3dc7dd284bbd87cca7e"
      ),
      ,
   ];
   const navi = (link) => window.location.href = link
   return (
      <div className="buy py-5">
         <div className="container">
            <span className="fs-5 fw-bold text-gray">
               Buy <span className="text-purple">TTF</span> Token or view{" "}
               <span className="text-purple">Chart</span> on your preffered
               platform
            </span>

            {/* img display */}
            <div className="row align-items-center rounded bg-gray mt-2 shadow">
               {imgArr.map((i, index) => (
                  <div
                     className="col-sm-2 col-6 d-flex flex-shrink-0 justify-content-center align-items-center  p-3"
                     key={index}
                  >

                        <img
                           src={i.img}
                           alt={i.img}
                           className={`img${index} mx-auto`}
                           onClick={() => navi(i.link)}
                           // style={{ objectFit: "contain", maxHeight: "100%", maxWidth: "100%" }}
                        />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
