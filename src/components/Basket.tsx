import { OrderItem } from "../models/orderItem";

function Basket(props: any) {

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
      <h1> My Basket </h1>
      <div style={{ width: "40%", margin: "auto" }}>
        {props.items.map((i: OrderItem) => {
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
