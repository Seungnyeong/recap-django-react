import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room() {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} overflow={"hidden"} mb={2} rounded={"3xl"}>
        <Image
          minH="280"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-713793474951553871/original/2ac03203-3d06-441c-bc82-77f28ac26c6a.jpeg?im_w=720"
        />
        <Button
          variant={"unstyled"}
          position={"absolute"}
          top={0}
          right={0}
          color="white"
        >
          <FaRegHeart size={"20px"} />
        </Button>
      </Box>

      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text as="b" noOfLines={1} fontSize={"md"}>
            Brålanda, Västra Götalands län, 스웨덴
          </Text>
          <HStack
            _hover={{
              color: "red.100",
              cursor: "pointer",
            }}
            spacing={1}
          >
            <FaStar size={12} />
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={gray}>
          Seoul, S. Korea
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as="b">$72</Text> / night
      </Text>
    </VStack>
  );
}
