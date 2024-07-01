import  { configureStore } from '@reduxjs/toolkit';

import counter from './Reducer/Couter';
export const store = configureStore({
    reducer: {
        counter
    }
});

