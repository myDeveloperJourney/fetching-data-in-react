import { useState } from 'react'
import * as weatherService from './services/weatherService';
import './App.css'

function App() {
  const fetchData = async () => {
    const data = await weatherService.show('Fort Worth');
    console.log('Data: ', data);
  };
  return (
    <main>
      <h1>Weather API</h1>
      <button onClick={fetchData}>Fetch Weather Data</button>
    </main>
  )
}

export default App
