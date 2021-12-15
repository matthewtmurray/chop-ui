import { createStore, compose } from 'redux';
import { OrderItem } from '../models/orderItem';


const orderReducer = (state = {orders : new Array<OrderItem>()}, action :any) =>{
    if (action.type == 'add') {
        return{
            orders : action.orders
        }
    }

    if (action.type == 'remove') {

        let orderItems = new Array<OrderItem>(); 

        for (let index = 0; index < state.orders.length; index++) {
            if (state.orders[index].itemName === action.itemName) {
                orderItems.push(state.orders[index]);
            }
        }
        
        return {
            orders : orderItems
        };
    }

    return state;
};

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const orderStore = createStore(orderReducer,composeEnhancers());


export default orderStore;