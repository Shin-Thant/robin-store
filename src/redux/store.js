import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const initialState = {
    cart: {
        cartItems: localStorage.getItem("robinCart")
            ? JSON.parse(localStorage.getItem("robinCart"))
            : [],
    },
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
