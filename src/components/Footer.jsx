import React from "react";
import { FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
   return (
      <div className="footer text-gray bg-tblack p-3">
         <div className=" justify-content-between align-items-center">
            <div className="socials col-12 text-center px-3">
                <FaTwitter /> <FaTelegram /> <FaYoutube />
            </div>
            <div className="logo-wrap d-flex align-items-center justify-content-center gap-2">
               <img src="/logo-side.png" alt="TTF" width={50} className="me-3" />
               <small>
                  Copyright © 2023 - All right reserved for TrackTheFunds Bot
               </small>
            </div>
         </div>
      </div>
   );
}
