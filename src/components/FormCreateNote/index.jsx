const FormCreateNote = ({ handleSubmit, limit, inputTitle, handleChange, inputBody, onChange }) => {
   return (
      <>
         <form action="" onSubmit={handleSubmit}>
            <p className="note-input__title__char-limit">Sisa Karakter: {limit}</p>
            <input value={inputTitle} onChange={handleChange} type="text" className="note-input__title" placeholder="Ini adalah judul ...." required />
            <textarea className="note-input__body" value={inputBody} onChange={onChange} type="text" placeholder="Tuliskan Catatanmu disini ...." required></textarea>
            <button type="submit">Buat</button>
         </form>
      </>
   );
};

export default FormCreateNote;
