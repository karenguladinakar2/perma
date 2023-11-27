import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
export const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>no of cakes -{numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}> order cake </button>
      <button onClick={() => dispatch(restocked(2))}> restock cake</button>
    </div>
  );
};
