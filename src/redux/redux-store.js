import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {cardsReducer} from "./cards-reducer";
import {chartReducer} from "./chart-reducer";

const rootReducer = combineReducers({
    cards: cardsReducer,
    chart: chartReducer
})

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    composeWithDevTools() ? composeWithDevTools() : f => f
))
