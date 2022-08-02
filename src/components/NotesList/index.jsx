import { NoteItem } from "../index ";
const NotesList = ({ notes, searchInput, resultBySearch, handleDelete, handleArsip, headingTwo, conditionArchived }) => {
   return (
      <>
         <h2>{headingTwo}</h2>
         {notes.length === 0 || notes.filter((value) => value.archived === conditionArchived).length === 0 ? (
            <p>Tidak ada catatan</p>
         ) : (
            <div className="notes-list">
               {searchInput.length === 0
                  ? notes.map((note) => {
                       {
                          return note.archived === conditionArchived && <NoteItem key={note.id} note={note} handleDelete={handleDelete} handleArsip={handleArsip} />;
                       }
                    })
                  : resultBySearch.map((note) => {
                       {
                          return note.archived === conditionArchived && <NoteItem key={note.id} note={note} handleDelete={handleDelete} handleArsip={handleArsip} />;
                       }
                    })}
            </div>
         )}
      </>
   );
};

export default NotesList;
