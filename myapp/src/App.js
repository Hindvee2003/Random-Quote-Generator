import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(0);

  function getQuote(){
    try{
      fetch('https://api.quotable.io/random').then(
      response => response.json()).then(
        (quote) => {
          setData(quote);
        }
      )
    }
    catch(e){
      console.log(e);
    }
    
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Random Quote Generator</h1>
        <div className="box">
          <h3 className='quote'>Quote: "{ data.content }"</h3>
          <h4 className='author'>Author: { data.author }</h4>
          <h5 className="author">~ {data.tags}</h5>

        </div>
          <button className='button' onClick={getQuote}>Get Quote</button>
      </header>
    </div>
  );
}

export default App;
