import { createSlice } from "@reduxjs/toolkit";
import { OrderItem } from '../models/orderItem';

const initialBasketState = {orders : new Array<OrderItem>()}

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

export const basketActions = basketSlice.actions;
export default basketSlice;