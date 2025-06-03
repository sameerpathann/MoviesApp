import { createSlice } from "@reduxjs/toolkit";
import movies from "../../data/staticMoviesData_with_Unsplash.json";

export const moviesListSlice = createSlice({
  name: "Movies",
  initialState: {
    allMovies: movies,
    filteredMovies: [],
  },
  reducers: {
    filterMovie: (state, action) => {
      const query = action.payload.toLowerCase();
      if (query.length == 0) {
        state.filteredMovies = [];
      } else {
        state.filteredMovies = state.allMovies[0].results.filter((movie) =>
          movie.title.toLowerCase().includes(query)
        );
      }
    },
  },
});

export const { filterMovie } = moviesListSlice.actions;
export default moviesListSlice.reducer;
