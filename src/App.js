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
        title={item.title}
        price={item.price}
        img={item.coverImg}
        star={item.Starimage}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
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

      <section className='cards-list'>

        {cards}
      
        
      </section>    

    </div> 
  )
};

export default App;
