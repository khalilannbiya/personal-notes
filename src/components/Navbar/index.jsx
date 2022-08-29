const Navbar = ({ searchInput, onChange }) => {
   return (
      <>
         <nav className="note-app__header">
            <h1>Khalil's Notes</h1>
            <div className="note-search">
               <input value={searchInput} onChange={onChange} type="text" placeholder="Cari catatan..." />
            </div>
         </nav>
      </>
   );
};

export default Navbar;
