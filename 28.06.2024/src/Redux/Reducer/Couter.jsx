import { createSlice} from '@reduxjs/toolkit'


const counter = createSlice({
    name : 'counter',
    initialState :0,
    reducers : {
        increment (state ,action){
            return state +=1
        },
        decrement(state,action) {
            return state -=1
        }

    }
});
export const {decrement ,increment} =  counter.actions;

export default counter.reducer;