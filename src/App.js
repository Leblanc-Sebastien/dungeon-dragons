import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import { Outlet } from "react-router-dom";
import {Provider} from "react-redux"
import { store } from "./redux";

export default function App() {


  return (
    <Provider store={store}> 
      <div className="App flex">
        <header className="header">
          <Navbar />
        </header>
        <main className="main-section">
          <Outlet />
        </main>
        <footer className="footer"></footer>
      </div>
    </Provider>
  )
}

