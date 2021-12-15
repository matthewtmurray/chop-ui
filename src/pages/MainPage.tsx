import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Basket from "../components/Basket";
import { OrderItem } from "../models/orderItem";
import { NavBar } from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";

const MainPage = ()=>{

    const dispatch = useDispatch();

    const orders = useSelector((state: any) => state.orders);

    const addHandler = (orders)=>{
        dispatch({ type: 'add', orders: orders});
    };

    const AddToBasket = (item: string) => {
      let foundItem = orders.find((i) => i.itemName === item);
      if (!foundItem) {
        addHandler([...orders, new OrderItem(item, 1)]);
      } else {
        const newarray = orders.map((o) => {
          if (o.itemName === foundItem?.itemName) {
            o.amount = o.amount + 1;
          }
          return o;
        });
  
        addHandler(newarray);
      }
    };
    
    return(
            <div className="App">
            <NavBar/>
            <div className="container">
                <div className="row">
                <div className="col-sm">
                    <ProductCard
                    description="fish soup"
                    title="Fish soup"
                    image="https://picsum.photos/id/123/200/300"
                    click={() => {
                        AddToBasket("Fish Soup");
                    }}
                    />
                </div>
                <div className="col-sm">
                    <ProductCard
                    description="pizza"
                    title="PIZZA"
                    image="https://picsum.photos/id/46/200/300"
                    click={() => {
                        AddToBasket("PIZZA");
                    }}
                    />
                </div>
                <div className="col-sm">
                    <ProductCard
                    description="ham and mustard sandwich"
                    title="Sandwich"
                    image="https://picsum.photos/id/1010/200/300"
                    click={() => {
                        AddToBasket("Sandwich");
                    }}
                    />
                </div>
                <div className="col-sm">
                    <ProductCard
                    description="pie"
                    title="PIE"
                    image="https://picsum.photos/id/25/200/300"
                    click={() => {
                        AddToBasket("PIE");
                    }}
                    />
                </div>
                </div>
            </div>
            
            </div>
    );
}

export default MainPage;