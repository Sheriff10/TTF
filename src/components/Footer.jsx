import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
   return (
      <div className="footer text-gray bg-tblack p-3">
         <div className="d-flex justify-content-between align-items-center">
            <div className="logo-wrap d-flex gap-2">
               <img src="/logo-side.png" alt="TTF" width={50} className="me-3" />
               <small>
                  Copyright © 2023 - All right reserved for TrackTheFunds Bot
               </small>
            </div>
            <div className="socials">
                <FaTwitter /> <FaTelegram />
            </div>
         </div>
      </div>
   );
}
