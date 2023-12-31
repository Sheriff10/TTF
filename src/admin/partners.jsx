import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { FaImage, FaUpload } from "react-icons/fa";
import { ScaleLoader } from "react-spinners";
import { DataContext } from "../context/DataContext";
import { getToken } from "../function/post";
import AdminLayout from "./Layout";

const EditPartners = () => {
   const {
      state: { partners },
      getData,
   } = useContext(DataContext);

   const [image, setImage] = useState("");
   const [viewImage, setViewImage] = useState(null);
   const [loading, setLoading] = useState(false);

   const fileRef = useRef(null);
   const [link, setLink] = useState("");

   const handleSelectedFile = (val) => {
      setImage(val);

      const validImage = val[0];
      const reader = new FileReader();
      reader.onload = (e) => {
         setViewImage(e.target.result);
      };
      reader.readAsDataURL(validImage);
   };

   const uploadImage = async (query, data) => {
      try {
         setLoading(true);

         if (data.link === "") {
            setLoading(false);
            return alert("Add partner link");
         }

         const response = await axios.post(
            `${window.api}/partners/${query}`,
            data,
            {
               headers: {
                  "auth-pass": getToken(),
                  "Content-Type": "multipart/form-data",
               },
            }
         );
         console.log(response);
         getData();
         setLoading(false);
      } catch (error) {
         console.log(error);
         setLoading(false);
      }
   };
   return (
      <AdminLayout>
         <div className="container">
            <h2>Partner Image Editor</h2>

            {/* Partner Image Form */}
            <div className="mt-4">
               <h5>Add New Partner Image</h5>
               {/* <div className="input-group mb-3">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Enter Image URL"
                     value={newImageURL}
                     onChange={(e) => setNewImageURL(e.target.value)}
                  />
                  <div className="input-group-append">
                     <button
                        className="btn btn-success"
                        type="button"
                        onClick={handleAddPartnerImage}
                     >
                        Add Partner Image
                     </button>
                  </div>
               </div> */}

               <div className="row">
                  <div className="col-lg-6">
                     <div className="add-img  rounded bg-red p-5 text-light">
                        <div className="wrap text-center">
                           <span className="fs-1">
                              <FaImage />
                           </span>{" "}
                           <br />
                           <span
                              className="btn bg-tblack text-light mt-3 px-2"
                              onClick={() => {
                                 fileRef.current.click();
                              }}
                           >
                              Add Partner Image
                           </span>
                           <div className="input-group">
                              <input
                                 type="file"
                                 ref={fileRef}
                                 onChange={(e) =>
                                    handleSelectedFile(e.target.files)
                                 }
                                 className="d-none"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     {viewImage && (
                        <>
                           {/* Input for link */}
                           <div className="form-group mb-3">
                              <label>Partner Link</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Link"
                                 onChange={(e) => setLink(e.target.value)}
                              />
                           </div>
                           <div className="img-wrap">
                              <img
                                 src={viewImage}
                                 alt="Partner"
                                 className="img-fluid"
                              />

                              <div className="btn-wrap mt-3">
                                 <button
                                    className="btn w-100 rounded-pill bg-red text-light"
                                    onClick={() =>
                                       uploadImage("upload", {
                                          Image: image,
                                          link: link,
                                       })
                                    }
                                 >
                                    Upload Image <FaUpload />{" "}
                                    <ScaleLoader
                                       loading={loading}
                                       height={10}
                                       width={1}
                                       color={"#fff"}
                                    />
                                 </button>
                              </div>
                           </div>
                        </>
                     )}
                  </div>
               </div>
            </div>

            {/* Display Existing Partner Images */}
            <div className="mt-4">
               <h5>Existing Partner Images</h5>
               <div className="row">
                  {partners.map((partnerImage) => (
                     <div key={partnerImage._id} className="col-md-3 mb-3">
                        <div className="card">
                           <img
                              src={partnerImage.img}
                              className="card-img-top"
                              alt="Partner"
                           />
                           <div className="card-body">
                              <button
                                 type="button"
                                 className="btn btn-danger btn-sm"
                                 onClick={() =>
                                    uploadImage("delete", {
                                       id: partnerImage._id,
                                    })
                                 }
                              >
                                 Delete
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
                  ))}
               </div>
            </div>
         </div>
      </AdminLayout>
   );
};

export default EditPartners;
