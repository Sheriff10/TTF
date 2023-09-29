import React from "react";
import { FaTelegram, FaTelegramPlane } from "react-icons/fa";
import AdminLayout from "./Layout";

export default function EditAbout() {
   const about01 =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae id obcaecati ipsa, reiciendis blanditiis facilis temporibus repellendus possimus labore libero at mollitia beatae quam nihil eligendi aspernatur aut voluptatem.";
   return (
      <AdminLayout>
         <div className="container mt-3">
            <h2>Edit About Content</h2>

            {/* About 01 */}
            <div className="mt-4">
               <div className="form-row">
                  <div className="col-md-6 mb-3">
                     <label htmlFor="menuName">Edit About 01</label>
                     <textarea
                        type="text"
                        className="form-control"
                        id="menuName"
                        placeholder="Enter Menu Name"
                        value={about01}
                        rows={4}
                        name="name"
                     />
                     <div className="col-md-4 mt-3">
                        <button className="btn bg-tblack text-light">
                           Update About{" "}
                           <small>
                              <FaTelegramPlane className="mb-1" />
                           </small>
                        </button>
                     </div>
                  </div>
               </div>

               {/* About 02 */}
               <div className="form-row">
                  <div className="col-md-6 mb-3">
                     <label htmlFor="menuName">Edit About 02</label>
                     <textarea
                        type="text"
                        className="form-control"
                        id="menuName"
                        placeholder="Enter Menu Name"
                        value={about01}
                        rows={4}
                        name="name"
                     />
                     <div className="col-md-4 mt-3">
                        <button className="btn bg-tblack text-light">
                           Update About{" "}
                           <small>
                              <FaTelegramPlane className="mb-1" />
                           </small>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}
