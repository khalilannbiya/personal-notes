import { FormCreateNote } from "../index ";
const NoteInput = ({ handleSubmit, limit, inputTitle, handleChange, inputBody, onChange }) => {
   return (
      <div className="note-input">
         <h2>Buat Catatan</h2>
         <FormCreateNote handleSubmit={handleSubmit} limit={limit} inputTitle={inputTitle} handleChange={handleChange} inputBody={inputBody} onChange={onChange} />
      </div>
   );
};

export default NoteInput;
