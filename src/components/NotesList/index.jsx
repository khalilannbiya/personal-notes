import { showFormattedDate } from "../../utils/index";
const NotesList = ({ notes, searchInput, resultBySearch, handleDelete, handleArsip }) => {
   return (
      <>
         <h2>Catatan Aktif</h2>

         {notes.length === 0 || notes.filter((value) => value.archived === false).length === 0 ? (
            <p>Tidak ada catatan</p>
         ) : (
            <div className="notes-list">
               {searchInput.length === 0
                  ? notes.map((note) => {
                       {
                          return (
                             !note.archived && (
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
                    })
                  : resultBySearch.map((note) => {
                       {
                          return (
                             !note.archived && (
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
      </>
   );
};

export default NotesList;
