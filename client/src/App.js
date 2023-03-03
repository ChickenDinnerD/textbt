import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState(null);
  const [showButton, setShowButton] = useState(true);

  const fetchData = async () => {
    const noteList = await axios.get("http://localhost:8080/service");
    setNotes(noteList.data[0]);
    console.log(noteList);
    setShowButton(false);
  };

  const closeModal = () => {
    const modal = document.querySelector(".modal");
    document.body.removeChild(modal);
  };

  return (
    <div id="root" className="App">
      <h1>БТ/</h1>

      <h2>
        бессмысленный текст, безымянный, безумный текст, бесполезный текст,
        бессловесный, багровый текст, бывалый, бездомный текст, безосудительный
        текст, больной, белый, балет, берлога, Бостон, биполярный, быдло
      </h2>

      <div>
        {showButton && (
          <button id="open-notes-button" onClick={fetchData}>
            Открыть заметки
          </button>
        )}

        {notes && (
          <ul id="notes-list">
            {notes.map((note) => (
              <li
                key={note.id}
                onClick={() => {
                  const modal = document.createElement("div");
                  modal.classList.add("modal");
                  const modalContent = document.createElement("div");
                  modalContent.classList.add("modal-content");
                  modalContent.textContent = note.noteText;
                  const closeButton = document.createElement("button");
                  closeButton.textContent = "свернуть(не туда)";
                  closeButton.addEventListener("click", closeModal);
                  modalContent.appendChild(closeButton);
                  modal.appendChild(modalContent);
                  document.body.appendChild(modal);
                }}
              >
                {note.noteName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
