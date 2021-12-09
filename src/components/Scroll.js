import React from "react";
import { IconButton } from "@chakra-ui/react";
import { BsArrowUp } from "react-icons/bs";

export const Scroll = () => {
    return (
        <IconButton
            display={{ base: "flex", lg: "none" }}
            position="fixed"
            bottom={{ base: "3%", md: "5%" }}
            right={{ base: "5%", md: "3%" }}
            bg="#7CB083"
            aria-label="Call Segun"
            borderRadius="full"
            size="lg"
            color={{ base: "#F2CC8F", lg: "#fff" }}
            zIndex="2"
            _hover={{ bg: "#66A36E" }}
            icon={<BsArrowUp style={{ fontSize: "25px" }} />}
            onClick={() => window.scrollTo(0, 0)}
        />
    );
};
