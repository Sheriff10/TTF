import { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaBook, FaKey, FaUserShield } from "react-icons/fa";
import { DataContext } from "../context/DataContext";
export default function Intro() {
   const {
      state: { intro },
   } = useContext(DataContext);
   const [bgClass, setBgClass] = useState("bg1")
   const [trigger, setTrigger] = useState(0)

   useEffect(() => {setTimeout(() => toggleBg(), 1000)}, [trigger])

   const toggleBg = () => {
      const bgArr = ["bg1", "bg2", "bg3"]
      const randomBg = bgArr[Math.floor(Math.random() * bgArr.length)]
      setBgClass(randomBg)
      setTrigger(trigger+1)
   }

   return (
      <div className={`intro ${bgClass}`}>
         <div className="bg-wrap h-100 pt-5">
         <div className="container h-100 ">
            <div className="row h-100 align-items-center bg-dar">
               <div className="col-lg-6">
                  <div className="intro-text">
                     <div className="text-wrap">
                        <div className="text-wrap">
                        <span className="badge bg-dark text-purple fw-bold">TTF Token</span>
                        </div>
                        <h1 className="t fw-boold">{intro.intro_title}</h1>
                     </div>
                     <p className="text-gray">{intro.intro_slogan}</p>

                     <div className="btn-wrap d-flex gap-2 ">
                        <div className="col">
                           <button className="btn bg-purple text-white rounded h-100 col-12 p-lg-2 ">
                              <FaBook /> Whitepaper
                           </button>
                        </div>
                        <div className="col">
                           <button className="btn  text-dark rounded h-100 col-12 bg-gray p-lg-2 ">
                              Bot guide <FaArrowRight />
                           </button>
                        </div>
                     </div>
                     <div className="btn-wrap d-flex gap-2 mt-3">
                     <div className="col">
                           <button className="btn  text-dark rounded h-100 col-12 bg-gray p-lg-2 ">
                              <FaKey /> Audit
                           </button>
                        </div>
                        <div className="col">
                           <button className="btn bg-purple text-white rounded h-100 col-12 p-lg-2 ">
                              KYC Certificate <FaUserShield />
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
      </div>
   );
}
