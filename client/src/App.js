import { React, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { createRoot } from 'react-dom/client';

export default function App() {

  const [notes, setNotes] = useState(null)

  const fetchData = async () => {

    const noteList = await axios.get(
        "http://localhost:8080/service"
      )
      setNotes(noteList.data[0]);
    
      console.log(noteList);
  }

  fetchData();


  const notesList = document.getElementById("notes-list");

  function renderNotes() {
    notes.forEach(note => {
      const listItem = document.createElement("li");
      listItem.textContent = note.noteName;
      listItem.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        modalContent.textContent = note.noteText;
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
      });
      notesList.appendChild(listItem);
    });
  }

  const openNotesButton = document.getElementById("open-notes-button");
openNotesButton.addEventListener("click", () => {
  renderNotes();
  openNotesButton.style.display = "none";
});
  openNotesButton.addEventListener("click", renderNotes);


  function AppWithCallbackAfterRender() {
    useEffect(() => {
      console.log('rendered');
    });
  
    return <App tab="home" />
  }

AppWithCallbackAfterRender();

  return (
  <div id="root" className="App">

          <h1>БТ/</h1>

          <h2>
          бессмысленный текст, безымянный, безумный текст, бесполезный текст, бессловесный,
            багровый текст, бывалый, бездомный текст, безосудительный текст, больной, белый, балет, 
            берлога, Бостон, биполярный, быдло
          </h2>


      <div>

      <button id="open-notes-button">Открыть заметки</button>

      </div>

  </div>
);
}

const container = document.getElementById("root")
const root = createRoot(container);
root.render(<App tab="home" />);
