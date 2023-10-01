import { useContext } from "react";
import { DataContext } from "../context/DataContext";

// import pdf from '../../public/TRIADDAO_whitepaper.pdf'
const Header = () => {
   const toggleMenu = () => {
      const menu = document.querySelector(".menu-btn .menu-btn-burger");
      const slide = document.querySelector(".menu-con");
      if (menu) menu.classList.toggle("open");
      if (slide) slide.classList.toggle("open");
   };

   const {
      state: { header },
      dispatch,
   } = useContext(DataContext);

   return (
      <>
         <header>
            <div className="container px-5 blur-bg rounded-pill">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="logo-con">
                     <img
                        src="/TTFgif.gif"
                        alt="traidDao"
                        className="header-logo"
                     />
                  </div>

                  <div className="menu-con">
                     <ul className="gap-3">
                        {header.map((menu) => (
                           <li>
                              <a href={menu.link}>{menu.title}</a>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="btn-wrap">
                     <a href="#" download>
                        <div className="btn btn-light">whitepaper</div>
                     </a>
                  </div>
                  <div className="menu-btn" onClick={toggleMenu}>
                     <div className="menu-btn-burger"></div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
