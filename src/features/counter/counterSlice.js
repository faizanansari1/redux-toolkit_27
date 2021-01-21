import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRenderNumber = createAsyncThunk(
  "numbers/fetchRenderNumber",
  async (data, thunkApi) => {
    console.log("FECTH FUNCTION CALL");
    const response = await fetch("/api/rendernumber");
    return await response.json();
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    isLoading: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      if (state.value >= 10) state.value = 0;
    },
    decrement: (state) => {
      state.value -= 1;
      if (state.value <= 1) state.value = 0;
    },
    resateCounter: (state) => {
      state.value = 0;
    },
  },
  extraReducers: {
    [fetchRenderNumber.fulfilled]: (state, action) => {
      console.log("CURRENT STATE", state, action);
      state.value += action.payload;
      state.isLoading = false;
    },
    [fetchRenderNumber.rejected]: (state, action) => {
      console.log("Api Call Rejected");
      state.isLoading = false;
    },
    [fetchRenderNumber.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const { increment, decrement, resateCounter } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispsatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => ({
  value: state.counter.value,
  isLoading: state.counter.isLoading,
});

export default counterSlice.reducer;
