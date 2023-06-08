import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [counterState, setCounterState] = useState(0)
  const [msgState, setMsgState] = useState("")

  const incrementCounter = () => {
    setCounterState(counterState + 1)
  }

  useEffect(() => {
    if(counterState > 5){
      setMsgState("Superieur à 5")
    }
    else if(counterState < 5){
      setMsgState("inferieur à 5")
    }
    else{
      setMsgState("")
    }
  }, [counterState])
  

  return (
    <div className="App">
        <button onClick={incrementCounter}>clik enculé {counterState}</button>     
           <div>{msgState}</div>
    </div>
  );
}

export default App;
