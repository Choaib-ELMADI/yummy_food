import React, { useState } from 'react';

import { foods, filterItems } from '../data.js';
import MenuItems from './MenuItems';
import './SearchBar.css';



const SearchBar = () => {
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query);

  return (
    <div className='container'>
      <div className='search'>
        <input
          className='search__input'
          placeholder='Search Plat ...'
          value={ query }
          onChange={ e => setQuery(e.target.value) }
        />
      </div>
      <MenuItems items={ results }/>
    </div>
  )
}

export default SearchBar;