import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Marquee from "react-fast-marquee";

export default function Partners() {

   const {
      state: { partners },
   } = useContext(DataContext);
   return (
      <div className="partners bg-tblack py-5">
         <div className="container px-5">
            <div className="head text-center py-3">
               <small className="badge text-purple bg-dark">Collaboration</small> <br />
               <span className="fs-2 fw-bold text-light">Partners</span>
            </div>
            <Marquee className="bg-tblack2 p-2 rounded">
               <div className="d-flex gap-5 justify-content-between align-items-center bg-tblack2 p-2 rounded">
                  {partners.map((partnerImage, index) => (
                     <div className="img-wrap" key={index}>
                        <img
                           src={partnerImage.img}
                           alt="TTF Partner"
                           width={150}
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
