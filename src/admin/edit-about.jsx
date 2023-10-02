import { useContext, useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { DataContext } from "../context/DataContext";
import { post } from "../function/post";
import AdminLayout from "./Layout";

export default function EditAbout() {
   const {
      state: { about },
      getData,
   } = useContext(DataContext);

   useEffect(() => {
      setAbout01(about.about01);
      setAbout02(about.about02);
   }, [about.about01, about.about02]);

   const [about01, setAbout01] = useState("");
   const [about02, setAbout02] = useState("");

   const update = async (query, data) => {
      const postData =
         query === "about01"
            ? { about01: data, id: about._id }
            : { about02: data, id: about._id };
      try {
         const response = await post(`/about/${query}`, postData);
         console.log(response)
         getData();
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <AdminLayout>
         <div className="container">
            <h2>Edit About Content</h2>

            {/* About 01 */}
            <div className="mt-4">
               <div className="form-row">
                  <div className="col-lg-6 mb-3">
                     <label htmlFor="menuName" className="fw-bold">
                        Edit About 01
                     </label>
                     <textarea
                        type="text"
                        className="form-control"
                        id="menuName"
                        placeholder="Enter Menu Name"
                        value={about01}
                        onChange={(e) => setAbout01(e.target.value)}
                        rows={4}
                        name="name"
                     />
                     <div className=" mt-3">
                        <button className="btn bg-tblack text-light" onClick={() => update('about01', about01)}>
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
                  <div className="col-lg-6 mt-5">
                     <label htmlFor="menuName" className="fw-bold">
                        Edit About 02
                     </label>
                     <textarea
                        type="text"
                        className="form-control"
                        id="menuName"
                        placeholder="Enter Menu Name"
                        value={about02}
                        onChange={(e) => setAbout02(e.target.value)}
                        rows={4}
                        name="name"
                     />
                     <div className=" mt-3">
                        <button className="btn bg-tblack text-light" onClick={() => update('about02', about02)}>
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
