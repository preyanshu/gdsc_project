import './App.css';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import  Home  from './components/Home';
import Userpanel from './components/Userpanel';
import Driverpanel from './components/Driverpanel';
import Signup from './components/Signup';



function App() {
  
  return (
     <>
     
        <Router>
          <Navbar />
          
          
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/userpanel" element={<Userpanel/>} />
              <Route exact path="/driverpanel" element={<Driverpanel></Driverpanel>} />
              <Route exact path="/signup" element={<Signup></Signup>} />
              
              
             
             
            </Routes>
          
        </Router>
      
    </>
  );
}

export default App;