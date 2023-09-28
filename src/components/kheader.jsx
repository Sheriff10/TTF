import React from "react";

export default function Header() {
   return (
      <div className="heading pt-4">
         <div className="container px-5">
            <div className="d-flex blur-bg justify-content-between align-items-center px-3">
               <div className="logo-con">
                  <img src="TTFgif.gif" alt="TTF" />
               </div>
               <div className="menu-con">
                  <ul className="d-flex gap-3 mt-3">
                     <li><a href="#">HOME</a></li>
                     <li><a href="#">HOME</a></li>
                     <li><a href="#">HOME</a></li>
                     <li><a href="#">HOME</a></li>
                     <li><a href="#">HOME</a></li>
                     <li><a href="#">HOME</a></li>
                     <li><a href="#">HOME</a></li>
                  </ul>
               </div>
               <div className="btn-wrap">
                  <button className="btn p-1 rounded bg-red">
                     BUY TTF Token
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
