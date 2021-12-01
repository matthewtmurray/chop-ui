import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import Basket from "./components/Basket";
import { OrderItem } from "./models/orderItem";
import { BasketStatus } from "./components/BasketStatus";

function App() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const AddToBasket = (item: string) => {
    let foundItem = order.find((i) => i.itemName === item);
    if (!foundItem) {
      setOrder([...order, new OrderItem(item, 1)]);
    } else {
      const newarray = order.map<OrderItem>((o) => {
        if (o.itemName === foundItem?.itemName) {
          o.amount = o.amount + 1;
        }
        return o;
      });

      setOrder(newarray);
    }
  };

  const getTotal = () => {
    let total = 0;
    order.forEach((o) => {
      total = total + o.amount;
    });
    return total;
  };

  return (
    <div className="App">
      <BasketStatus className="BasketStatus" total={getTotal()} />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <ProductCard
              description="fish soup"
              title="Fish soup"
              image="https://picsum.photos/id/1/200/300"
              click={() => {
                AddToBasket("Fish Soup");
              }}
            />
          </div>
          <div className="col-sm">
            <ProductCard
              description="pizza"
              title="PIZZA"
              image="https://picsum.photos/id/101/200/300"
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
      <Basket items={order} />
    </div>
  );
}

export default App;
