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
        key={item.id}
        item={item}
        // {...item}
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
