import { Flex } from "@chakra-ui/layout";
import React from "react";
import { useQuery } from "react-query";
import { MySkeleton } from "../../components/MySkeleton";
import ProductCard from "../../components/ProductCard";
import { getAllProductsRequest } from "../../apis/getAllProducts";

export const ProductPage = () => {
    const { isLoading, data } = useQuery(
        "getAllProducts",
        getAllProductsRequest,
        { staleTime: 600000 }
    );

    return (
        <Flex
            flexWrap="wrap"
            justify="center"
            gridGap="25px"
            px={{ base: "1rem", md: "0" }}
            width={{ base: "100%", sm: "90%", lg: "80%" }}
            mt={{ base: "30px", sm: "50px", md: "65px", lg: "70px" }}
            mb="140px"
            mx="auto"
        >
            {isLoading &&
                [0, 1, 2, 3, 4, 5, 6, 7].map((e, index) => (
                    <MySkeleton key={index} />
                ))}
            {data?.length > 0 &&
                data.map((product) => (
                    <ProductCard
                        key={product.image}
                        id={product.id}
                        product={product}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                    />
                ))}
        </Flex>
    );
};
