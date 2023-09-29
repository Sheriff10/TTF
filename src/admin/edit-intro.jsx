import React from "react";
import { FaImage, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import AdminLayout from "./Layout";

export default function EditIntro() {
   const about01 =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae id obcaecati ipsa, reiciendis blanditiis facilis temporibus repellendus possimus labore libero at mollitia beatae quam nihil eligendi aspernatur aut voluptatem.";
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
                           value={about01}
                           rows={4}
                           name="name"
                        />
                        <div className="col mt-3">
                           <button className="btn bg-tblack btn-sm text-light">
                              Update Title{" "}
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
                           value={about01}
                           rows={4}
                           name="name"
                        />
                        <div className="col mt-3">
                           <button className="btn btn-sm bg-tblack text-light">
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
