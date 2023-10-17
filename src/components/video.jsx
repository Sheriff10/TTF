import React from "react";

export default function Video() {
   return (
      <div className="video">
         {/* Video section */}
         <div
            className="w-full flex justify-center items-center my-4"
            style={{ opacity: 1 }}
         >
            <video autoPlay className="rounded w-100" controls>
               <source src="https://ttfbot.io/intro.mp4" type="video/mp4" />
            </video>
         </div>
      </div>
   );
}
