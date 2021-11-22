import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import { useState } from 'react';

function App() {

  const [order, setOrder] = useState<string[]>([]);

  const AddToBasket = (item : string)=>{
    console.log(item + ' added');
    setOrder([...order, item]);
    console.log(`current order: ${order.join(',')}`);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
         <ProductCard description='fish soup' title='Fish Soup' image='https://picsum.photos/id/1/200/300' click={()=>{AddToBasket('Fish Soup')}}/>
         </div>
         <div className="col-sm">
         <ProductCard description='pizza' title='PIZZA' image='https://picsum.photos/id/101/200/300' click={()=>{AddToBasket('PIZZA')}}/>
         </div>
         <div className="col-sm">
         <ProductCard description='ham sandwich'title='Sandwich' image='https://picsum.photos/id/1010/200/300' click={()=>{AddToBasket('Sandwich')}}/>
         </div>
         <div className="col-sm">
         <ProductCard description='pie' title='PIE' image='https://picsum.photos/id/25/200/300' click={()=>{AddToBasket('PIE')}}/>
         </div>
         </div>
      </div>
    </div>
  );
}

export default App;
