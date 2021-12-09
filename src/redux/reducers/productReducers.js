import {
    FETCH_PRODUCTS_FAIL,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCT_FAIL,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_RELATED_PRODUCTS_FAIL,
    FETCH_RELATED_PRODUCTS_REQUEST,
    FETCH_RELATED_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

export const productsReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { loading: true, products: [] };
        case FETCH_PRODUCTS_SUCCESS:
            return { loading: false, products: action.payload };
        case FETCH_PRODUCTS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const singleProductReducers = (state = { product: {} }, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return { loading: true, product: {} };
        case FETCH_PRODUCT_SUCCESS:
            return { loading: false, product: action.payload };
        case FETCH_PRODUCT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const relatedProductsReducers = (
    state = { relatedProducts: [] },
    action
) => {
    switch (action.type) {
        case FETCH_RELATED_PRODUCTS_REQUEST:
            return { relatedLoading: true, relatedProducts: [] };
        case FETCH_RELATED_PRODUCTS_SUCCESS:
            return { relatedLoading: false, relatedProducts: action.payload };
        case FETCH_RELATED_PRODUCTS_FAIL:
            return { relatedLoading: false, relatedError: action.payload };
        default:
            return state;
    }
};
