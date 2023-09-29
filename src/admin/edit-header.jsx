import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import AdminLayout from "./Layout";

const EditHeader = () => {
   const [newMenuItem, setNewMenuItem] = useState({ name: "", link: "" });
   const [menuItems, setMenuItems] = useState([]);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewMenuItem((prevItem) => ({ ...prevItem, [name]: value }));
   };

   const handleAddMenuItem = () => {
      setMenuItems((prevMenuItems) => [...prevMenuItems, newMenuItem]);
      setNewMenuItem({ name: "", link: "" });
   };

   const handleDeleteMenuItem = (index) => {
      setMenuItems((prevMenuItems) =>
         prevMenuItems.filter((item, i) => i !== index)
      );
   };

   return (
      <AdminLayout>
         <div className="container mt-2">
            <h2 className="text-red">Edit Header Menu</h2>

            {/* Add New Menu Item */}
            <div className="mt-4 border-1 border-bottom">
               <h5>Add New Menu Item</h5>
               <div className="form-row">
                  <div className="col-md-4 mb-3">
                     <label htmlFor="menuName">Menu Name</label>
                     <input
                        type="text"
                        className="form-control"
                        id="menuName"
                        placeholder="Enter Menu Name"
                        name="name"
                        value={newMenuItem.name}
                        onChange={handleInputChange}
                     />
                  </div>
                  <div className="col-md-4 mb-3">
                     <label htmlFor="menuLink">Menu Link</label>
                     <input
                        type="text"
                        className="form-control"
                        id="menuLink"
                        placeholder="Enter Menu Link"
                        name="link"
                        value={newMenuItem.link}
                        onChange={handleInputChange}
                     />
                  </div>
                  <div className="col-md-4 mb-3">
                     <button
                        className="btn bg-tblack text-light"
                        onClick={handleAddMenuItem}
                     >
                        Add Menu <small><FaPlus className="mb-1"/></small>
                     </button>
                  </div>
               </div>
            </div>

            {/* Display Existing Menu Items */}
            <div className="mt-5">
               <h5>Existing Menu Items</h5>
               <table className="table">
                  <thead>
                     <tr>
                        <th>Menu Name</th>
                        <th>Menu Link</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {menuItems.map((item, index) => (
                        <tr key={index}>
                           <td>{item.name}</td>
                           <td>{item.link}</td>
                           <td>
                              <BsTrash
                                 className="text-danger"
                                 onClick={() => handleDeleteMenuItem(index)}
                              />
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </AdminLayout>
   );
};

export default EditHeader;
