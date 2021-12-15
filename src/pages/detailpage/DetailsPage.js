import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
    getRelatedProducts,
    getSingleProduct,
} from "../../redux/actions/productActions";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { Button } from "@chakra-ui/button";
import { addToCart } from "../../redux/actions/cartActions";
import ProductCard from "../../components/ProductCard";
import { useToast } from "@chakra-ui/toast";
import { Loading } from "../../components/Loading/Loading";
import { Divide } from "../../components/Divide";
import { useQuery } from "react-query";
import { getAllProductsRequest } from "../../apis/getAllProducts";

export const DetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const { loading, product } = useSelector((state) => state.singleProduct);

    // const { relatedProducts } = useSelector((state) => state.relatedProducts);

    const { data } = useQuery("getAllProducts", getAllProductsRequest, {
        staleTime: 60000,
    });

    // const [rating, setRating] = useState({});

    const [category, setCategory] = useState("");

    useEffect(() => {
        dispatch(getSingleProduct(id));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (product?.category) {
            setCategory(product.category);
            dispatch(getRelatedProducts(product?.category));
        }
        // eslint-disable-next-line
    }, [product?.category]);

    const toast = useToast();
    const addtoCartHandler = () => {
        dispatch(addToCart(product.id, product, product.price, quantity));

        toast({
            title: "Done Add To Cart!",
            status: "success",
            duration: 2500,
            isClosable: true,
            position: "bottom-left",
        });
    };

    const buyNow = () => {
        dispatch(addToCart(product.id, product, product.price, quantity));
        history.push("/cart");
    };

    const [favorite, setFavorite] = useState(false);

    const favorited = () => {
        setFavorite(true);
        toast({
            title: "Favorited",
            status: "success",
            duration: 1800,
            isClosable: true,
            position: "bottom-right",
        });
    };
    const notFavorite = () => {
        setFavorite(false);
    };

    const [quantity, setQuantity] = useState(1);

    const removeQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <Flex mb="40px" width="100%">
            {loading ? (
                <Loading />
            ) : (
                <Flex
                    direction="column"
                    mt={{ base: "4rem", md: "5rem" }}
                    width="100%"
                >
                    <Flex
                        justify="space-evenly"
                        width={{
                            base: "90%",
                            sm: "85%",
                            md: "80%",
                            lg: "100%",
                        }}
                        direction={{ base: "column", lg: "row" }}
                        mx="auto"
                        gridGap={{ base: "1.8rem", lg: "0" }}
                    >
                        <Flex
                            width={{
                                base: "80%",
                                md: "70%",
                                lg: "40%",
                                xl: "34%",
                            }}
                            bg="#fff"
                            justify="center"
                            height="max-content"
                            py="2rem"
                            px="0"
                            borderRadius="10px"
                            transition="all 300ms ease"
                            mx="auto"
                            _hover={{
                                shadow: "xl",
                            }}
                        >
                            <Image
                                width={{ base: "45%", md: "45%", lg: "50%" }}
                                src={product?.image}
                                objectFit="cover"
                                alt=""
                            />
                        </Flex>

                        <Flex
                            direction="column"
                            gridGap="10px"
                            width={{ base: "100%", lg: "50%" }}
                            px={{ base: "0", lg: "0.5rem" }}
                        >
                            <Flex align="center" gridGap="10px">
                                <Tag
                                    size="md"
                                    colorScheme="gray"
                                    variant="outline"
                                >
                                    Category - {product?.category}
                                </Tag>
                                <Box
                                    bg="white"
                                    borderRadius="full"
                                    width="max-content"
                                    p="8px"
                                    cursor="pointer"
                                    _hover={{
                                        bg: "rgba(255, 255, 255, 0.8)",
                                    }}
                                    onClick={
                                        !favorite ? favorited : notFavorite
                                    }
                                >
                                    {!favorite && (
                                        <AiOutlineHeart
                                            style={{
                                                fontSize: "25px",
                                                color: "#7CB083",
                                            }}
                                        />
                                    )}
                                    {favorite && (
                                        <AiFillHeart
                                            style={{
                                                fontSize: "25px",
                                                color: "#7CB083",
                                            }}
                                        />
                                    )}
                                </Box>
                            </Flex>

                            <Text
                                fontSize={{ base: "1.8rem", md: "2rem" }}
                                letterSpacing="0.05em"
                                fontWeight="600"
                                fontFamily="barlow"
                                color="#7CB083"
                            >
                                {product?.title}
                            </Text>
                            <Text
                                fontSize="16px"
                                fontWeight="500"
                                color="#3D405B"
                            >
                                {product?.description}
                            </Text>
                            <Text
                                fontSize="2rem"
                                color="#3D405B"
                                fontWeight="500"
                                mt="0.8rem"
                            >
                                ${product?.price}
                            </Text>
                            <Flex
                                align="center"
                                fontWeight="bold"
                                fontSize="14px"
                                gridGap="0.8rem"
                            >
                                <Flex
                                    gridGap="5px"
                                    // title={`Rating ${product?.rating.rate}`}
                                >
                                    <BsStarFill
                                        style={{
                                            color: "#FFCA0D",
                                            fontSize: "1rem",
                                        }}
                                    />
                                    <Text
                                        color="#7CB083"
                                        fontSize={{ md: "15px" }}
                                    >
                                        {product?.price}
                                    </Text>
                                </Flex>

                                <Text fontWeight="600" color="#3D405B">
                                    ({product?.price} ratings)
                                </Text>
                            </Flex>

                            <Flex
                                mt="0.8rem"
                                justify="space-between"
                                align="center"
                                width={{
                                    base: "100%",
                                    middle: "70%",
                                    md: "40%",
                                    lg: "40%",
                                    xl: "30%",
                                }}
                                p="8px"
                                borderRadius="8px"
                            >
                                <Button
                                    bg="#f2cc8f"
                                    color="#3D405B"
                                    transition="all 200ms ease"
                                    _hover={{
                                        shadow: "md",
                                    }}
                                    _active={{
                                        backgroundColor: "#e6c084",
                                    }}
                                    onClick={removeQuantity}
                                >
                                    -
                                </Button>
                                <Text
                                    color="#3D405B"
                                    fontSize={{ md: "16px", lg: "19px" }}
                                    fontWeight="600"
                                >
                                    {quantity}
                                </Text>
                                <Button
                                    bg="#f2cc8f"
                                    color="#3D405B"
                                    transition="all 200ms ease"
                                    _hover={{
                                        shadow: "md",
                                    }}
                                    _active={{
                                        backgroundColor: "#e6c084",
                                    }}
                                    onClick={addQuantity}
                                >
                                    +
                                </Button>
                            </Flex>

                            <Flex
                                gridGap={{ base: "10px", md: "20px" }}
                                mt="0.8rem"
                                direction={{ base: "column", middle: "row" }}
                            >
                                <Button
                                    width={{ base: "100%", md: "35%" }}
                                    cursor="pointer"
                                    onClick={addtoCartHandler}
                                    bg="#f2cc8f"
                                    color="#3D405B"
                                    _hover={{
                                        // bg: "#e6c084",
                                        shadow: "md",
                                    }}
                                    _active={{
                                        backgroundColor: "#e6c084",
                                    }}
                                >
                                    Add to Cart
                                </Button>
                                <Button
                                    width={{ base: "100%", md: "35%" }}
                                    _hover={{
                                        bg: "hsla(37, 79%, 75%, 0.2)",
                                        shadow: "md",
                                    }}
                                    _active={{
                                        bg: "#hsla(37, 79%, 75%, 0.2)",
                                    }}
                                    onClick={buyNow}
                                    border="2px solid #f2cc8f"
                                    bg="#F4F1DE"
                                    color="#3D405B"
                                >
                                    Buy Now
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Divide />

                    <Flex width="80%" mx="auto" direction="column">
                        <Text
                            width="100%"
                            fontSize={{
                                base: "1.8rem",
                                sm: "2rem",
                                md: "2.1rem",
                                lg: "2.3rem",
                            }}
                            letterSpacing={{ base: "0.05em", md: "0.08em" }}
                            color="#7CB083"
                            fontWeight="600"
                            fontFamily="barlow"
                            mb="1.5rem"
                            textAlign={{ base: "center", lg: "left" }}
                        >
                            Related Products
                        </Text>

                        {product?.category ? (
                            <Flex
                                flexWrap="wrap"
                                gridGap="20px"
                                mb="40px"
                                justify="center"
                            >
                                {data?.map((p) => {
                                    if (p.category === category) {
                                        return (
                                            <ProductCard
                                                key={p.image}
                                                id={p.id}
                                                product={p}
                                                title={p.title}
                                                image={p.image}
                                                price={p.price}
                                            />
                                        );
                                    }
                                })}
                            </Flex>
                        ) : (
                            <Loading />
                        )}
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};
