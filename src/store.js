import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userAPIreducer from "./reducers/user-api.reducer"
import message from "./reducers/message.reducer";

const middleware = [thunk];
const store = createStore(
	combineReducers({
		userAPIreducer,
		message,
	  }),
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;