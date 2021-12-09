import axios from "axios";

export const getPeopleChoicesRequest = async () => {
    const { data } = await axios.get(
        "https://fakestoreapi.com/products?limit=7"
    );
    return data;
};
