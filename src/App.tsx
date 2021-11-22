import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import { useState } from 'react';
import Basket from './components/Basket';
import { OrderItem } from './models/orderItem';

function App() {

  
  const [order, setOrder] = useState<OrderItem[]>([]);

  const AddToBasket = (item : string)=>{
    let foundItem = order.find(i => i.itemName === item);
    if (!foundItem) {
      setOrder([...order, new OrderItem(item,1)]);
    }
    else{
      order.map((o)=>{
        if (o.itemName === foundItem?.itemName) {
            o.amount = o.amount + 1;
        }
      });
      
      setOrder(order.filter((o)=>o));
      
    }
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
      <Basket items={order}/>
    </div>
  );
}

export default App;
