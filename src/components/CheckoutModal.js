import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Button,
    Flex,
    Text,
    Image,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/actions/cartActions";
import { useHistory } from "react-router";
import horn from "../img/party-horn.png";

export const CheckoutModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const closeModal = () => {
        onClose();
        dispatch(emptyCart());
        history.push("/products");
    };

    return (
        <Modal
            isCentered
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Flex direction="column" align="center" py="3rem">
                        <Image src={horn} alt="" width="50%" mb="1rem" />

                        <Text
                            fontSize="20px"
                            fontWeight="500"
                            color="#7CB083"
                            mt="5px"
                            mb="10px"
                        >
                            Order Successful
                        </Text>
                        <Text mb="10px" opacity="0.8" color="gray.600">
                            Thanks for shopping with us!
                        </Text>
                        <Button
                            bg="#f2cc8f"
                            onClick={closeModal}
                            _hover={{
                                shadow: "lg",
                            }}
                            _active={{
                                backgroundColor: "#e6c084",
                            }}
                        >
                            Go Shopping
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
