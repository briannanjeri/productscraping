import { fetchSugarFailure, fetchSugarSuccess,fetchSugarsRequest } from "../actions/SugarAction";
import {AnyAction, Dispatch } from "redux";
import React from "react";


export const fetchSugars = ():any => {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch(fetchSugarsRequest());
    try { 
      const res = await fetch("http://localhost:5000/Sugar");
      if (!res.ok) {
        throw new Error(`Failed to fetch sugars (${res.status})`);
      }
      const sugar = await res.json();
      console.log('Sugar:', sugar);
      dispatch(fetchSugarSuccess(sugar));
    } catch(error: unknown) {
      console.log('Error:', error);
      dispatch(fetchSugarFailure(error as string));
    }
  }
}

// const SugarList = () => {
//     const dispatch = useDispatch();
  
//     useEffect(() => {
//       dispatch(fetchSugars());
//     }, [dispatch]);
  
//     return (
//       <div></div>
//     );
//   };
  
//   export default SugarList;
