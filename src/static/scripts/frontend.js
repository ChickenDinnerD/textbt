import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


function App() {

    const [notes, setNotes] = useState(null)

    const fetchData = async () => {
        const noteList = service.getNotes();

        setNotes(noteList);
    }

    return (
    <div className="App">

            <h1>БТ/ безымянный</h1>

            <h2>
            бессмысленный текст, безымянный, безумный текст, бесполезный текст, бессловесный текст,
            багровый, бывалый текст, бездомный текст, безосудительный, больной текст, белый, балет, 
            берлога, Бостон, биполярный, быдло
            </h2>


        <div>
    
            <button className="fetch-button" onClick={fetchData}>

            открыть заметки

            </button>

        <br />
        </div>


      <div className="notes">
        {notes &&
          notes.map((note, index) => {
            // const cleanedDate = new Date(book.released).toDateString();
            // const authors = book.authors.join(", ");
            // <div className="details">
            //       <p>{authors}</p>
            //       <p>{book.numberOfPages} pages</p>
            //       <p>🏘{book.country}</p>
            //       <p>{cleanedDate}</p>
            //     </div>
            return (
              <div className="note" key={index}>
                
                <h2>{note.noteName}</h2>
                <h2>{note.noteText}</h2>

                </div>
            );
          })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);





// import React, { useState } from 'react';
// import { service } from './../../service';

// function App() {

//     const [notes, setNotes] = useState(null)

//     const fetchData = async () => {
//         const noteList = service.getNotes();

//         setNotes(noteList);
//     }

//     return (
//         fetchData
//     )
// }

// App();
