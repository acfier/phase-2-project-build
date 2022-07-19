import React from "react"; 
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListBooks from "./Components/ListBooks";
import AddBooks from "./Components/AddBooks";

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/books" element={<ListBooks />} />
         <Route path="/books/new" element={<AddBooks />} />
        </Routes>
    </Router>
  );
}

export default App;
