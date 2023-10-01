import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaImage, FaTelegramPlane } from "react-icons/fa";
import { DataContext } from "../context/DataContext";
import { post } from "../function/post";
import AdminLayout from "./Layout";

export default function EditIntro() {
   const {
      state: { intro },
      getData,
   } = useContext(DataContext);
   useEffect(() => {
      setIntro_title(intro.intro_title);
      setIntro_slogan(intro.intro_slogan);
   }, [intro]);
   const [intro_title, setIntro_title] = useState("");
   const [intro_slogan, setIntro_slogan] = useState("");

   const update = async (introQuery, data, type) => {
      try {
         const id = intro._id
         console.log(id)
         const postData =
            type === "title"
               ? { intro_title: data, id }
               : { intro_slogan: data, id };
         const response = await post(`/intro/${introQuery}`, postData);
         console.log(response);
         getData();
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <AdminLayout>
         <div className="container mt-3">
            <h2>Edit About Content</h2>

            <div className="mt-4">
               <div className="d-flex flex-wrap">
                  {/* Edit Title */}
                  <div className="form-row col">
                     <div className="p-4 mb-3">
                        <label className="fw-bold mb-2" htmlFor="menuName">
                           Edit Title
                        </label>
                        <textarea
                           type="text"
                           className="form-control"
                           id="menuName"
                           placeholder="Enter Menu Name"
                           value={intro_title}
                           onChange={(e) => setIntro_title(e.target.value)}
                           rows={4}
                           name="name"
                        />
                        <div className="col mt-3">
                           <button
                              className="btn bg-tblack btn-sm text-light"
                              onClick={() =>
                                 update("intro-title", intro_title, "title")
                              }
                           >
                              Update Title
                              <small>
                                 <FaTelegramPlane className="mb-1" />
                              </small>
                           </button>
                        </div>
                     </div>
                  </div>

                  {/* Edit Slogan */}
                  <div className="form-row col">
                     <div className="p-4 mb-3">
                        <label className="fw-bold mb-2" htmlFor="menuName">
                           Edit slogan
                        </label>
                        <textarea
                           type="text"
                           className="form-control"
                           id="menuName"
                           placeholder="Enter Menu Name"
                           value={intro_slogan}
                           onChange={(e) => setIntro_slogan(e.target.value)}
                           rows={4}
                           name="name"
                        />
                        <div className="col mt-3">
                           <button
                              className="btn btn-sm bg-tblack text-light"
                              onClick={() =>
                                 update("intro-slogan", intro_slogan)
                              }
                           >
                              Update Slogan{" "}
                              <small>
                                 <FaTelegramPlane className="mb-1" />
                              </small>
                           </button>
                        </div>
                     </div>
                  </div>

                  {/* Edit Intro Image */}
                  <div className="col-12">
                     <div className="col-lg-6 bg-dark mx-auto text-center rounded py-3">
                        <div className="image-wrap">
                           <img
                              src="/TTfgif.gif"
                              alt="TTF"
                              className="img-fluid"
                              width={100}
                           />
                        </div>
                        <div className="btn-wrap">
                           <div className="btn bg-tblack text-light">
                              <FaImage /> Edit Image
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}
