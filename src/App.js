import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
        <Route path="/posts/:post_id" component={ Post } />
      </div>
    </BrowserRouter>
  );
}

export default App;
