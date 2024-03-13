import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getMovies } from "../store/slices/thunks";

const Peliculas = () => {
  const dispatch = useAppDispatch();
  const estrenos = useAppSelector((state) => state.peliculas.estrenos);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  console.log(estrenos);
  

  return <div>{
    estrenos.map((item) => {
        return <div key={item.id}>{item.title}</div>
    })
    }</div>;
};

export default Peliculas;
