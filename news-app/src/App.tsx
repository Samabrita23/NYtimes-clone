import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/Navbar';
import TopStories from './Components/TopStories/TopStories';
import ArticlePage from './Components/ArticlePage/ArticlePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Navbar />
      <TopStories/>
    </div>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:section/:subsection" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
