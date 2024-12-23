import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import userReducer from "../features/auth";
import genreOrCategoryReducer from "../features/currentGenreOrCategory";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
