import { combineReducers } from "redux";

import tweets from './tweetReducer';
import login from "./loginReducer";

export default combineReducers({
    tweets,
    login
});