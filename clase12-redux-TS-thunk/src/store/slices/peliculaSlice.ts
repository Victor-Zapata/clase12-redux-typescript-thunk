//los slices no son más que funciones que reciben un objeto (con nombre, estado inicial y reducers)

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Pelicula {
  title: string;
  id: number
}

interface PeliculasState {
  estrenos: Pelicula[];
}

const initialState: PeliculasState = {
  estrenos: [],
};

export const peliculaSlice = createSlice({
  name: "pelicula",
  initialState: initialState,
  reducers: {
    getEstrenos: (state, action: PayloadAction<{ estrenos: Pelicula[] }>) => {
      state.estrenos = action.payload.estrenos;
    },
    // getDetails: (state, action: PayloadAction<{ name: string }>) => {
    //     state.detalles = action.payload.detalles;
    // },
    // getTopRated: (state, action: PayloadAction<{ name: string }>) => {
    //     state.topRated = action.payload.topRated
    // },
    // getUpcoming: (state, action: PayloadAction<{ name: string }>) => {
    //     state.upcoming = action.payload.upcoming
    // },
    // getSearchBar: (state, action: PayloadAction<{ name: string }>) => {
    //     state.searchBar = action.payload.searchBar
    // }
  },
});

// Action creators are generated for each case reducer function
export const {
  getEstrenos,
//   getDetails,
//   getTopRated,
//   getUpcoming,
//   getSearchBar,
} = peliculaSlice.actions;
