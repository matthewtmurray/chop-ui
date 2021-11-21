import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
         <ProductCard description='fish soup' title='Fish Soup' image='https://picsum.photos/id/1/200/300'/>
         </div>
         <div className="col-sm">
         <ProductCard description='pizza' title='PIZZA' image='https://picsum.photos/id/101/200/300'/>
         </div>
         <div className="col-sm">
         <ProductCard description='ham sandwich'title='Sandwich' image='https://picsum.photos/id/1010/200/300'/>
         </div>
         <div className="col-sm">
         <ProductCard description='pie' title='PIE' image='https://picsum.photos/id/25/200/300'/>
         </div>
         </div>
      </div>
    </div>
  );
}

export default App;
