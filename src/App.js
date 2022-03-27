import React, {useState, useEffect} from 'react';
import './App.css';
import getGifs from './getGifs';
import Gif from './Components/Gif.js';
import ListOfGif from './Components/ListOfGif';

import { Link, Route } from "wouter";

function App() {
  
  return (
    <div className="App">

      <section className="App-content">
        
<         h1> Router </h1>
         
         
          <Link to='/gif/panda'>
            Gifs  de pandas
            </Link>
            <Link to='/gif/Ecuador'>
            Gifs  de Ecuador
            </Link>
            <Link to='/gif/Chiles'>
            Gifs  de Chiles
            </Link>
           

        <Route component={ListOfGif}  type
        path="/gif/:keyword"
        />
        


       </section>
    </div>
  );
}

export default App;
