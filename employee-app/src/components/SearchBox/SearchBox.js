import React from 'react';
import "../SearchBox/stlye.css";


function SearchBox ({ handleSearch}) {
    return (
      ///Create a div class fro the searchBox/////
      <div className="searchBox">
          <form className='form'>
              <input
              className="form-control"
              type="search"
              Placeholder="Search"
              onChnage={e=> handleSearch(e)}
              ///Use a handleSearch method to make sure when the data gets tyoed and submitted that it will return the data retrieved from the API
              />
              
              <button className= "btn" type="submit">
                  Search
              </button>

          </form>
      </div>
    );
}

export default SearchBox;