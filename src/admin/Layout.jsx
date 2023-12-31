import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getToken } from "../function/post";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './YourComponent.css'; // You can create a CSS file for custom styling

const AdminLayout = ({ children }) => {
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      getToken();
   }, []);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const menuFunc = (title, link) => {
      return { title, link };
   };

   const menuArr = [
      menuFunc("Header", "/admin/edit-header"),
      menuFunc("Intro", "/admin/edit-intro"),
      menuFunc("About", "/admin/edit-about"),
      menuFunc("Solution", "/admin/edit-solution"),
      menuFunc("Roadmap", "/admin/edit-roadmap"),
      menuFunc("Partners", "/admin/edit-partners"),
      menuFunc("Feature", "/admin/edit-bot"),
   ];

   return (
      <div className={`d-flex ${isOpen ? "toggled" : ""} bg-white w-100`} id="wrapper">
         {/* Sidebar */}
         <div className=" border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">
               <span className="fw-bold fs-6 text-red">
                  TTF ADMIN DASHBOARD
               </span>
            </div>
            <div className="list-group list-group-flush">
               {menuArr.map((menu, index) => (
                  <NavLink
                     to={menu.link}
                     className="list-group-item list-group-item-action my-2"
                     key={index}
                  >
                     {menu.title}
                  </NavLink>
               ))}
            </div>
         </div>

         {/* Page Content */}
         <div className="col">
            <div className="btn-wrap col-12 bg-dark">
               <button
                  className="btn bg-red text-white m-2"
                  onClick={toggleMenu}
               >
                  <FaBars />
               </button>
            </div>
            <div className="wrap p-5">{children}</div>
         </div>
      </div>
   );
};

export default AdminLayout;
