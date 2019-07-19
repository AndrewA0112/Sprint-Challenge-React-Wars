import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.scss';
import CharacterCard from './components/CharacterCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersList, setCharacterList] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        setCharacterList(response.data.results)
        console.log(response.data.results)
      })
      .catch(error => {
        console.log('Error connecting to API due to ', error)
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
        charactersList.map((character, i) =>
          <CharacterCard
            key = {i}
            character = {character}
          />
      )}
    </div>
  );
}

export default App;
