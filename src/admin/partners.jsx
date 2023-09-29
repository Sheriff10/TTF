import React, { useState } from "react";
import AdminLayout from "./Layout";

const EditPartners = () => {
   const [partnerImages, setPartnerImages] = useState([]);
   const [newImageURL, setNewImageURL] = useState("");

   const handleAddPartnerImage = () => {
      if (newImageURL.trim() !== "") {
         setPartnerImages([
            ...partnerImages,
            { id: Date.now(), imageUrl: newImageURL },
         ]);
         setNewImageURL("");
      }
   };

   const handleDeletePartnerImage = (id) => {
      setPartnerImages((prevImages) =>
         prevImages.filter((image) => image.id !== id)
      );
   };

   return (
      <AdminLayout>
         <div className="container mt-5">
            <h2>Partner Image Editor</h2>

            {/* Partner Image Form */}
            <div className="mt-4">
               <h5>Add New Partner Image</h5>
               <div className="input-group mb-3">
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
               </div>
            </div>

            {/* Display Existing Partner Images */}
            <div className="mt-4">
               <h5>Existing Partner Images</h5>
               <div className="row">
                  {partnerImages.map((partnerImage) => (
                     <div key={partnerImage.id} className="col-md-3 mb-3">
                        <div className="card">
                           <img
                              src={partnerImage.imageUrl}
                              className="card-img-top"
                              alt="Partner"
                           />
                           <div className="card-body">
                              <button
                                 type="button"
                                 className="btn btn-danger btn-sm"
                                 onClick={() =>
                                    handleDeletePartnerImage(partnerImage.id)
                                 }
                              >
                                 Delete
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
