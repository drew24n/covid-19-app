import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {cardsReducer} from "./cards-reducer";
import {chartReducer} from "./chart-reducer";
import {countriesReducer} from "./countries-reducer";
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    cards: cardsReducer,
    chart: chartReducer,
    countries: countriesReducer
})

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    composeWithDevTools() ? composeWithDevTools() : f => f
))
