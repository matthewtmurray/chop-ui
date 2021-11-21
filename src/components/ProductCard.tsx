function ProductCard(props :any) {
    return (
        <div className="card w-75">
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
          {props.description}
        </div>
      </div>
    );
  }
  
  export default ProductCard;