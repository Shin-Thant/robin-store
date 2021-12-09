import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import React from "react";
import logo from "../img/logo-text.svg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";

export const Footer = () => {
    return (
        <Box bg="#3D405B" py="40px" width="100%">
            <Flex
                direction={{ base: "column", lg: "row" }}
                width={{ base: "85%", lg: "90%" }}
                m="auto"
                align={{ base: "center", lg: "flex-start" }}
                gridGap={{
                    base: "2rem",
                    sm: "2.2rem",
                    md: "2.5rem",
                    lg: "4rem",
                }}
            >
                <Flex
                    width={{ base: "100%", lg: "60%" }}
                    justify={{ sm: "space-between" }}
                    align={{ base: "flex-start" }}
                    direction={{ base: "column", md: "row", lg: "column" }}
                    gridGap={{
                        base: "1.8rem",
                        md: "1rem",
                        lg: "2rem",
                    }}
                >
                    <Flex width={{ base: "100%", lg: "100%" }} justify="center">
                        <Image
                            src={logo}
                            alt=""
                            width={{
                                base: "55%",
                                sm: "50%",
                                md: "80%",
                                lg: "85%",
                            }}
                        />
                    </Flex>
                    <Box width={{ base: "100%", lg: "100%" }}>
                        <Text
                            color="#F2CC8F"
                            fontFamily="barlow"
                            fontWeight="bold"
                            fontSize="1.5rem"
                            letterSpacing="0.05em"
                            mb="0.8rem"
                        >
                            Follow Us On
                        </Text>
                        <Flex align="center" gridGap="0.8rem">
                            <Button
                                borderRadius="50%"
                                width="max-content"
                                height="max-content"
                                py="1rem"
                            >
                                <FaFacebookF style={{ color: "#3D405B" }} />
                            </Button>
                            <Button
                                borderRadius="50%"
                                width="max-content"
                                height="max-content"
                                py="1rem"
                            >
                                <BsTwitter style={{ color: "#3D405B" }} />
                            </Button>
                            <Button
                                borderRadius="50%"
                                width="max-content"
                                height="max-content"
                                py="1rem"
                            >
                                <BsInstagram style={{ color: "#3D405B" }} />
                            </Button>
                            <Button
                                borderRadius="50%"
                                width="max-content"
                                height="max-content"
                                py="1rem"
                            >
                                <BsPinterest style={{ color: "#3D405B" }} />
                            </Button>
                        </Flex>
                    </Box>
                </Flex>

                <Flex
                    width={{ sm: "100%", lg: '"60%"' }}
                    direction="column"
                    justify="space-between"
                    gridGap={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}
                >
                    <Flex
                        justify="flex-start"
                        align="flex-start"
                        gridGap={{
                            base: "1.5rem",
                            sm: "2rem",
                            md: "1.8rem",
                            lg: "2rem",
                        }}
                        direction={{ base: "row", lg: "row" }}
                    >
                        <Box>
                            <Text
                                color="#F2CC8F"
                                fontFamily="barlow"
                                fontWeight="bold"
                                fontSize="1.5rem"
                                letterSpacing="0.05em"
                                mb={{
                                    base: "0.5rem",
                                    sm: "1rem",
                                    md: "1.5rem",
                                    lg: "1.2rem",
                                }}
                            >
                                EXPLORE
                            </Text>
                            <Link href="/">
                                <Text
                                    color="#F4F1DE"
                                    fontWeight="600"
                                    fontSize="15px"
                                    mb="0.5rem"
                                >
                                    HOME
                                </Text>
                            </Link>
                            <Link href="/products">
                                <Text
                                    color="#F4F1DE"
                                    fontWeight="600"
                                    fontSize="15px"
                                >
                                    PRODUCTS
                                </Text>
                            </Link>
                        </Box>

                        <Box>
                            <Text
                                color="#F2CC8F"
                                fontFamily="barlow"
                                fontWeight="bold"
                                fontSize="1.5rem"
                                letterSpacing="0.05em"
                                mb={{
                                    base: "0.5rem",
                                    sm: "1rem",
                                    md: "1.5rem",
                                    lg: "1.2rem",
                                }}
                            >
                                CONTACT US
                            </Text>

                            <Flex align="center" mb="0.5rem">
                                <MdEmail
                                    style={{
                                        color: "#F2CC8F",
                                        fontSize: "20px",
                                    }}
                                />
                                <Text
                                    fontSize="15px"
                                    fontWeight="600"
                                    color="#F4F1DE"
                                    ml="10px"
                                >
                                    robinstore@gmail.com
                                </Text>
                            </Flex>
                            <Flex align="center">
                                <BsTelephoneFill
                                    style={{
                                        color: "#F2CC8F",
                                        fontSize: "20px",
                                    }}
                                />
                                <Text
                                    fontSize="15px"
                                    fontWeight="600"
                                    color="#F4F1DE"
                                    ml="10px"
                                >
                                    09 - 34761240780
                                </Text>
                            </Flex>
                        </Box>
                    </Flex>

                    <Box>
                        <Text
                            color="#F2CC8F"
                            fontFamily="barlow"
                            fontWeight="bold"
                            fontSize="1.5rem"
                            letterSpacing="0.05em"
                            mb="1.2rem"
                        >
                            ABOUT US
                        </Text>
                        <Text fontSize="15px" fontWeight="600" color="#F4F1DE">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};
