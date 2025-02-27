import { createSlice } from "@reduxjs/toolkit";

const placesVisitSlice = createSlice({
  name: "placesVisit",
  initialState: {
    visitedPlaces: [],
    status: "idle",
    error: null,
  },
  reducers: {
    markVisit(state, action) {
      state.visitedPlaces.push(action.payload);
      console.log(state.visitedPlaces);
    },
  },
});

export const placesVisitActions = placesVisitSlice.actions;
export const placesVisitReducers = placesVisitSlice.reducer;
