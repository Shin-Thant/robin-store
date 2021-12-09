import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/toast";
import { Link } from "@chakra-ui/layout";
import { BsStarFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ id, product, title, image, price }) => {
    const dispatch = useDispatch();
    const toast = useToast();

    const addHandler = () => {
        dispatch(addToCart(id, product, price, 1));

        toast({
            title: "Done Add To Cart!",
            status: "success",
            duration: 2500,
            isClosable: true,
            position: "bottom-left",
        });
    };

    const [favorite, setFavorite] = useState(false);

    const favorited = () => {
        setFavorite(true);
        toast({
            title: "Favorited",
            status: "success",
            duration: 1800,
            isClosable: true,
            position: "bottom-left",
        });
    };
    const notFavorite = () => {
        setFavorite(false);
    };

    return (
        <Flex
            bg="#F4F1DE"
            border="1.5px solid #f2cc8f"
            flexDirection="column"
            minWidth="250px"
            justify="space-between"
            // width="250px"
            width={{
                base: "90%",
                sm: "82%",
                middle: "75%",
                md: "18%",
                lg: "22%",
            }}
            // height="460px"
            p="23px"
            borderRadius="20px"
            title={title}
            transition="all 300ms ease"
            _hover={{
                shadow: "0px 5px 11px 2px rgba(0,0,0,0.3)",
            }}
        >
            <Flex
                justify="center"
                height="max-content"
                width="100%"
                height="50%"
                bg="#fff"
                borderRadius="xl"
                py="20px"
                mb="10px"
                transition="all 300ms ease"
                _hover={{
                    shadow: "inset 3px 3px 12px 0px rgba(0,0,0,0.2)",
                }}
            >
                <Image src={image} width="65%" objectFit="contain" />
            </Flex>

            <Box width="100%" mb="15px">
                <Text
                    fontWeight="500"
                    fontSize="20px"
                    letterSpacing="0.05em"
                    lineHeight="1.1em"
                    mb="11px"
                    color="#7CB083"
                    fontFamily="barlow"
                >
                    {/* {title.length <= 19 ? title : `${title.slice(0, 20)}...`} */}
                    {title}
                </Text>

                <Flex justify="space-between" align="flex-start">
                    <Flex direction="column" align="flex-start">
                        <Text color="#3D405B" fontSize="16px" mb="11px">
                            $ {price.toFixed(2)}
                        </Text>

                        <Flex
                            align="center"
                            fontWeight="bold"
                            fontSize="14px"
                            gridGap="0.8rem"
                        >
                            <Flex
                                gridGap="5px"
                                title={`Rating ${product.rating.rate.toFixed(
                                    1
                                )}`}
                            >
                                <BsStarFill
                                    style={{
                                        color: "#FFCA0D",
                                        fontSize: "1rem",
                                    }}
                                />
                                <Text color="#7CB083" fontSize="15px">
                                    {product.rating.rate.toFixed(1)}
                                </Text>
                            </Flex>

                            <Text fontWeight="600" color="#3D405B">
                                ({product.rating.count} ratings)
                            </Text>
                        </Flex>
                    </Flex>
                    <Box
                        bg="white"
                        borderRadius="full"
                        width="max-content"
                        p="8px"
                        cursor="pointer"
                        _hover={{
                            bg: "rgba(255, 255, 255, 0.8)",
                        }}
                        fontSize={{ base: "23px", md: "20px" }}
                        onClick={!favorite ? favorited : notFavorite}
                    >
                        {!favorite && (
                            <AiOutlineHeart
                                style={{
                                    color: "#7CB083",
                                }}
                            />
                        )}
                        {favorite && (
                            <AiFillHeart
                                style={{
                                    color: "#7CB083",
                                }}
                            />
                        )}
                    </Box>
                </Flex>
            </Box>

            <Flex direction="column" gridGap="0.7rem">
                <button onClick={addHandler} className="btn-link1">
                    Add to cart
                </button>

                <Link href={`/product/${id}`} width="100%">
                    <button className="btn-link2">View Details</button>
                </Link>
            </Flex>
        </Flex>
    );
};

export default ProductCard;
