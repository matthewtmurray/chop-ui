import "./App.css";
import { Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";
import { Provider } from 'react-redux';
import store from './store/orderStore';
import CounterPage from "./pages/CounterPage";


function App() {

  return (
    <Provider store={ store }>
    <div>
      
      <Route path="/main">
        <MainPage/>
      </Route>
      <Route path="/basket">
        <BasketPage/>
      </Route>
      <Route path="/counter"> 
        <CounterPage/>
      </Route>
    </div>
    </Provider>
  );
}

export default App;
