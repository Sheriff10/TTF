// import pdf from '../../public/TRIADDAO_whitepaper.pdf'
const Header = () => {
   const toggleMenu = () => {
      const menu = document.querySelector(".menu-btn .menu-btn-burger");
      const slide = document.querySelector(".menu-con");
      if (menu) menu.classList.toggle("open");
      if (slide) slide.classList.toggle("open");
   };
   // menu.addEventListener('click', () => {
   //   menu.classList.add('open')
   //   alert('moti tehh')
   // })
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
                        <li>
                           <a href="#">Home</a>
                        </li>
                        <li>
                           <a href="#about">About</a>
                        </li>
                        <li>
                           <a href="#roadmap">Roadmap</a>
                        </li>
                        <li>
                           <a href="#tk">Tokenomics</a>
                        </li>
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
