import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import ProductReducers from "./ProductReducers";

const rootReducer = combineReducers({
  product: ProductReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;