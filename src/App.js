import React, {useState, useEffect} from 'react';
import './App.css';
import getGifs from './getGifs';
import Gif from './Components/Gif.js';
import ListOfGif from './Components/ListOfGif';
import Search from './Components/search/Search';
import Detail  from "./Components/Gif_tets"
import logo from './logo.png'

import { Link, Route } from "wouter";

function App() {
  
  return (
    <div className="App">

      <section className="App-content">
        
      

         <Search/>
        <h1> Router </h1>
         
          <Link to='/gif/Europa'>
            Gifs  de Europa
            </Link>
            <Link to='/gif/America'>
            Gifs  de America
            </Link>
            <Link to='/gif/Asia'>
            Gifs  de Asia
            </Link>
           
          


        <Route component={ListOfGif}  type
        path="/gif/:keyword"
        />
        
        <Route  component={Detail} 
                path="/gifdetails/:Id"/>

       </section>
    </div>
  );
}

export default App;
