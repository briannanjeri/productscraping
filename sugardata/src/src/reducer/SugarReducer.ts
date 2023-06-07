import { FETCH_SUGAR_FAILURE, FETCH_SUGAR_REQUEST,FETCH_SUGAR_SUCCESS } from "../actions/type";
import { SugarState,sugarAction } from "../actions/type";

const initialState:SugarState={
    loading:false,
    sugar:[],
    error:null

}

export const SugarReducer=(state=initialState, action:sugarAction)=>{
    switch(action.type){
        case FETCH_SUGAR_REQUEST:
        return{
            ...state, loading:true
        }
        case FETCH_SUGAR_SUCCESS:
            return{
                ...state,
                sugar:action.payload,
                loading:false
            }
        case FETCH_SUGAR_FAILURE:
            return{
                ...state,
                error:action.error
            } 
        default:
            return state;

    }
}