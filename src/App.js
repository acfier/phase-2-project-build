import React, { useState, useEffect } from "react"; 
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListBooks from "./Components/ListBooks";
import AddBooks from "./Components/AddBooks"; 
import { baseUrl } from "./Globals";


const App = () => {

  const [books, setBooks ] = useState([])

  useEffect(() => {
    fetch(baseUrl + '/users') 
    .then(resp => resp.json())
    .then(data => setBooks(data))
  }, [])

  

  return (
    <Router>
      <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/books" element={<ListBooks books={books}/>} />
         <Route path="/books/new" element={<AddBooks />} />
        </Routes>
    </Router>
  );
}

export default App;
