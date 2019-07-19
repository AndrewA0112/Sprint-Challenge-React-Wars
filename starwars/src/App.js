import React, { useState, useEffect } from 'react';

import { Button } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './App.scss';

import axios from 'axios'
import CharacterGrid from './components/CharacterGrid';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersList, setCharacterList] = useState([]);
  const [apiResponse, setApiResponse] = useState([])
  const [currentPage, setCurrentPage] = useState('https://swapi.co/api/people/?page=1')

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(currentPage)
      .then(response => {
        setCharacterList(response.data.results)
        console.log(response.data.results)
        setApiResponse(response)

      })
      .catch(error => {
        console.log('Error connecting to API due to ', error)
      })
  }, [currentPage]);

  function handlePrevious() {
    setCurrentPage(apiResponse.data.previous)
    console.log(apiResponse.data.previous)
  }

  function handleNext() {
    setCurrentPage(apiResponse.data.next)
    console.log(apiResponse.data.next)
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterGrid charactersList = {charactersList}/>
      {/* <button onClick={handleChange}>asdasd</button> */}
      <div className='buttons'>
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}

export default App;
