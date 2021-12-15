import { Provider } from "react-redux";
import Counter from "../components/Counter";
import  store from '../store/index'

const CounterPage = ()=>{
    return(
        <div>
            <Provider store={store}>
                <Counter/>
            </Provider>
        </div>
    );
}

export default CounterPage;