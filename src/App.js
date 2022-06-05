import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navbar from './component/Navbar';
import Herosection from './component/Hero';

const App = () => {
  return (
    <div className='App'>
      
      <div className='Navbar'>
        <Navbar />
      </div>

      <div className='Hero'>
        <Herosection />
      </div>  

     </div> 
  )
};

export default App;
