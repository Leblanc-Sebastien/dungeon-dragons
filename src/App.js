import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import { Outlet } from "react-router-dom";

export default function App() {


  return (
    <div className="App flex">
      <header className="header">
        <Navbar />
      </header>
      <main className="main-section">
        <Outlet />
      </main>
      <footer className="footer"></footer>
    </div>
  )
}

