import axios from "axios";
import React, { useState, useEffect } from "react";
import setModalMaxHeight from "../modal";

import Navbar from "../navbar/Navbar";

import Layout from "../Layout";

import righthand from "../../img/righthand.png";
import lefthand from "../../img/lefthand.png";

import btminus4 from "../../img/btminus4.png"
import bt1 from "../../img/bt1.png"
import bt2 from "../../img/bt2.png"
import btminus1 from "../../img/btminus1.png"
import btminus2 from "../../img/btminus2.png"
import btminus3 from "../../img/btminus3.png"
import bt02 from "../../img/bt02.png"
import bt03 from "../../img/bt03.png"
import bt04 from "../../img/bt04.png"
import bt05 from "../../img/bt05.png"
import bt06 from "../../img/bt06.png"
import bt07 from "../../img/bt07.png"
import bt08 from "../../img/bt08.png"
import bt09 from "../../img/bt09.png"
import bt10 from "../../img/bt10.png"
import bt11 from "../../img/bt11.png"
import bt12 from "../../img/bt12.png"
import bt13 from "../../img/bt13.png"
import oct31 from "../../img/oct31.png"

const imageMap = {
  btminus4: btminus4,
  bt1: bt1,
  bt2: bt2,
  btminus1: btminus1,
  btminus2: btminus2,
  btminus3: btminus3,
  bt02: bt02,
  bt03: bt03,
  bt04: bt04,
  bt05: bt05,
  bt06: bt06,
  bt07: bt07,
  bt08: bt08,
  bt09: bt09,
  bt10: bt10,
  bt11: bt11,
  bt12: bt12,
  bt13: bt13,
  oct31: oct31
}

const HomePage = () => {
  const [notes, setNotes] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null);

  const fetchData = async () => {
    const noteList = await axios.get("http://localhost:8080/service");
    setNotes(noteList.data[0]);
    setShowButton(false);
  };

  const Modal = ({ noteName, noteText, imageNote, closeModal }) => {
    useEffect(() => {
      console.log(noteText);
      const modalContent = document.querySelector(".modal-content");
      if (modalContent && modalContent.scrollHeight) {
        setModalMaxHeight(".modal-content");
      }
    }, [noteText]);

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="flex items-center justify-between py-2 mb-4 border-b">
            <div className="text-gray-800 text-lg font-bold">{noteName}</div>
            <button
              className="px-4 py-2 bg-black text-white rounded-lg"
              onClick={closeModal}
            >
              закрыть
            </button>
          </div>
          <div className="text-base" style={{ whiteSpace: 'pre-line' }}>{noteText}</div>
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

  const LeftSidebar = () => {
    return (
      <>
        {!showButton && (
          <div className="flex flex-col">
            <ul className="flex lg:flex-col flex-wrap gap-3">
              {notes.map((note) => (
                <li
                  key={note.id}
                  onClick={() => handleNoteClick(note)}
                  className={`${
                    note === selectedNote ? " font-bold " : ""
                  } cursor-pointer border p-2 rounded-lg bg-gray-50 lg:bg-transparent lg:p-0 lg:border-none `}
                >
                  {note.noteName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  };

  const RigthSidebar = () => {
    return (
      <div className="rightImageLayout">
        {selectedNote && (
          <img
            src={imageMap[selectedNote.image]}
            alt="base"
            className="note-image h-full object-contain max-w-object-contain"
          />
        )}
      </div>
    );
  };

  const Center = () => {
    return (
      <>
        {!selectedNote && (
          <div className="flex flex-col gap-7 items-center justify-center h-full">
            <h2 className="text-xl font-semibold text-center">
              бессмысленный текст, безымянный, безумный текст, бесполезный
              текст, бессловесный, багровый текст, бывалый, бездомный текст,
              безосудительный текст, больной, белый, балет, берлога, Бостон,
              биполярный, быдло
            </h2>

            <div>
              {showButton && (
                <button
                  className="px-6 py-4 bg-black text-white"
                  onClick={fetchData}
                >
                  Открыть заметки
                </button>
              )}
            </div>
          </div>
        )}

        {selectedNote && (
          <Modal
            noteName={selectedNote.noteName}
            noteText={selectedNote.noteText}
            closeModal={closeModal}
          />
        )}
      </>
    );
  };

  return (
    <div>
      <Navbar />
      <Layout leftSide={LeftSidebar} rightSide={RigthSidebar} center={Center} />
      {showButton && (
        <div>
          <img src={lefthand} alt="base" className="lefthand-image" />
          <img src={righthand} alt="base" className="righthand-image" />
        </div>
      )}
    </div>
  );
};

export default HomePage;
