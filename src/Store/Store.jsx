import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./reducers/MoviesList";
import trendingMoviesReducer from "./reducers/TrendingmovieSlice";
import PopularReducer from "./reducers/PopularSlice";

export default configureStore({
  reducer: {
    MoviesReducer: MoviesReducer,
    trendingMoviesReducer: trendingMoviesReducer,
    PopularReducer: PopularReducer,
  },
});
