import { useSelector, useDispatch } from "react-redux";

const Counter = ()=>{
    
    const dispatch = useDispatch();

    const counter = useSelector((state: any) => state.counter);
    const show = useSelector((state: any) => state.showCounter);

    const incrementHandler = ()=>{
        dispatch({ type: 'increment'});
    };

    const decrementHandler = ()=>{
        dispatch({ type: 'decrement'});
    };

    const increaseHandler = ()=>{
        dispatch({ type: 'increase', amount: 5});
    }

    const toggleCounter = () => {
        dispatch({ type: 'toggle'});
    };

    return (
        <main>
            <h1>Redux counter</h1>
            { show && <div>Counter value {counter}</div>}
            <div>
                <button className="btn btn-success" style={{margin:"10px"}} onClick={incrementHandler}>Increment</button>
                <button className="btn btn-danger" style={{margin:"10px"}} onClick={decrementHandler}>Decrement</button>
                <button className="btn btn-warning" style={{margin:"10px"}} onClick={increaseHandler}>Increase by 5</button>
            </div>
            <button onClick={toggleCounter} className="btn btn-primary" style={{margin:"10px"}}>Toggle</button>
        </main>
    );
}

export default Counter;