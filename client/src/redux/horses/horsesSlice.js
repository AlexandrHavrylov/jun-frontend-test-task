const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  horses: [
    { name: "Princess Diana", distance: 0 },
    { name: "Cricket", distance: 0 },
    { name: "Rebel", distance: 0 },
    { name: "Lucy", distance: 0 },
    { name: "Lacey", distance: 0 },
    { name: "Ginger", distance: 0 },
  ],
  finishers: [],
};

const horses = createSlice({
  name: "horses",
  initialState,
  reducers: {
    subscribe: (state, action) => {
      state.horses = action.payload;
    },
    backToStart: (state) => {
      state.horses = [
        { name: "Princess Diana", distance: 0 },
        { name: "Cricket", distance: 0 },
        { name: "Rebel", distance: 0 },
        { name: "Lucy", distance: 0 },
        { name: "Lacey", distance: 0 },
        { name: "Ginger", distance: 0 },
      ];
    },
    addFinisher: (state, action) => {
      state.finishers = [...state.finishers, action.payload];
    },
    resetFinishers: (state) => {
      state.finishers = [];
    },
  },
  extraReducers: {},
});

export default horses.reducer;
export const { subscribe, backToStart, addFinisher, resetFinishers } =
  horses.actions;
