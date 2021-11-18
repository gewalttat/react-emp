import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import store from './configureStore'

describe("With React Testing Library", () => {
  it("should set the supplied initial state", () => {
    const store = configureStore({ reducer: rootReducer });
    expect(store.getState()).toEqual({
      movies: {
        loadingState: "initial",
        movies: [],
      },
    });
  });

  it("should set the supplied initial state", () => {
    expect(store.getState()).toEqual({
      movies: {
        loadingState: "initial",
        movies: [],
      },
    });
  });
});
