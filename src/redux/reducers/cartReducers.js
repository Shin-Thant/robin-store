import {
    ADD_TO_CART,
    CART_EMPTY,
    REMOVE_FROM_CART,
} from "../constants/cartConstants";

export const cartReducers = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const existedItem = state.cartItems.find(
                (cartItem) => cartItem.productId === item.productId
            );

            if (existedItem) {
                return {
                    cartItems: state.cartItems.map((i) =>
                        i.productId === item.productId ? item : i
                    ),
                };
            } else {
                return {
                    cartItems: [...state.cartItems, item],
                };
            }

        case REMOVE_FROM_CART:
            return {
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.productId !== action.payload
                ),
            };

        case CART_EMPTY:
            return {
                cartItems: [],
            };

        default:
            return state;
    }
};
