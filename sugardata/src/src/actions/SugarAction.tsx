import { FETCH_SUGAR_REQUEST, FETCH_SUGAR_FAILURE, FETCH_SUGAR_SUCCESS,
sugarAction,Sugar } from "./type";


export const fetchSugarsRequest=():sugarAction=>({
    type:FETCH_SUGAR_REQUEST
})
export const fetchSugarSuccess=(sugar:Sugar[]):sugarAction=>({
    type:FETCH_SUGAR_SUCCESS,
    payload:sugar
})
export const fetchSugarFailure=(error:string):sugarAction=>({
    type:FETCH_SUGAR_FAILURE,
    error,   
})



//  export const FetchSugars=async(dispatch:Dispatch)=>{
//    dispatch(FetchSugarsRequest())
//    try{
//    const res=await fetch("http://localhost/5000/Sugar");
//    const data=await res.json();
//    console.log(data);
//    dispatch(FetchSugarSuccess(data))

// }catch(error:unknown){
//     dispatch(FetchSugarFailure(error as string))
// }
// }


