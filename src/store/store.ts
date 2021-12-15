
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { OrderItem } from '../models/orderItem';

const initialCounterState = {counter: 0, showCounter: true};
const initialAuthState = {isAuthenticated:false};
const initialBasketState = {orders : new Array<OrderItem>()}


const counterSlice = createSlice({
    name: 'counter',
    initialState : initialCounterState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
});

const basketSlice = createSlice({
    name:'basket',
    initialState: initialBasketState,
    reducers: {
        add(state, action){
            state.orders = action.payload;
        },
        remove(state, action){
            let orderItems = new Array<OrderItem>(); 

            for (let index = 0; index < state.orders.length; index++) {
                if (state.orders[index].itemName === action.payload) {
                    orderItems.push(state.orders[index]);
                }
            }

            state.orders = orderItems;
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
        basket: basketSlice.reducer
    }
});

export const counterActions =  counterSlice.actions;
export const authActions =  authSlice.actions;
export const basketActions = basketSlice.actions;
export default store;