import React, { useContext, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { ScaleLoader } from "react-spinners";
import { DataContext } from "../context/DataContext";
import { post } from "../function/post";
import AdminLayout from "./Layout";

const EditRoadmap = () => {
   const {
      state: { roadmap },
      getData,
   } = useContext(DataContext);

   const [newRoadmap, setNewRoadmap] = useState({
      title: "",
      theories: [""],
   });
   const [loading, setLoading] = useState(false);


   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewRoadmap((prevRoadmap) => ({ ...prevRoadmap, [name]: value }));
   };

   const handleTheoryChange = (index, value) => {
      setNewRoadmap((prevRoadmap) => {
         const newTheories = [...prevRoadmap.theories];
         newTheories[index] = value;
         return { ...prevRoadmap, theories: newTheories };
      });
   };

   const handleAddTheory = () => {
      setNewRoadmap((prevRoadmap) => ({
         ...prevRoadmap,
         theories: [...prevRoadmap.theories, ""],
      }));
   };

   const handleCreateRoadmap = async (query, data) => {
      // Here you can send the newRoadmap object to your backend or handle it as needed
      console.log(newRoadmap);

      try {
        setLoading(true)
         const response = await post(`/roadmap/${query}`, data);
         console.log(response);
         getData();
         setLoading(false)
      } catch (error) {
         console.log(error);
         setLoading(false)
      }
   };

   return (
      <AdminLayout>
         <div className="container er">
            <h2>Create New Roadmap</h2>

            {/* Roadmap Form */}
            <div className="mt-4">
               <div className="mb-3">
                  <label htmlFor="roadmapTitle" className="form-label">
                     Roadmap Title
                  </label>
                  <input
                     type="text"
                     className="form-control"
                     id="roadmapTitle"
                     name="title"
                     value={newRoadmap.title}
                     onChange={handleInputChange}
                  />
               </div>

               {/* Theories List */}
               <div className="mb-3">
                  <label className="form-label">Roadmap Theories</label>
                  {newRoadmap.theories.map((theory, index) => (
                     <div key={index} className="input-group mb-3">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Enter a roadmap theory"
                           value={theory}
                           onChange={(e) =>
                              handleTheoryChange(index, e.target.value)
                           }
                        />
                        <button
                           className="btn btn-outline-secondary"
                           type="button"
                           onClick={handleAddTheory}
                        >
                           +
                        </button>
                     </div>
                  ))}
               </div>

               <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                     handleCreateRoadmap("post", { list: newRoadmap.theories })
                  }
               >
                  Create Roadmap <ScaleLoader
                           loading={loading}
                           height={10}
                           width={1}
                           color={"#fff"}
                        />
               </button>
            </div>

            <div className="mt-4">
               <div className="head">
                  <h3>Existing roadmap</h3>
               </div>
               <div className="row">
                  {roadmap.map((r, index) => (
                     <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>
                        <div className="r-card bg-dark-blur p-4">
                           <div className="head flex mb-2">
                              <span
                                 className="fw-bold fs-4 text-light bg-none"
                                 onClick={() =>
                                    handleCreateRoadmap("delete", { id: r._id })
                                 }
                              >
                                 <BsTrash />
                              </span>
                           </div>
                           <div className="body">
                              <ul className="m-0 p-0">
                                 {r.list.map((i) => (
                                    <li key={i}>{i}</li>
                                 ))}
                              </ul>
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

export default EditRoadmap;
