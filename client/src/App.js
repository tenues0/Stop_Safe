import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
// import Footer from "./components/Footer"
// import LeftNavbar from "./components/LeftNavbar"
// import Account from "./components/Account" 
// import Contact from "./components/Contact"
// import Update from "./components/Update"
// import SignupForm from "./components/SignupForm"
import DriverProfile from './DriverProfile';
// import './App.css';

function App() {
  return (
    // <Router>
    <>
    {/* <Router> */}
      <DriverProfile />
      {/* <Routes>
        <Route 
          path='/' 
          element={<DriverProfile />} 
        />
        <Route 
          path='/DriverProfile' 
          element={<DriverProfile />} 
        />
        <Route 
          path='*'
          element={<h1 className='display-2'>Wrong page!</h1>}
        />
      </Routes> */}
      {/* </Router> */}
    </>
  
  );
}

export default App;
