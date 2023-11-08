
import { useState } from 'react';
import './App.css';

import RandomQuoteComponent from './Components/RandomQuoteComponent';

import SearchQuote from './Components/SearchQuote';


function App() {

  const[results , setResults] =useState([]);
  return (
    <>
   <div >
    <RandomQuoteComponent />
    <SearchQuote />
   </div> 
   </>
  );
}

export default App;
