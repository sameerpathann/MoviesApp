import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./reducers/MoviesList";
import trendingMoviesReducer from "./reducers/TrendingmovieSlice";
export default configureStore({
  reducer: {
    MoviesReducer: MoviesReducer,
    trendingMoviesReducer: trendingMoviesReducer,
  },
});
