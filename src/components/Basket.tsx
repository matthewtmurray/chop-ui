import { OrderItem } from "../models/orderItem";
import { useSelector } from "react-redux";

function Basket() {

  const orders = useSelector((state: any) => state.basket.orders);

  const borderColour = (itemName:String)=>{
      switch(itemName.toLowerCase()){
        case "pizza":
          return "olive"
        case "sandwich":
            return "blue"
        case "fish soup":
          return "yellow"
        case "pie":
          return "brown"
        default:
          return "red"
      }
  }
  return (
    <div>
      <div style={{ width: "40%", margin: "auto" }}>
        {orders.map((i: OrderItem) => {
          return (
            <div style={{ borderLeft: `50px ${borderColour(i.itemName)} solid`, margin: "5px" }}>
              {i.itemName + " " + i.amount}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Basket;
