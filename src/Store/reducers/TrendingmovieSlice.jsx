import { createSlice } from "@reduxjs/toolkit";
import trendingMovies from "../../data/trendingMoviesData.json";
export const trendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState: {
    trendingMovies: trendingMovies,
    filterTrendingMovies: trendingMovies,
  },
  reducers: {
    filterTrendingMovie: (state, action) => {
      state.filterTrendingMovies[0].results =
        state.trendingMovies[0].results.filter((m) => {
          return m.media_type.toLowerCase() == action.payload.toLowerCase();
        });
    },
  },
});
export default trendingMoviesSlice.reducer;
export const { filterTrendingMovie } = trendingMoviesSlice.actions;
