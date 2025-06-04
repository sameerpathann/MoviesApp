import { createSlice } from "@reduxjs/toolkit";
import Popular from "../../data/Popular.json";
export const PopularSlice = createSlice({
  name: "Popular",
  initialState: {
    PopularMovies: Popular,
    filterPopularMovies: Popular,
  },
  reducers: {
    filterPopular: (state, action) => {
      state.filterPopularMovies[0].results =
        state.PopularMovies[0].results.filter((m) => {
          return m.media_type.toLowerCase() == action.payload.toLowerCase();
        });
    },
  },
});
export default PopularSlice.reducer;

export const { filterPopular } = PopularSlice.actions;
