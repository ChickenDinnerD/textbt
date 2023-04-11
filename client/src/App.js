import "./App.css";
import axios from "axios";
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import setModalMaxHeight from "./components/modal";

import Navbar from "./components/navbar/Navbar";

import righthand from "./img/righthand.png"
import lefthand from "./img/lefthand.png"

import btminus4 from "./img/btminus4.png"
import bt1 from "./img/bt1.png"
import bt2 from "./img/bt2.png"
import btminus1 from "./img/btminus1.png"
import btminus2 from "./img/btminus2.png"
import btminus3 from "./img/btminus3.png"

const imageMap = {
  btminus4: btminus4,
  bt1: bt1,
  bt2: bt2,
  btminus1: btminus1,
  btminus2: btminus2,
  btminus3: btminus3
}

export default function App() {
  const [notes, setNotes] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null);

  document.title = "Бт.безімянний";
  
  const fetchData = async () => {
    const noteList = await axios.get("http://localhost:8080/service");
    setNotes(noteList.data[0]);
    setShowButton(false);
  };

  const Modal = ({ noteName, noteText, imageNote, closeModal }) => {
    useEffect(() => {
      const modalContent = document.querySelector(".modal-content");
      if (modalContent && modalContent.scrollHeight) {
        setModalMaxHeight(".modal-content");
      }
    }, [noteText]);
  
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="note-name">{noteName}</div>
          <div>{noteText}</div>
          <button onClick={closeModal}>Закрыть</button>
        </div>
      </div>
    );
  };

  const closeModal = () => {
    setSelectedNote(null);
  };
  
  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  return (
    <div id="root" className="App">
      {selectedNote && <h1>БТ/</h1>}
      <Navbar />

      {showButton && (
        <div>
      <img src={lefthand} alt="base" className="lefthand-image" />
      <img src={righthand} alt="base" className="righthand-image" />
          </div>
      )}

      {selectedNote && (
          <img src={imageMap[selectedNote.image]} alt="base" className="note-image" />
      )}

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
          <div className="notes-container center-notes">
            <ul id="notes-list">
              {notes.map((note) => (
                <li
                  key={note.id}
                  onClick={() => handleNoteClick(note)}
                  className={note === selectedNote ? "selected" : ""}
                >

                  {note.noteName}
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedNote && (
          <Modal
            noteName={selectedNote.noteName}
            noteText={selectedNote.noteText}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
