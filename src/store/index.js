import { configureStore } from '@reduxjs/toolkit';
import { cashReducer } from './cashReduce';
import { userReducer } from './userReducer';

export const Store = configureStore({
    reducer: {
        cash: cashReducer, 
        users: userReducer
    }
})