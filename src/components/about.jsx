import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import DOMPurify from "dompurify";

export default function About() {
   const {
      state: { about },
   } = useContext(DataContext);
   const sanitizedContent = DOMPurify.sanitize(about.about01);
   const sanitizedContent2 = DOMPurify.sanitize(about.about02);
   return (
      <div className="about bg-tblack text-gray py-5">
         <div className="container px-5">
            <div className="header fw-bold">
               <small className="t3">Introuction</small>
               <br />
               <span className="fs-1">About TTF</span>
            </div>
            <div
               className="body"
               dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />

            <div
               dangerouslySetInnerHTML={{ __html: sanitizedContent2 }}
               className="text-wrap blur-bg p-5 rounded"
            />
         </div>
      </div>
   );
}
