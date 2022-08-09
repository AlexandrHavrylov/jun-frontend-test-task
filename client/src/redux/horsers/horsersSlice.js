const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  horsers: [],
};

const horsers = createSlice({
  name: "horsers",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.horsers = action.payload;
    },
  },
  extraReducers: {},
});

export default horsers.reducer;
export const { updateData } = horsers.actions;
