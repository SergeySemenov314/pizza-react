import { applyMiddleware, combineReducers, createStore } from "redux";
import goodsReducer from "./goodsReducer";
import cartReducer from "./cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";



const rootReducer = combineReducers({
    goodsReducer,
    cartReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

