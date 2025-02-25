import React from 'react';
import './App.css';
import TabelGenerator from "./Tabel.js"
import RendementTabel from "./Tabel_opdelen"

function App() {
  return(
    <div>
      <RendementTabel />
      <TabelGenerator />
      <p>joost</p>
    </div>
  )
}

export default App;
