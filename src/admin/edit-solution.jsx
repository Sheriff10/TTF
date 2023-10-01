import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { post } from "../function/post";
import AdminLayout from "./Layout";

const EditSolution = () => {
   const [cards, setCards] = useState([
      { id: 1, header: "Card 1", text: "This is the content of Card 1" },
      { id: 2, header: "Card 2", text: "This is the content of Card 2" },
      // Add more initial cards as needed
   ]);

   const {
      state: { solution },
      getData,
   } = useContext(DataContext);

   // Cards Inputs
   const [header, setHeader] = useState("");
   const [text, setText] = useState("");

   const [selectedCard, setSelectedCard] = useState(null);
   const [newCard, setNewCard] = useState({ header: "", text: "" });

   const addCard = async (query, data) => {
      try {
         const response = await post(`/solution/${query}`, data);
         console.log(response);
         resetFields()
         getData();
      } catch (error) {
         console.log(error);
      }
   };
   const resetFields = () => {
      setHeader('');
      setText('');
      setSelectedCard(null);
   }

   const selectCard = (cardText, cardHeader, card) => {
      setHeader(cardHeader);
      setText(cardText);
      setSelectedCard(card);
   };

   const handleDeleteCard = () => {
      if (selectedCard) {
         setCards((prevCards) =>
            prevCards.filter((card) => card.id !== selectedCard.id)
         );
         setSelectedCard(null);
         setNewCard({ header: "", text: "" });
      }
   };

   return (
      <AdminLayout>
         <div className="container mt-5 px-5">
            <h2>Edit Solution</h2>

            {/* Card Form */}
            <div className="mt-4">
               <h5>{selectedCard ? "Edit Card" : "Add New Card"}</h5>
               <form>
                  <div className="form-group mb-4">
                     <label htmlFor="cardHeader">Card Header</label>
                     <input
                        type="text"
                        className="form-control"
                        id="cardHeader"
                        placeholder="Enter Card Header"
                        name="header"
                        value={header}
                        onChange={(e) => setHeader(e.target.value)}
                     />
                  </div>
                  <div className="form-group mb-4">
                     <label htmlFor="cardText">Card Text</label>
                     <textarea
                        className="form-control"
                        id="cardText"
                        placeholder="Enter Card Text"
                        name="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                     />
                  </div>
                  {selectedCard ? (
                     <button
                        type="button"
                        className="btn  bg-tblack text-light me-2"
                        onClick={() =>
                           addCard("update", {
                              header,
                              text,
                              id: selectedCard._id,
                           })
                        }
                     >
                        Edit Card
                     </button>
                  ) : (
                     <button
                        type="button"
                        className="btn bg-red text-light mr-2"
                        onClick={() => addCard("post", { header, text })}
                     >
                        Add Card
                     </button>
                  )}
                  {selectedCard && (
                     <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => addCard('delete', {id: selectedCard._id})}
                     >
                        Delete Card
                     </button>
                  )}
               </form>
            </div>

            {/* Display Existing Cards */}
            <div className="mt-4">
               <h5>Existing Cards</h5>
               <div className="card-deck">
                  {solution.map((card) => (
                     <div
                        key={card._id}
                        className={`card ${
                           selectedCard && selectedCard._id === card._id
                              ? "border-primary"
                              : ""
                        } mb-4`}
                        onClick={() => selectCard(card.text, card.header, card)}
                     >
                        <div className="card-body">
                           <h5 className="card-title">{card.header}</h5>
                           <p className="card-text">{card.text}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </AdminLayout>
   );
};

export default EditSolution;
