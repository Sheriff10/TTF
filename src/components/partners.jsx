import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Partners() {
   const imgArr = [
      "/PancakeSwap1.png",
      "/dexscreener1.png",
      "/PooCoin-Logo.png",
      "/dextools.png",
      "/dextools.png",
      "/dextools.png",
      "/dextools.png",
      "/dextools.png",
   ];

   const {
      state: { partners },
      dispatch,
   } = useContext(DataContext);
   return (
      <div className="partners bg-gray py-2">
         <div className="container px-5">
            <div className="head text-center py-3">
                <small>Collaboration</small> <br />
               <span className="fs-2 fw-bold">Partners</span>
            </div>
               <div className="mover pb-5 gap-5 overflow overflow-scroll justify-content-between align-items-center">
                  {partners.map((i) => (
                     <div className="img-wrap">
                        <img src={i} alt={i} className={"img-fluid"} />
                     </div>
                  ))}
               </div>
         </div>
      </div>
   );
}
