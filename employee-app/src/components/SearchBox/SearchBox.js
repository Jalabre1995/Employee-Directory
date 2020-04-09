import React from 'react';
import "../SearchBox/style.css";


function SearchBox ({ handleSearch}) {
    return (
      ///Create a div class fro the searchBox/////
      <div className="searchBox">
          <form className='form-group'>
              <label htmlFor="Search">Search</label>
              <input
              className="form-control"
              type="search"
              placeholder="Search"
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