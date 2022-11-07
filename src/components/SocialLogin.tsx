import { Box, Divider, HStack, VStack } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";

import { FaComment, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  const kakaoParams = {
    client_id: "3dbefc19408b31b5dd0a1aa3de2e31e7",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();
  console.log(params);
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text
          textTransform={"uppercase"}
          color="gray.500"
          fontSize={"xs"}
          as="b"
        >
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button
          as="a"
          href="https://github.com/login/oauth/authorize?client_id=13abba8899e12c0e46d9&scope=read:user,user:email"
          w={"100%"}
          leftIcon={<FaGithub />}
          colorScheme={"telegram"}
        >
          Continue with Github
        </Button>
        <Button
          as="a"
          href={`https://kauth.kakao.com/oauth/authorize?${params}`}
          w={"100%"}
          leftIcon={<FaComment />}
          colorScheme={"yellow"}
        >
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
