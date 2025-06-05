import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./reducers/MoviesList";
import trendingMoviesReducer from "./reducers/TrendingmovieSlice";
import PopularReducer from "./reducers/PopularSlice";
import PeopleReducer from "./reducers/PeoplesSlice";
export default configureStore({
  reducer: {
    MoviesReducer: MoviesReducer,
    trendingMoviesReducer: trendingMoviesReducer,
    PopularReducer: PopularReducer,
    PeopleReducer: PeopleReducer,
  },
});
