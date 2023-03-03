import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


function App() {

    const [setNotes] = useState(null)

    const fetchData = async () => {
        const noteList = await service.getNotes();
        setNotes(noteList);
    }

    return (

      <div className="App">

        <h1>БТ/ безымянный</h1>

          <h2>
            бессмысленный текст, безымянный, безумный текст, бесполезный текст, бессловесный,
            багровый текст, бывалый, бездомный текст, безосудительный текст, больной, белый, балет, 
            берлога, Бостон, биполярный, быдло
          </h2>

          <button className="fetch-button" onClick={fetchData}>открыть заметки</button>

          {setNotes.map(((item) => (
              <div key={item.id} className="note">
                <h3>{item.noteName}</h3>
                <p>{item.noteText}</p>
              </div>)))
          }

      </div>
    );
}
    // <div className="App">

    //         <h1>БТ/ безымянный</h1>

    //         <h2>
    //         бессмысленный текст, безымянный, безумный текст, бесполезный текст, бессловесный текст,
    //         багровый, бывалый текст, бездомный текст, безосудительный, больной текст, белый, балет, 
    //         берлога, Бостон, биполярный, быдло
    //         </h2>


    //     <div>
    
            // <button className="fetch-button" onClick={fetchData}>

            // открыть заметки

            // </button>

    //     <br />
    //     </div>


    //   <div className="notes">
    //     {notes &&
    //       notes.map((note, index) => {
    //         // const cleanedDate = new Date(note.released).toDateString();
    //         const name = note.noteName;
    //         const text = note.noteText;

    //           <div className="title">
    //               <p>{name}</p>
    //             </div>

    //         return (
    //           <div className="text" key={index}>
                
    //             <h2>{text}</h2>

    //             </div>
    //         );
    //       })}
    //   </div>
    // </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
