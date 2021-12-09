import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Text } from "@chakra-ui/layout";
import React from "react";
import { useQuery } from "react-query";

import menClothing from "../../img/men-clothing.jpg";
import womenClothing from "../../img/women-clothing.jpg";
import electronic2 from "../../img/electronic2.jpg";
import jewellery2 from "../../img/jewellery2.jpg";
import { getPeopleChoicesRequest } from "../../apis/getPeopleChoices";
import { HomePageCards } from "../../components/HomePageCards";
import contact from "../../img/contact-svg.svg";
import store from "../../img/customized-store.svg";
import {
    FormControl,
    FormLabel,
    Input,
    InputLeftAddon,
    InputGroup,
    Textarea,
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import * as yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";
import emailjs from "emailjs-com";
import { BiMessageDetail } from "react-icons/bi";
import { Divide } from "../../components/Divide";

export const HomePage = () => {
    const history = useHistory();

    const { data } = useQuery("people-choices", getPeopleChoicesRequest, {
        staleTime: 600000,
    });

    const goShopping = () => {
        history.push("/products");
    };

    const contactFormSchema = yup.object().shape({
        firstName: yup.string().required("Enter first name!"),

        lastName: yup.string().required("Enter last name!"),

        email: yup
            .string()
            .email("Enter a valid email!")
            .required("Enter your email!"),

        phone: yup
            .number()
            .min(5, "Add at least 5 numbers!")
            .required("Enter your phone number!"),

        suggestion: yup.string().required("Enter your suggestion!"),
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            suggestion: "",
        },
        validationSchema: contactFormSchema,
        onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
            emailjs.send(
                "service_d2l7zps",
                "template_10lrukj",
                values,
                "user_7NS6yEEb6IacyPRSguBEK"
            );

            setSubmitting(false);
            resetForm();
        },
    });

    const { errors, setSubmitting, handleSubmit, getFieldProps } = formik;

    return (
        <Flex
            mb="100px"
            width={{ base: "100%", sm: "100vw", md: "93%", lg: "90%" }}
            mx="auto"
            direction="column"
            px={{ base: "0.6rem", sm: "1rem", md: "0" }}
        >
            {/* <Scroll /> */}
            <Flex
                align={{ base: "center", md: "center", lg: "flex-end" }}
                justify="center"
                direction={{
                    base: "column-reverse",
                    md: "column-reverse",
                    lg: "row",
                }}
                gridGap={{ base: "1.8rem", sm: "2rem" }}
            >
                <Flex
                    direction="column"
                    gridGap="0.8rem"
                    width={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
                    alignSelf={{ md: "flex-end", lg: "flex-end", xl: "center" }}
                    px="0.8rem"
                >
                    <Text
                        fontWeight="600"
                        fontSize={{
                            base: "1.6rem",
                            sm: "1.8rem",
                            md: "2.1rem",
                            lg: "2.3rem",
                        }}
                        letterSpacing={{ base: "0.05em", md: "0.08em" }}
                        color="#7CB083"
                        fontFamily="barlow"
                        mt={{ lg: "3rem", xl: "0" }}
                    >
                        WELCOME FROM ROBIN STORE
                    </Text>
                    <Text
                        width={{ sm: "100%", md: "90%" }}
                        color="#3D405B"
                        fontSize={{ md: "15px" }}
                    >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                    </Text>
                    <Flex gridGap="1rem">
                        <Button
                            _hover={{
                                bg: "#e6c084",
                            }}
                            _active={{
                                backgroundColor: "#e6c084",
                            }}
                            onClick={goShopping}
                            bg="#f2cc8f"
                            color="#3D405B"
                        >
                            Go Shopping
                        </Button>
                        <Button
                            _hover={{
                                bg: "hsla(37, 79%, 75%, 0.2)",
                            }}
                            _active={{
                                backgroundColor: "#hsla(37, 79%, 75%, 0.2)",
                            }}
                            border="2px solid #f2cc8f"
                            bg="#F4F1DE"
                            color="#3D405B"
                        >
                            <a href="#contact-form">Contact us</a>
                        </Button>
                    </Flex>
                </Flex>
                <Flex
                    justify="center"
                    height="max-content"
                    width={{ base: "100%", lg: "45%" }}
                >
                    <Image
                        src={store}
                        alt=""
                        width={{
                            base: "80%",
                            sm: "70%",
                            md: "55%",
                            lg: "100%",
                        }}
                    />
                </Flex>
            </Flex>

            <Divide />

            {/* Category Images */}
            <Flex width="100%" direction="column" justify="space-between">
                <Text
                    fontFamily="barlow"
                    fontWeight="600"
                    fontSize={{
                        base: "1.8rem",
                        sm: "2rem",
                        md: "2.1rem",
                        lg: "2.3rem",
                    }}
                    letterSpacing={{ base: "0.05em", md: "0.08em" }}
                    color="#7CB083"
                    mb="1rem"
                    textAlign={{ base: "center", md: "left" }}
                >
                    TOP CATEGORIES
                </Text>
                <Grid
                    width="100%"
                    height="85%"
                    templateColumns={{
                        middle: "repeat(2, minmax(250px, 1fr))",
                        lg: "repeat(3, minmax(250px, 1fr))",
                    }}
                    templateRows={{ sm: "repeat(2, 1fr)", md: "auto" }}
                    overflow="hidden"
                    gap="0.8rem"
                    // px={{ base: "0.5rem", md: "0" }}
                >
                    <Box height="100%" overflow="hidden" gridRow="span 2">
                        <Image
                            src={jewellery2}
                            alt=""
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            _hover={{
                                transform: "scale(1.15)",
                            }}
                            transition="all 300ms ease"
                            title="Jewellery"
                        />
                    </Box>
                    <Box overflow="hidden">
                        <Image
                            src={menClothing}
                            alt=""
                            width="100%"
                            height={{ sm: "100%" }}
                            _hover={{
                                transform: "scale(1.15)",
                            }}
                            transition="all 300ms ease"
                            title="Men's Clothing"
                        />
                    </Box>
                    <Box overflow="hidden">
                        <Image
                            src={womenClothing}
                            alt=""
                            width="100%"
                            height={{ sm: "100%" }}
                            _hover={{
                                transform: "scale(1.15)",
                            }}
                            transition="all 300ms ease"
                            title="Women's Clothing"
                        />
                    </Box>
                    <Box
                        overflow="hidden"
                        gridColumn={{ sm: "span 2", md: "span 2" }}
                        height="100%"
                    >
                        <Image
                            src={electronic2}
                            alt=""
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            _hover={{
                                transform: "scale(1.15)",
                            }}
                            transition="all 300ms ease"
                            title="Eelectronic"
                        />
                    </Box>
                </Grid>
            </Flex>

            <Divide />

            {/* People Choices */}
            <Flex
                justify="space-between"
                align="center"
                direction={{ base: "column", lg: "row" }}
            >
                <Flex
                    height="100%"
                    width={{ base: "max-content", lg: "20%" }}
                    justify="center"
                    align="center"
                >
                    <Text
                        letterSpacing={{ base: "0.08em", md: "0.12em" }}
                        fontWeight="600"
                        fontSize={{
                            base: "1.6rem",
                            sm: "1.8rem",
                            md: "2.1rem",
                            lg: "2.3rem",
                        }}
                        textAlign="center"
                        color="#7CB083"
                        lineHeight="1.15em"
                        fontFamily="barlow"
                        mb={{ base: "1rem", lg: "0" }}
                    >
                        MOST PEOPLE CHOICES
                    </Text>
                </Flex>
                <Flex
                    borderRight={{ base: "none", lg: "5px solid #F2CC8F" }}
                    px={{ base: "1.5rem", md: "1.8rem", lg: "2.5rem" }}
                    py={{
                        base: "1.5rem",
                        md: "1.8rem",
                        lg: "2rem",
                    }}
                    overflow="auto"
                    gridGap="1.5rem"
                    width={{ base: "100%", lg: "82%" }}
                >
                    {data?.map((product, index) => (
                        <HomePageCards
                            key={product.image}
                            index={index}
                            id={product.id}
                            product={product}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                        />
                    ))}
                </Flex>
            </Flex>

            <Divide />

            {/* Contact section */}
            <Flex direction="column" id="contact-form">
                <Text
                    textAlign="center"
                    fontWeight="600"
                    fontFamily="barlow"
                    fontSize={{
                        base: "1.6rem",
                        sm: "1.8rem",
                        md: "2.1rem",
                        lg: "2.3rem",
                    }}
                    letterSpacing={{ base: "0.05em", md: "0.08em" }}
                    color="#7CB083"
                    display="flex"
                    align="center"
                    justifyContent="center"
                    gridGap="0.5rem"
                >
                    KEEP IN TOUCH WITH US{" "}
                    <BiMessageDetail
                        style={{
                            color: "#F2CC8F",
                            fontSize: "2.5rem",
                        }}
                    />
                </Text>
                <Flex
                    width="100%"
                    height="max-content"
                    mt={{ base: "25px", sm: "30px", md: "50px" }}
                    align="flex-start"
                    justify="space-between"
                    direction={{ base: "column", lg: "row" }}
                    gridGap={{
                        base: "1.8rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "1.8rem",
                    }}
                >
                    <Flex
                        width={{
                            base: "100%",
                            lg: "48%",
                        }}
                        direction="column"
                        gridGap={{ base: "1.5rem", md: "2.5rem" }}
                    >
                        <Image
                            src={contact}
                            alt=""
                            width={{
                                base: "100%",
                                sm: "85%",
                                md: "75%",
                                lg: "95%",
                            }}
                            mx={{ base: "auto", lg: "0" }}
                            display={{ base: "none", lg: "block" }}
                        />
                        <Box
                            width={{ base: "90%", md: "80%", lg: "100%" }}
                            border="2px solid #3D405B"
                            borderRadius="15px"
                            overflow="hidden"
                            mx={{ base: "auto", lg: "0" }}
                            height={{ base: "250px", md: "350px" }}
                            shadow="lg"
                        >
                            <iframe
                                title="company-location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488797.79019538197!2d95.90136685846335!3d16.839609802811214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2z4YCb4YCU4YC64YCA4YCv4YCU4YC6!5e0!3m2!1smy!2smm!4v1638713282487!5m2!1smy!2smm"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                        </Box>
                    </Flex>

                    {/* Form */}
                    <Flex
                        width={{ base: "90%", sm: "80%", lg: "47%" }}
                        mx={{ base: "auto", lg: "0" }}
                        height="100%"
                        align="flex-start"
                        direction="column"
                        boxShadow="2xl"
                        p="1.8rem 1.5rem"
                        borderRadius="15px"
                        bg="#FAF9F0"
                        border="1.5px solid #F2CC8F"
                    >
                        <Text
                            width="100%"
                            textAlign="center"
                            fontSize="1.3rem"
                            fontWeight="semibold"
                            mb="2rem"
                            color="#7CB083"
                        >
                            Contact Us
                        </Text>

                        <Flex direction="column" width="100%" align="center">
                            <FormikProvider value={formik}>
                                <Form onSubmit={handleSubmit}>
                                    <Flex
                                        width="100%"
                                        align="center"
                                        gridGap="2rem"
                                        mb="1.8rem"
                                        direction={{
                                            base: "column",
                                            md: "row",
                                        }}
                                    >
                                        <FormControl>
                                            <FormLabel color="#3D405B">
                                                First Name
                                            </FormLabel>
                                            <Input
                                                display="block"
                                                {...getFieldProps("firstName")}
                                            />
                                            <Text
                                                color="#FC440F"
                                                fontSize="15px"
                                                fontWeight="500"
                                            >
                                                {errors.firstName}
                                            </Text>
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel color="#3D405B">
                                                Last Name
                                            </FormLabel>
                                            <Input
                                                display="block"
                                                {...getFieldProps("lastName")}
                                            />
                                            <Text
                                                color="#FC440F"
                                                fontSize="15px"
                                                fontWeight="500"
                                            >
                                                {errors.lastName}
                                            </Text>
                                        </FormControl>
                                    </Flex>

                                    <FormControl mb="1.8rem">
                                        <FormLabel color="#3D405B">
                                            Email
                                        </FormLabel>
                                        <InputGroup>
                                            <Input
                                                display="block"
                                                {...getFieldProps("email")}
                                            />
                                        </InputGroup>
                                        <Text
                                            color="#FC440F"
                                            fontSize="15px"
                                            fontWeight="500"
                                        >
                                            {errors.email}
                                        </Text>
                                    </FormControl>

                                    <FormControl mb="1.8rem">
                                        <FormLabel color="#3D405B">
                                            Phone Nnumber
                                        </FormLabel>
                                        <InputGroup>
                                            <InputLeftAddon children="+95" />
                                            <Input
                                                display="block"
                                                type="number"
                                                {...getFieldProps("phone")}
                                            />
                                        </InputGroup>
                                        <Text
                                            color="#FC440F"
                                            fontSize="15px"
                                            fontWeight="500"
                                        >
                                            {errors.phone}
                                        </Text>
                                    </FormControl>

                                    <FormControl mb="1.8rem">
                                        <FormLabel color="#3D405B">
                                            What do you want to suggest?
                                        </FormLabel>
                                        <Textarea
                                            {...getFieldProps("suggestion")}
                                        />
                                        <Text
                                            color="#FC440F"
                                            fontSize="15px"
                                            fontWeight="500"
                                        >
                                            {errors.suggestion}
                                        </Text>
                                    </FormControl>

                                    <Button
                                        width="100%"
                                        bg="#F2CC8F"
                                        type="submit"
                                        color="#3D405B"
                                        _hover={{
                                            // backgroundColor: "#e6c084",
                                            shadow: "md",
                                        }}
                                        _active={{
                                            backgroundColor: "#e6c084",
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </FormikProvider>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
