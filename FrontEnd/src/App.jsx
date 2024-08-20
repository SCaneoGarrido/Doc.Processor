// src/App.jsx
import React from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    
    <BrowserRouter> 
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signUp' element={<SignUpPage/>}/>
        <Route path='/Dashboard' element={<DashboardPage/>}></Route>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
