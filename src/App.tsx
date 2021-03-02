import React, { useState } from 'react';
import './App.css';
import {GifGrid} from './GifGrid';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <h3>Random PR Gif</h3>
      <p>Click the picture to copy Gif Url to clipboard!</p>
      <GifGrid/>
    </div>
  );
}

export default App;
