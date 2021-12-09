import { Box, Flex, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import { Image } from "@chakra-ui/image";
import "./homepagecard.css";

export const HomePageCards = ({ id, product, title, image, price }) => {
    const dispatch = useDispatch();
    const toast = useToast();

    const addHandler = () => {
        dispatch(addToCart(id, product, price, 1));

        toast({
            title: "Done Add To Cart!",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "bottom",
            bg: "#7CB083",
        });
    };

    return (
        <Flex
            className="home-cards"
            bg="#F4F1DE"
            shadow="-1rem 0 2rem rgba(0, 0, 0, 0.3)"
            flexDirection="column"
            minWidth="250px"
            justify="space-between"
            width="250px"
            height="460px"
            p="25px"
            borderRadius="20px"
            title={title}
        >
            <Flex
                justify="center"
                height="max-content"
                width="100%"
                height="50%"
                bg="#fff"
                borderRadius="xl"
                py="20px"
                mb="13px"
                transition="all 300ms ease"
                _hover={{
                    shadow: "inset 3px 3px 12px 0px rgba(0,0,0,0.2)",
                }}
            >
                <Image src={image} width="60%" objectFit="contain" />
            </Flex>

            <Box width="100%" mb="13px">
                <Text fontWeight="500" mb="5px" color="#7CB083">
                    {title.length <= 19 ? title : `${title.slice(0, 20)}...`}
                </Text>

                <Text color="#3D405B">$ {price}</Text>
            </Box>

            <button onClick={addHandler} className="btn-link1">
                Add to cart
            </button>

            <Link to={`/product/${id}`} width="100%">
                <button className="btn-link2">View Details</button>
            </Link>
        </Flex>
    );
};
