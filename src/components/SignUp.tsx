import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FaEnvelope, FaLock, FaUserNinja, FaUserSecret } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color={"gray.600"}>
                      <FaUserSecret />
                    </Box>
                  }
                />
                <Input variant={"filled"} placeholder="Name"></Input>
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color={"gray.600"}>
                      <FaEnvelope />
                    </Box>
                  }
                />
                <Input variant={"filled"} placeholder="Email"></Input>
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color={"gray.600"}>
                      <FaUserNinja />
                    </Box>
                  }
                />
                <Input variant={"filled"} placeholder="Username"></Input>
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color={"gray.600"}>
                      <FaLock />
                    </Box>
                  }
                />
                <Input variant={"filled"} placeholder="Password"></Input>
              </InputGroup>
            </VStack>
            <Button mt={4} colorScheme={"red"} w={"100%"}>
              Log in
            </Button>
            <SocialLogin />
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
