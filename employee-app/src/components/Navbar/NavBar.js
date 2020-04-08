import React from 'react';
import SearchBox from '../SearchBox'
import "../Navbar/style.css"


////Create a function to heandle the search change//////
 function Navbar ({ handleSearch}) {
     return (
         <nav className= 'navbar navbar=expand-lg navbar-light bg-light'>
             <button
             className='search'
             type= 'button'
             data-toogle='collapse'
             ////when you search the search box collapses when entering a name///
             data-target="#navbar"
             aira-controls="navBar"
             aria-label="Toogle navigation"
             >
                 <span className='navbar=toogler-icon'/>
             </button>
             <span className= 'input-group-text'id="">
                 DOB
             </span>
             <input type="date" className="form" />
             <input type="date" className="form"/>
             <SearchBox handleSearch={handleSearch} />
             

         </nav>
     )
 }

 export default Navbar;