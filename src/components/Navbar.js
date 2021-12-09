import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./navbar.css";
import { MdClose } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";

export const Navbar = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    return (
        <Flex
            shadow="0px 4px 11px 1px rgba(0,0,0,0.25)"
            bg="#7CB083"
            zIndex="10"
            position="sticky"
            top="0"
            left="0"
            right="0"
            width="100%"
            align="center"
            justify="space-between"
            p={{
                base: "8px 20px",
                sm: "10px 25px",
                md: "10px 30px",
                xl: "12px 40px",
            }}
        >
            <Text
                cursor="pointer"
                display={{ base: "block", md: "none" }}
                onClick={openNav}
            >
                {/* color=
                    width="1.7rem"
                    height="1.7rem" */}
                <HiMenuAlt1 style={{ color: "#F4F1DE", fontSize: "1.7rem" }} />
            </Text>

            <Link to="/">
                <Text
                    fontWeight="600"
                    cursor="pointer"
                    display="inline-block"
                    color="#F4F1DE"
                    fontFamily="barlow"
                    fontSize="2.2rem"
                    letterSpacing="0.05em"
                >
                    Robin Store
                </Text>
            </Link>

            <Flex gridGap="25px">
                <Flex
                    display={
                        isOpen ? { md: "flex" } : { base: "none", md: "flex" }
                    }
                    width={{ base: "100%", md: "max-content" }}
                    height={{ base: "100%", md: "max-content" }}
                    position={{ base: "fixed", md: "relative" }}
                    top="0"
                    left="0"
                    bg={{ base: "rgba(0, 0, 0, 0.5)", md: "transparent" }}
                    zIndex={{ base: "100", md: "1" }}
                >
                    <Flex
                        className={isOpen ? "animatedNav open" : "animatedNav"}
                        gridGap="25px"
                        width={{ base: "70%", sm: "65%", md: "max" }}
                        transition="all 200ms ease"
                        transform={
                            isOpen
                                ? "translateX(0)"
                                : {
                                      base: "translateX(-100%)",
                                      md: "translateX(0)",
                                  }
                        }
                        height="100%"
                        bg={{ base: "#F4F1DE", md: "transparent" }}
                        p={{ base: "3rem", md: "0" }}
                        direction={{ base: "column", md: "row" }}
                    >
                        <Box
                            cursor="pointer"
                            onClick={closeNav}
                            alignSelf="flex-end"
                            width="max-content"
                            bg="white"
                            display={{ base: "block", md: "none" }}
                            borderRadius="full"
                            p="5px"
                            _hover={{
                                bg: "rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <MdClose style={{ fontSize: "1.5rem" }} />
                        </Box>
                        <Link to="/">
                            <Text
                                cursor="pointer"
                                fontSize="17px"
                                fontWeight="600"
                                color={{ base: "#3D405B", md: "#F4F1DE" }}
                                fontFamily="barlow"
                                letterSpacing="0.04em"
                                _hover={{
                                    color: { base: "#7CB083", md: "#F2CC8F" },
                                }}
                            >
                                HOME
                            </Text>
                        </Link>
                        <Link to="/products">
                            <Text
                                cursor="pointer"
                                fontSize="17px"
                                fontWeight="600"
                                color={{ base: "#3D405B", md: "#F4F1DE" }}
                                fontFamily="barlow"
                                letterSpacing="0.04em"
                                _hover={{
                                    color: { base: "#7CB083", md: "#F2CC8F" },
                                }}
                            >
                                PRODUCTS
                            </Text>
                        </Link>
                    </Flex>
                </Flex>
                <Flex
                    ml="0.5rem"
                    align="center"
                    cursor="pointer"
                    id="cart-btn-container"
                    zIndex="1"
                >
                    <Link to="/cart">
                        <Text cursor="pointer">
                            <FaShoppingCart
                                style={{ fontSize: "22px", color: "#F4F1DE" }}
                            />
                        </Text>
                        {cartItems?.length > 0 && (
                            <span id="cart-tag">{cartItems?.length}</span>
                        )}
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
};
