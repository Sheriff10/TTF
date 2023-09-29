import React, { useState } from "react";
import AdminLayout from "./Layout";

const EditSolution = () => {
   const [cards, setCards] = useState([
      { id: 1, header: "Card 1", text: "This is the content of Card 1" },
      { id: 2, header: "Card 2", text: "This is the content of Card 2" },
      // Add more initial cards as needed
   ]);

   const [selectedCard, setSelectedCard] = useState(null);
   const [newCard, setNewCard] = useState({ header: "", text: "" });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewCard((prevCard) => ({ ...prevCard, [name]: value }));
   };

   const handleAddCard = () => {
      setCards((prevCards) => [...prevCards, { id: Date.now(), ...newCard }]);
      setNewCard({ header: "", text: "" });
   };

   const handleEditCard = () => {
      if (selectedCard) {
         setCards((prevCards) =>
            prevCards.map((card) =>
               card.id === selectedCard.id ? { ...card, ...newCard } : card
            )
         );
         setSelectedCard(null);
         setNewCard({ header: "", text: "" });
      }
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
                        value={
                           selectedCard ? selectedCard.header : newCard.header
                        }
                        onChange={handleInputChange}
                     />
                  </div>
                  <div className="form-group mb-4">
                     <label htmlFor="cardText">Card Text</label>
                     <textarea
                        className="form-control"
                        id="cardText"
                        placeholder="Enter Card Text"
                        name="text"
                        value={selectedCard ? selectedCard.text : newCard.text}
                        onChange={handleInputChange}
                     />
                  </div>
                  {selectedCard ? (
                     <button
                        type="button"
                        className="btn  bg-tblack text-light me-2"
                        onClick={handleEditCard}
                     >
                        Edit Card
                     </button>
                  ) : (
                     <button
                        type="button"
                        className="btn bg-red text-light mr-2"
                        onClick={handleAddCard}
                     >
                        Add Card
                     </button>
                  )}
                  {selectedCard && (
                     <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleDeleteCard}
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
                  {cards.map((card) => (
                     <div
                        key={card.id}
                        className={`card ${
                           selectedCard && selectedCard.id === card.id
                              ? "border-primary"
                              : ""
                        } mb-4`}
                        onClick={() => setSelectedCard(card)}
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
