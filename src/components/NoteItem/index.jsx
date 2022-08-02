import { showFormattedDate } from "../../utils/index";
const NoteItem = ({ note, handleDelete, handleArsip }) => {
   return (
      <div className="note-item">
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
   );
};

export default NoteItem;
