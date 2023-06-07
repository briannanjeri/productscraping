import { legacy_createStore,applyMiddleware } from "redux";
import { SugarReducer } from "./SugarReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const middleware=[thunk]

const store=legacy_createStore(SugarReducer,  composeWithDevTools(applyMiddleware(...middleware)))
export default store