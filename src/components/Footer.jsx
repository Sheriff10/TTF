import React from "react";
import { FaMedium, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
   const footerFunc = (icon, link) => {
      return { icon, link };
   };
   const footerArr = [
      footerFunc(<FaTwitter />,"https://twitter.com/TTFBot"),
      footerFunc(<FaTelegram />,"https://t.me/TTFBotOfficial"),
      footerFunc(<FaMedium />,""),
      footerFunc(<FaYoutube />,"https://medium.com/@track.the.funds.bot/track-the-funds-ttf-bot-making-cryptocurrency-trading-safer-39d152cde756"),
   ]
   return (
      <div className="footer bg-tblack2 text-gray bg-tblack p-3">
         <div className=" justify-content-between align-items-center">
            <div className="socials col-12 text-center px-3">
                   {footerArr.map((icon, index) => (
                     <a href={icon.link} target="_blank" className="mx-2 fs-5">{icon.icon}</a>
                   ))}
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
