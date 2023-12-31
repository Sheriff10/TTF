import React, { useContext, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { ScaleLoader } from "react-spinners";
import { DataContext } from "../context/DataContext";
import { post } from "../function/post";
import AdminLayout from "./Layout";

const EditHeader = () => {
   const [title, setTitle] = useState("");
   const [link, setLink] = useState("");
   const [loading, setLoading] = useState(false);

   const {
      state: { header },
      getData,
   } = useContext(DataContext);

   const createMenu = async () => {
      setLoading(true);
      try {
         const data = { title, link };
         console.log(data);
         const response = await post("/header/post", data);
         console.log(response);
         getData();
         setLoading(false);
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
   };
   const deleteMenu = async (id) => {
      try {
         setLoading(true)
         const data = { id };
         await post("/header/delete", data);
         getData();
         setLoading(false)
      } catch (error) {
         setLoading(false)
         console.log(error);
      }
   };

   return (
      <AdminLayout>
         <div className="container">
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
                        value={title}
                        onChange={(e) => {
                           setTitle(e.target.value);
                        }}
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
                        value={link}
                        onChange={(e) => {
                           setLink(e.target.value);
                        }}
                     />
                  </div>
                  <div className="col-md-4 mb-3">
                     <button
                        className="btn bg-tblack text-light"
                        onClick={createMenu}
                     >
                        Add Menu{" "}
                        <small>
                           <FaPlus className="mb-1" />
                        </small>
                        <ScaleLoader
                           loading={loading}
                           height={10}
                           width={1}
                           color={"#fff"}
                        />
                     </button>
                  </div>
               </div>
            </div>

            {/* Display Existing Menu Items */}
            <div className="mt-5">
               <h5>Existing Menus</h5>
               <table className="table">
                  <thead>
                     <tr>
                        <th>Title</th>
                        <th>Link</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {header.map((item, index) => (
                        <tr key={index}>
                           <td>{item.title}</td>
                           <td>{item.link}</td>
                           <td className="d-flex">
                              <BsTrash
                                 className="text-danger"
                                 onClick={() => deleteMenu(item._id)}
                              />
                              <ScaleLoader
                                 loading={loading}
                                 height={10}
                                 width={1}
                                 color={"#000"}
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
