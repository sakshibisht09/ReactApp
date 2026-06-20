import { legacy_createStore as createStore, applyMiddleware } from "redux";
import myReducer from "../reducer/myReducer";
import { logger }from "redux-logger";

let myStore = createStore(myReducer, applyMiddleware(logger));

export default myStore;
