import { OrderItem } from "../models/orderItem";

function Basket(props: any) {
  return (
    <div>
      <h1> My Basket </h1>
      <div style={{ width: "40%", margin: "auto" }}>
        {props.items.map((i: OrderItem) => {
          return (
            <div style={{ borderLeft: "50px olive solid", margin: "5px" }}>
              {i.itemName + " " + i.amount}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Basket;
