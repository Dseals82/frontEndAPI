import { React, useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const handleChange = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearch(searchString)
  };
  //create a new filtered list of monsters
  useEffect(()=> {
    const filterdList = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(search));
    setFilteredMonsters(filterdList)
  },[monsters, search])

  useEffect(()=>{
  //fetch monsters from api endpoint
  try {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      setMonsters(users)
    })
  } catch (error) {
    console.log(error)
  }
  
  },[])

  return (
    <div className="App">
      <h1 className='app-title'>Monsters</h1>
      <SearchBox className='monster-search-box' handleChange={handleChange} placeholder='search monsters...' type='search' />
      <CardList filteredMonsters = {filteredMonsters} />
    </div>
  );

}

export default App;
