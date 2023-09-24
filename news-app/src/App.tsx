import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/Navbar';
import TopStories from './Components/TopStories/TopStories';
import ArticlePage from './Components/ArticlePage/ArticlePage';
import Country from './Components/Country/Country';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Navbar />
      <TopStories/>
      <Footer/>
    </div>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:uri" element={<ArticlePage />} />
          <Route path="/country/:country" element={<Country />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
