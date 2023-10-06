import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import DOMPurify from "dompurify";

export default function About() {
   const {
      state: { about },
   } = useContext(DataContext);
   const sanitizedContent = DOMPurify.sanitize(about.about01);
   const sanitizedContent2 = DOMPurify.sanitize(about.about02);

   const [readMore, setReadMore] = useState(false);
   return (
      <div className="about text-gray py-5" id="about">
         <div className="container px-5 bg-tblack rounded py-3">
            <div className="header fw-bold">
               <small className="badge bg-purple text-white">Introuction</small>
               <br />
               <span className="fs-1 text-white">About TTF</span>
            </div>
            <div
               className="body"
               dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
            {!readMore && (
               <div className="btn-wrap mt-3">
                  <button
                     className="btn bg-purple p-2 btn-sm rounded text-light"
                     onClick={() => setReadMore(!readMore)}
                  >
                     Read more...
                  </button>
               </div>
            )}

            {readMore && (
               <div
                  dangerouslySetInnerHTML={{ __html: sanitizedContent2 }}
                  className="text-wrap blur-bg p-lg-5 p-2 rounded mt-5"
               />
            )}

            {readMore && (
               <div className="btn-wrap mt-3">
                  <button
                     className="btn bg-purple p-2 btn-sm rounded text-light"
                     onClick={() => setReadMore(!readMore)}
                  >
                     Read less
                  </button>
               </div>
            )}
         </div>
      </div>
   );
}
