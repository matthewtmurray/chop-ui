function Basket(props :any) {
    return (
        <div>
            <h1> My Basket </h1>
            <ul>
            {props.items.map((i:string)=>{
                return <li>{i}</li>
            })}
            </ul>
           
        </div>
    );
  }
  
  export default Basket;