import { useContext } from "react";
import { DataContext } from "../context/DataContext";
export default function Intro() {
   const {
      state: { intro },
   } = useContext(DataContext);

   return (
      <div className="intro">
         <div className="container px-5">
            <div className="row align-items-center bg-dar">
               <div className="col-lg-6">
                  <div className="intro-text">
                     <div className="text-wrap">
                        <h1 className="t fw-boold">{intro.intro_title}</h1>
                     </div>
                     <div className="text-wrap d-flex">
                        <div className="wrap blur-bg p-2 px-4 rounded-pill ">
                           <span className="t3 fw-bold">Track</span>{" "}
                           <span className="t2 fw-bold">The</span>{" "}
                           <span className="t3 fw-bold">Fund</span>
                        </div>
                     </div>
                     <p className="text-gray">{intro.intro_slogan}</p>

                     <div className="btn-wrap d-flex gap-2 ">
                        <div className="col">
                           <button className="btn bg-red text-white rounded h-100 col-12 p-lg-2 ">
                              Read Whitepaper
                           </button>
                        </div>
                        <div className="col">
                           <button className="btn  text-dark rounded h-100 col-12 bg-gray p-lg-2 ">
                              Bot guide
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="intro-img d-flex justify-content-end">
                     <div className="wrap">
                        <img src="TTFgif.gif" alt="TTF" className="img-fluid" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
