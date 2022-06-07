import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



import Navbar from './component/Navbar';
import Herosection from './component/Hero';
import Experience from './component/Experience';
import data from './component/data';

const App = () => {

  const cards = data.map(item => {
    return (
      <Experience
        img={item.coverImg}
        star={item.Starimage}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        description={item.description}
        price={item.price}
        location={item.location}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className='App'>
      
      <div className='Navbar'>
        <Navbar />
      </div>

      <div className='Hero'>
        <Herosection />
      </div> 

      <div className='Experience'>

        {cards}
      
        
      </div>    

    </div> 
  )
};

export default App;
