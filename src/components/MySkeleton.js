import React from "react";
import { Skeleton, Box } from "@chakra-ui/react";

export const MySkeleton = () => {
    return (
        <Box
            width={{
                base: "90%",
                sm: "82%",
                middle: "75%",
                md: "35%",
                lg: "30%",
                xl: "22%",
            }}
            height="300px"
            borderRadius="20px"
            p="25px"
            bg="#F4F1DE"
            border="1.5px solid #f2cc8f"
        >
            <Skeleton
                width="100%"
                height="150px"
                borderRadius="10px"
                mb="1rem"
            />
            <Skeleton
                width="50%"
                height="25px"
                borderRadius="5px"
                mb="0.5rem"
            />
            <Skeleton
                width="60%"
                height="25px"
                borderRadius="5px"
                mb="0.5rem"
            />
            <Skeleton
                width="100%"
                height="23px"
                borderRadius="5px"
                startColor="#F2CC8F"
                endColor="hsla(37, 79%, 75%, 0.2)"
            />
        </Box>
    );
};
