import { useSelector, useDispatch } from "react-redux";
import { counterActions} from '../store/counter';
import { authActions } from '../store/auth';

const Counter = ()=>{
    
    const dispatch = useDispatch();

    const counter = useSelector((state: any) => state.counter.counter);
    const show = useSelector((state: any) => state.counter.showCounter);
    const loggedIn = useSelector((state: any) => state.auth.isAuthenticated);

    const incrementHandler = ()=>{
        dispatch(counterActions.increment());
    };

    const decrementHandler = ()=>{
        dispatch(counterActions.decrement());
    };

    const increaseHandler = ()=>{
        dispatch(counterActions.increase(5));
    }

    const toggleCounter = () => {
        dispatch(counterActions.toggleCounter());
    };

    const logIn = (event)=>{
        event.preventDefault();
        dispatch(authActions.login());
    };

    const logOut = ()=>{
        dispatch(authActions.logout());
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
            { !loggedIn &&
            <button onClick={logIn} className="btn btn-secondary"  style={{margin:"10px"}}>Login</button>
            }
            { loggedIn &&
            <button onClick={logOut} className="btn btn-secondary"  style={{margin:"10px"}}>Logout</button>
            }
        </main>
    );
}

export default Counter;