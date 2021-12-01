function ProductCard(props: any) {
  return (
    <div className="card w-75">
      <img className="card-img-top" src={props.image} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
          <p className="card-text"> {props.description}</p>
          <a href="#/" className="btn btn-primary" onClick={props.click}>Order</a>
        </div>
      </div>
    );
  }
  
  export default ProductCard ;

