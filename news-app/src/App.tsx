
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/Navbar';
import TopStories from './Components/TopStories/TopStories';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
     <Header></Header>
     <Navbar></Navbar>
     <TopStories></TopStories>
    </div>
    </Router>
  );
}

export default App;