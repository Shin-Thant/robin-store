import { combineReducers } from "redux";
import { cartReducers } from "./reducers/cartReducers";
import {
    singleProductReducers,
    productsReducers,
    relatedProductsReducers,
} from "./reducers/productReducers";

export const rootReducer = combineReducers({
    products: productsReducers,
    singleProduct: singleProductReducers,
    relatedProducts: relatedProductsReducers,
    cart: cartReducers,
});
