import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import { logOut } from "../api";
import useUser from "../lib/useUser";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUp";

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();

  const {
    onOpen: onLoginOpen,
    isOpen: isLoginOpen,
    onClose: isLoginClose,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();

  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200");
  const Icon = useColorModeValue(FaMoon, FaSun);
  const toast = useToast();
  const queryClient = useQueryClient();
  const onLogOut = async () => {
    await logOut();
    queryClient.refetchQueries(["me"]);
    const toastId = toast({
      title: "Login Out...",
      description: "Sad to see you go..",
      status: "loading",
      position: "bottom-right",
    });

    setTimeout(() => {
      toast.update(toastId, {
        status: "success",
        title: "done",
        description: "See you lator!",
      });
    }, 500);
  };

  return (
    <Stack
      justifyContent={"space-between"}
      alignItems="center"
      py={5}
      px={40}
      direction={{
        sm: "column",
        md: "row",
      }}
      spacing={{
        sm: 4,
        md: 0,
      }}
      borderBottomWidth={1}
    >
      <Box color={logoColor}>
        <FaAirbnb size={"48"} />
      </Box>
      <HStack spacing={2}>
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label="Toggle dark mode"
          icon={<Icon />}
        />
        {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>Log in</Button>
              <LightMode>
                <Button colorScheme={"red"} onClick={onSignUpOpen}>
                  Sign up
                </Button>
              </LightMode>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar size={"md"} src={user?.avatar} name={user?.name} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onLogOut}>Log out</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={isLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </Stack>
  );
}
