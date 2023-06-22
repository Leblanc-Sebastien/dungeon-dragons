import { useState, useEffect } from 'react';
import "./App.css";
import Form from "./Components/Form/Form"
function App() {

  return (
    <div className="App flex">
      <header className="header">
        <h1>Dungeons & dragons</h1>
      </header>  
      <section className="section-caracter-table">
        <Form />
      </section>               
      <footer className="footer"></footer>         
    </div>
  );
}

export default App;
