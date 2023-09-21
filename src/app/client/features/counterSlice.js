import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };
//Create Slice
const counterSlice = createSlice({
  name: "counterSlice",

  initialState,

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    incrementByAmount: (state, action) => {
      state.count += action.payload.increaseByAmount;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
