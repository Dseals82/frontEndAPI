import React from 'react'
import './search-box.styles.css';

const SearchBox = ({ handleChange, placeholder, type, className }) => (
  <div>
      <input className={` search-box ${className}`} placeholder={placeholder} type={type} onChange={handleChange}/>
  </div>
)

export default SearchBox
