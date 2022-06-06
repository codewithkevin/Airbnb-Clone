import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Image from "./Images/image 12.png";
import Star from "./Images/Star 1-1.png";


import Navbar from './component/Navbar';
import Herosection from './component/Hero';
import Experience from './component/Experience';

const App = () => {
  return (
    <div className='App'>
      
      <div className='Navbar'>
        <Navbar />
      </div>

      <div className='Hero'>
        <Herosection />
      </div> 

      <div className='Experience'>
        <Experience 
          img={Image}
          star={Star}
          title='The Space'
          country='United States'
          rating='4.5'
          prices='$100'
          
        />
        <Experience 
         img={Image}
         star={Star}
         title='The Space'
         country='United States'
         rating='4.5'
         prices='$100'
        />
        <Experience 
          img={Image}
          star={Star}
          title='The Space'
          country='United States'
          rating='4.5'
          prices='$100'
        />
        
      </div>    

    </div> 
  )
};

export default App;
