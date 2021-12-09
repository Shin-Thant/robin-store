import axios from "axios";

export const fetchRelatedProducts = async ({ queryKey }) => {
    const [_key, { category }] = queryKey;

    const { data } = axios.get(
        `https://fakestoreapi.com/products/category/${category}`
    );
    return data;
};
