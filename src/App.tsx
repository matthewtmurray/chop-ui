import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
         <ProductCard description='fish soup' title='Fish Soup'/>
         <ProductCard description='pizza' title='PIZZA'/>
         <ProductCard description='ham sandwich'title='Sandwitch'/>
         <ProductCard description='pie' title='PIE'/>
    </div>
  );
}

export default App;
