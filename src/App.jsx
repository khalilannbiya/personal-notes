import "./App.css";
import { getInitialData } from "./utils/index";
import { useState } from "react";
import { Navbar, NoteInput, NotesList, NoteBody } from "./components/index ";

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

         <NoteBody
            handleSubmit={handleSubmit}
            limit={limit}
            inputTitle={inputTitle}
            handleChange={handleChange}
            inputBody={inputBody}
            onChange={(e) => setInputBody(e.target.value)}
            notes={notes}
            searchInput={searchInput}
            resultBySearch={resultBySearch}
            handleDelete={handleDelete}
            handleArsip={handleArsip}
         />
         {/* <div className="note-app__body">
            <NoteInput handleSubmit={handleSubmit} limit={limit} inputTitle={inputTitle} handleChange={handleChange} inputBody={inputBody} onChange={(e) => setInputBody(e.target.value)} />

            <NotesList notes={notes} searchInput={searchInput} resultBySearch={resultBySearch} handleDelete={handleDelete} handleArsip={handleArsip} headingTwo="Catatan Aktif" conditionArchived={false} />

            <NotesList notes={notes} searchInput={searchInput} resultBySearch={resultBySearch} handleDelete={handleDelete} handleArsip={handleArsip} headingTwo="Arsip" conditionArchived={true} />
         </div> */}
      </>
   );
}

export default App;
