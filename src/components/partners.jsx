import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Marquee from "react-fast-marquee";

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
            <Marquee className="bg-gray">
               <div className="d-flex gap-1 justify-content-between align-items-center">
                  {partners.map((partnerImage) => (
                     <div className="img-wrap">
                        <img
                           src={partnerImage.img}
                           alt="TTF Partner"
                           width={400}
                           className={"img-fluid"}
                        />
                     </div>
                  ))}
               </div>
            </Marquee>
         </div>
      </div>
   );
}
