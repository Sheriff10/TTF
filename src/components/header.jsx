import { useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
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
                           <li key={menu._id} onClick={toggleMenu}>
                              <a href={menu.link}>{menu.title}</a>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="btn-wrap">
                     <a href="#" download>
                        <div className="btn bg-purple text-light rounded-pill fw-bold px-3">
                           Try TTF BOT
                        </div>
                     </a>
                  </div>
                  <div className="menu-btn" onClick={toggleMenu}>
                     <div className="menu-btn-burger"></div>
                  </div>
               </div>
            </div>
         </header>
         <div className="float-btn position-fixed bottom-0 end-0 m-3">
            <button className="btn btn-dark rounded-pill px-3">
               <a href="#">
                  <img
                     src="https://pbs.twimg.com/profile_images/1638613862042992640/HYzR9L9j_400x400.jpg"
                     alt="TTF"
                     className="rounded-circle"
                     width={30}
                  />{" "}
                  <span>
                     <FaArrowUp />
                  </span>
               </a>
            </button>
         </div>
      </>
   );
};

export default Header;
