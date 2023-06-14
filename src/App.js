import { useState, useEffect } from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form from "./Components/Form/Form"
function App() {

  return (
    <div className="App container">
          <h1>Dungeons & dragons</h1>
          <Form />
    </div>
  );
}

export default App;
