import React from "react";
import { Box, Divider, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    emptyCart,
    removeFromCart,
} from "../../redux/actions/cartActions";
import { useHistory } from "react-router";
import { CheckoutModal } from "../../components/CheckoutModal";
import { useDisclosure } from "@chakra-ui/hooks";
import zero from "../../img/empty-cart.svg";
import { Link } from "react-router-dom";

export const CartPage = () => {
    const history = useHistory();

    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const decreaseQty = (item) => {
        if (item.qty > 1) {
            dispatch(
                addToCart(
                    item.productId,
                    item.product,
                    item.price,
                    item.qty - 1
                )
            );
        }
    };

    const increaseQty = (item) => {
        dispatch(
            addToCart(item.productId, item.product, item.price, item.qty + 1)
        );
    };

    const itemsPrice = cartItems.reduce((a, item) => {
        return a + item.price * item.qty;
    }, 0);

    const discountPrice = itemsPrice > 500 ? itemsPrice * (10 / 100) : 0;
    const taxPrice = itemsPrice * (5 / 100);

    const clearAllCarts = () => {
        dispatch(emptyCart());
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    const goDetails = (id) => {
        history.push(`/product/${id}`);
    };

    return (
        <Flex
            width={{ base: "95%", md: "90%", lg: "80%" }}
            mt={{ base: "3rem", md: "4rem", lg: "5rem" }}
            mb={{ base: "5rem", lg: "6rem" }}
            mx="auto"
            direction={{ base: "column-reverse", xl: "row" }}
            gridGap={{ xlg: "2rem" }}
            justify="space-between"
            position="relative"
        >
            {cartItems?.length ? (
                <>
                    <Box width={{ base: "100%", xl: "63%" }}>
                        <Flex
                            width="100%"
                            justify="space-between"
                            align="center"
                            mb="2rem"
                        >
                            <Text
                                color="#7CB083"
                                fontSize={{
                                    base: "1.5rem",
                                    sm: "1.7rem",
                                    md: "1.8rem",
                                    lg: "2rem",
                                }}
                                letterSpacing={{ base: "0.05em" }}
                                fontWeight="600"
                                fontFamily="barlow"
                            >
                                CART ITEMS
                            </Text>
                            <Button
                                bg="transparent"
                                onClick={clearAllCarts}
                                isDisabled={cartItems.length < 1}
                                color="#7CB083"
                                _hover={{ bg: "transparent", color: "#99C29E" }}
                                fontSize={{
                                    base: "14px",
                                    sm: "15px",
                                    md: "16px",
                                }}
                            >
                                Clear all
                            </Button>
                        </Flex>

                        <Flex
                            direction="column"
                            gridGap={{ base: "1.8rem", md: "2.5rem" }}
                            width="100%"
                        >
                            {cartItems.map((item, index) => (
                                <Flex
                                    width="100%"
                                    key={index}
                                    justify="space-between"
                                    align="center"
                                    direction={{ base: "column", md: "row" }}
                                    bg="white"
                                    borderRadius="15px"
                                    p={{
                                        base: "1rem 1.5rem",
                                        md: "1rem 1.2rem",
                                    }}
                                    transition="all 300ms ease"
                                    _hover={{
                                        shadow: "0px 5px 12px 0px rgba(0,0,0,0.2)",
                                    }}
                                    gridGap="1rem"
                                    position="relative"
                                >
                                    <Flex
                                        gridGap="1.3rem"
                                        align="center"
                                        justify={{ base: "space-around" }}
                                        width={{ base: "100%", md: "45%" }}
                                        p="0.8rem"
                                    >
                                        <Image
                                            src={item.product.image}
                                            width={{ base: "30%", md: "40%" }}
                                            objectFit="cover"
                                            cursor="pointer"
                                            onClick={() =>
                                                goDetails(item.product.id)
                                            }
                                        />

                                        <Text
                                            fontFamily="barlow"
                                            color="#7CB083"
                                            fontSize="1.2rem"
                                            letterSpacing="0.04em"
                                            lineHeight="1.15em"
                                        >
                                            {item.product.title}
                                        </Text>
                                    </Flex>

                                    <Flex
                                        width={{
                                            base: "100%",
                                            md: "max-content",
                                        }}
                                        gridGap="1.3rem"
                                        align="center"
                                        justify="space-between"
                                    >
                                        <Text
                                            fontSize="1.1rem"
                                            fontWeight="500"
                                            color="#3D405B"
                                        >
                                            ${" "}
                                            {(item.price * item.qty).toFixed(2)}
                                        </Text>

                                        <Flex align="center" gridGap="1.5rem">
                                            <Button
                                                bg="#f2cc8f"
                                                color="#3D405B"
                                                transition="all 200ms ease"
                                                _hover={{
                                                    bg: "#e6c084",
                                                    shadow: "md",
                                                }}
                                                _active={{
                                                    backgroundColor: "#e6c084",
                                                }}
                                                onClick={() =>
                                                    decreaseQty(item)
                                                }
                                            >
                                                -
                                            </Button>

                                            <Text color="#3D405B">
                                                {item.qty}
                                            </Text>

                                            <Button
                                                bg="#f2cc8f"
                                                color="#3D405B"
                                                transition="all 200ms ease"
                                                _hover={{
                                                    bg: "#e6c084",
                                                    shadow: "md",
                                                }}
                                                _active={{
                                                    backgroundColor: "#e6c084",
                                                }}
                                                onClick={() =>
                                                    increaseQty(item)
                                                }
                                            >
                                                +
                                            </Button>
                                        </Flex>
                                    </Flex>

                                    <Flex
                                        onClick={() =>
                                            removeFromCartHandler(
                                                item.product.id
                                            )
                                        }
                                        justify="center"
                                        align="center"
                                        cursor="pointer"
                                        position={{
                                            base: "absolute",
                                            md: "relative",
                                        }}
                                        top="0"
                                        right="0"
                                        bg={{
                                            base: "#3D405B",
                                            md: "transparent",
                                        }}
                                        borderRadius={{
                                            base: "15px 15px 15px 50px",
                                            md: "none",
                                        }}
                                        width="max-content"
                                        p={{ base: "0.6rem", md: "0.5rem" }}
                                        color={{
                                            base: "#F2CC8F",
                                            md: "#3D405B",
                                        }}
                                    >
                                        <MdClose
                                            style={{
                                                fontSize: "1.3rem",
                                            }}
                                        />
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </Box>
                    <Box
                        display={{ base: "block", xlg: "none" }}
                        width="95%"
                        mx="auto"
                        my={{ base: "10vh", md: "14vh", lg: "18vh" }}
                        height="1px"
                        bg="#e6c084"
                    ></Box>
                    <Flex
                        direction="column"
                        gridGap="1.5rem"
                        width={{ md: "100%", xl: "33%" }}
                        position="relative"
                    >
                        <Text
                            color="#7CB083"
                            fontSize={{
                                base: "1.5rem",
                                sm: "1.7rem",
                                md: "1.8rem",
                                lg: "2rem",
                            }}
                            letterSpacing={{ base: "0.05em" }}
                            fontWeight="600"
                            fontFamily="barlow"
                            width="100%"
                            textAlign={{
                                base: "left",
                                md: "center",
                                xl: "left",
                            }}
                        >
                            Order Summary
                        </Text>

                        <Flex
                            position="sticky"
                            top="6rem"
                            width={{
                                base: "100%",
                                md: "80%",
                                lg: "75%",
                                xl: "100%",
                            }}
                            mx="auto"
                            shadow="lg"
                            direction="column"
                            borderRadius="20px"
                            gridGap="18px"
                            p="20px"
                            bg="white"
                            color="#3D405B"
                        >
                            <Flex justify="space-between">
                                <Text
                                    fontWeight="500"
                                    fontFamily="barlow"
                                    letterSpacing="0.04em"
                                    fontSize={{
                                        base: "1.2rem",
                                        md: "1.2rem",
                                    }}
                                >
                                    Items Price
                                </Text>
                                <Text
                                    fontWeight="500"
                                    fontSize={{ base: "0.9rem", md: "1rem" }}
                                >
                                    $ {itemsPrice.toFixed(2)}
                                </Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text
                                    fontWeight="500"
                                    fontFamily="barlow"
                                    letterSpacing="0.04em"
                                    fontSize={{
                                        base: "1.2rem",
                                        md: "1.2rem",
                                    }}
                                >
                                    Discount Price
                                </Text>
                                <Text
                                    fontWeight="500"
                                    fontSize={{ base: "0.9rem", md: "1rem" }}
                                >
                                    $ {discountPrice.toFixed(2)}
                                </Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text
                                    fontWeight="500"
                                    fontFamily="barlow"
                                    letterSpacing="0.04em"
                                    fontSize={{
                                        base: "1.2rem",
                                        md: "1.2rem",
                                    }}
                                >
                                    Tax Price
                                </Text>
                                <Text
                                    fontWeight="500"
                                    fontSize={{ base: "0.9rem", md: "1rem" }}
                                >
                                    $ {taxPrice.toFixed(2)}
                                </Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text
                                    fontWeight="500"
                                    fontFamily="barlow"
                                    letterSpacing="0.04em"
                                    fontSize={{
                                        base: "1.2rem",
                                        md: "1.2rem",
                                    }}
                                >
                                    Delivery Price
                                </Text>
                                <Text
                                    fontWeight="500"
                                    fontSize={{ base: "0.9rem", md: "1rem" }}
                                >
                                    $ 10
                                </Text>
                            </Flex>
                            <Divider />
                            <Flex justify="space-between" align="center">
                                <Text
                                    fontWeight="500"
                                    color="#7CB083"
                                    fontSize={{
                                        base: "1.3rem",
                                        md: "1.4rem",
                                        lg: "1.6rem",
                                    }}
                                    fontFamily="barlow"
                                    letterSpacing={{
                                        base: "0.03em",
                                        md: "0.04em",
                                    }}
                                >
                                    Total Price
                                </Text>
                                <Text fontWeight="600" color="#EEBC6D">
                                    ${" "}
                                    {(
                                        itemsPrice +
                                        taxPrice +
                                        10 -
                                        discountPrice
                                    ).toFixed(2)}
                                </Text>
                            </Flex>
                            <Button
                                disabled={cartItems.length < 1}
                                onClick={onOpen}
                                bg="#f2cc8f"
                                color="#3D405B"
                                transition="all 200ms ease"
                                _hover={{
                                    shadow: "lg",
                                }}
                                _active={{
                                    backgroundColor: "#e6c084",
                                }}
                            >
                                Check Out
                            </Button>
                        </Flex>

                        <CheckoutModal isOpen={isOpen} onClose={onClose} />
                    </Flex>{" "}
                </>
            ) : (
                <Flex
                    width="100%"
                    direction="column"
                    align="center"
                    justify="center"
                    gridGap="1.5rem"
                    height={{ base: "60vh", md: "max-content" }}
                >
                    <Image
                        src={zero}
                        alt=""
                        width={{ base: "85%", sm: "70%", md: "60%", lg: "45%" }}
                    />
                    <Flex
                        fontSize="19px"
                        gridGap={{ base: "5px", sm: "10px" }}
                        align="center"
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Text color="#3D405B" fontWeight="500">
                            Your cart is empty!
                        </Text>
                        <Link to="/products">
                            <Text
                                color="#7CB083"
                                cursor="pointer"
                                transition="all 100ms ease"
                                _hover={{ fontWeight: "600" }}
                            >
                                Go Shopping...
                            </Text>
                        </Link>
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};
