import { OrderItem } from "../models/orderItem";

function Basket(props :any) {
    return (
        <div>
            <h1> My Basket </h1>
            <ul>
            {props.items.map((i:OrderItem)=>{
                return <li>{i.itemName + " " + i.amount}</li>
            })}
            </ul>
           
        </div>
    );
  }
  
  export default Basket;