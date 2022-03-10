import { applyMiddleware, combineReducers, createStore } from "redux";
import goodsReducer from "./goodsReducer";



const rootReducer = combineReducers({
    goodsReducer,
})

export const store = createStore(rootReducer)
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

