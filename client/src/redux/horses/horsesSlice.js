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
  winners: [],
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
    setWinners: (state, action) => {
      state.winners = [...state.winners, action.payload];
    },
    resetWinners: (state) => {
      state.winners = [];
    },
  },
  extraReducers: {},
});

export default horses.reducer;
export const { subscribe, backToStart, setWinners, resetWinners } =
  horses.actions;
