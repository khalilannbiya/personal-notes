import "./App.css";
import { getInitialData, showFormattedDate } from "./utils/index";
import { useState } from "react";
import { Navbar, NoteInput, NotesList } from "./components/index ";

function App() {
   const [notes, setNotes] = useState(getInitialData());
   const [inputTitle, setInputTitle] = useState("");
   const [inputBody, setInputBody] = useState("");
   const [searchInput, setSearchInput] = useState("");
   const [limit, setLimit] = useState(50);

   const resultBySearch = notes.filter((note) => {
      const noteTitle = note.title.toLowerCase();
      const searchKeyword = searchInput.toLowerCase();

      return noteTitle.includes(searchKeyword);
   });

   function handleChange(e) {
      if (e.target.value.length > 50) {
         setLimit(0);
      } else {
         setInputTitle(e.target.value);
         setLimit(50 - e.target.value.length);
      }
   }

   function handleSubmit(e) {
      e.preventDefault();
      const addedNote = [
         {
            id: +new Date(),
            title: inputTitle,
            body: inputBody,
            createdAt: new Date().toISOString(),
            archived: false,
         },
         ...notes,
      ];
      setNotes(addedNote);
      setInputTitle("");
      setInputBody("");
      setLimit(50);
   }

   function handleDelete(id) {
      const newNotes = [...notes];

      const index = newNotes.findIndex((object) => {
         return object.id === id;
      });

      newNotes.splice(index, 1);
      setNotes(newNotes);
   }

   function handleArsip(id) {
      const newNotes = [...notes];
      const index = newNotes.findIndex((object) => {
         return object.id === id;
      });
      newNotes[index].archived = !newNotes[index].archived;
      setNotes(newNotes);
   }

   return (
      <>
         <Navbar searchInput={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
         <div className="note-app__body">
            <NoteInput handleSubmit={handleSubmit} limit={limit} inputTitle={inputTitle} handleChange={handleChange} inputBody={inputBody} onChange={(e) => setInputBody(e.target.value)} />
            <NotesList notes={notes} searchInput={searchInput} resultBySearch={resultBySearch} handleDelete={handleDelete} handleArsip={handleArsip} />

            <h2>Arsip</h2>
            {notes.length === 0 || notes.filter((value) => value.archived === true).length === 0 ? (
               <p>Tidak ada catatan</p>
            ) : (
               <div className="notes-list">
                  {notes.map((note) => {
                     {
                        return (
                           note.archived && (
                              <div key={note.id} className="note-item">
                                 <div className="note-item__content">
                                    <h3 className="note-item__title">{note.title}</h3>
                                    <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                                    <p className="note-item__body">{note.body}</p>
                                 </div>
                                 <div className="note-item__action">
                                    <button onClick={() => handleDelete(note.id)} className="note-item__delete-button">
                                       Delete
                                    </button>
                                    <button onClick={() => handleArsip(note.id)} className="note-item__archive-button">
                                       {note.archived ? "Pindahkan" : "Arsipkan"}
                                    </button>
                                 </div>
                              </div>
                           )
                        );
                     }
                  })}
               </div>
            )}
         </div>
      </>
   );
}

export default App;
