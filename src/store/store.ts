
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import basketSlice from './basket';
import counterSlice from './counter';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
        basket: basketSlice.reducer
    }
});

export default store;