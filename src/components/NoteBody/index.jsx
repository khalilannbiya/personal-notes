import { NoteInput, NotesList } from "../index ";
const NoteBody = ({ handleSubmit, limit, inputTitle, handleChange, inputBody, onChange, notes, searchInput, resultBySearch, handleDelete, handleArsip }) => {
   return (
      <div className="note-app__body">
         <NoteInput handleSubmit={handleSubmit} limit={limit} inputTitle={inputTitle} handleChange={handleChange} inputBody={inputBody} onChange={onChange} />

         <NotesList notes={notes} searchInput={searchInput} resultBySearch={resultBySearch} handleDelete={handleDelete} handleArsip={handleArsip} headingTwo="Catatan Aktif" conditionArchived={false} />

         <NotesList notes={notes} searchInput={searchInput} resultBySearch={resultBySearch} handleDelete={handleDelete} handleArsip={handleArsip} headingTwo="Arsip" conditionArchived={true} />
      </div>
   );
};

export default NoteBody;
