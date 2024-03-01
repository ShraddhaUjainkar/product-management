import React, { useState } from 'react'

const Searchbar = () => {
    const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };    
  return (
    <div className='search-container'>
        <input
          type="text"
          className="search-area"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
        {search !== '' && <p className='search-label'>You are searching for {search}</p>}    
      </div>
  )
}

export default Searchbar