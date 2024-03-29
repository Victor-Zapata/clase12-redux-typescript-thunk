import { personSlice } from "./slices/personSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { peliculaSlice } from "./slices/peliculaSlice";

export const store = configureStore({
  reducer: {
    person: personSlice.reducer,
    peliculas: peliculaSlice.reducer,
  },
});

//tipado de estado
export type RootState = ReturnType<typeof store.getState>;

//tipado de acciones
export type AppDispatch = typeof store.dispatch;

//me va a retornar acciones a despachar
type DispatchFunction = () => AppDispatch;

export const useAppDispatch: DispatchFunction = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
