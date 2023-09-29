import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './YourComponent.css'; // You can create a CSS file for custom styling

const AdminLayout = ({ children }) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const menuFunc = (title, link) => {
      return { title, link };
   };

   const menuArr = [
      menuFunc("Header", "#"),
      menuFunc("Intro", "#"),
      menuFunc("About", "#"),
      menuFunc("Solution", "#"),
      menuFunc("Partners", "#"),
   ];

   return (
      <div className={`d-flex ${isOpen ? "toggled" : ""} w-100`} id="wrapper">
         {/* Sidebar */}
         <div className=" border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">
               <span className="fw-bold fs-6 text-red">
                  TTF ADMIN DASHBOARD
               </span>
            </div>
            <div className="list-group list-group-flush">
               {menuArr.map((menu, index) => (
                  <a
                     href="#"
                     className="list-group-item list-group-item-action my-2"
                     key={index}
                  >
                     {menu.title}
                  </a>
               ))}
            </div>
         </div>

         {/* Page Content */}
         <div className="col">
            <div className="btn-wrap col-12 bg-dark">
               <button className="btn bg-red text-white m-2" onClick={toggleMenu}>
                  <FaBars />
               </button>
            </div>
            <div className="wrap">{children}</div>

         </div>
      </div>
   );
};

export default AdminLayout;
