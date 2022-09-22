import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
    userState: UserReducer,
    articleState: articleReducer, 
});

export default rootReducer;