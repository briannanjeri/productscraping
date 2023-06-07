export const FETCH_SUGAR_REQUEST='FETCH_SUGAR_REQUEST'
export const FETCH_SUGAR_SUCCESS="FETCH_SUGAR_SUCCESS"
export const  FETCH_SUGAR_FAILURE="FETCH_SUGAR_FAILURE"

export interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
  

export interface Sugar{
    id:number,
    name:string,
    price:number,
    qty:number,
    country:string
} 

export interface SugarState{
    sugar:Sugar[]
    loading:Boolean
    error:string | null
} 

export interface FetchSugarRequestAction{
    type: typeof FETCH_SUGAR_REQUEST
}

export interface FetchSugarSuccessAction{
    type: typeof FETCH_SUGAR_SUCCESS
    payload:Sugar[]
}

export interface FetchSugarFailureAction{
    type: typeof FETCH_SUGAR_FAILURE
    error:string
}

export type sugarAction=
|FetchSugarRequestAction
|FetchSugarSuccessAction
|FetchSugarFailureAction