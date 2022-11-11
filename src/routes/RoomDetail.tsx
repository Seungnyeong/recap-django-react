import {
  Avatar,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom, getRoomReviews } from "../api";
import { IReviews, IRoomDetail } from "../types";

export default function RoomDetail() {
  const { room_pk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(
    [`rooms`, room_pk],
    getRoom
  );
  const { data: reviewsData, isLoading: isReviewsLoading } = useQuery<
    IReviews[]
  >([`rooms`, room_pk, `reviews`], getRoomReviews);

  return (
    <Box
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
    >
      <Skeleton height={"43px"} width="25%" isLoaded={!isLoading}>
        <Heading>{data?.name}</Heading>
      </Skeleton>
      <Grid
        mt={8}
        rounded="lg"
        overflow={"hidden"}
        height="60vh"
        templateColumns={"repeat(4, 1fr)"}
        templateRows={"1fr 1fr"}
        gap={3}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow={"hidden"}
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h="100%" w="100%">
              {data?.photos && data.photos.length > 0 ? (
                <Image
                  objectFit={"cover"}
                  w="100%"
                  h="100%"
                  src={data?.photos[index].file}
                />
              ) : null}
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <HStack w="40%" justifyContent={"space-between"} mt={10}>
        <VStack justifyContent={"flex-start"}>
          <Skeleton isLoaded={!isLoading} height="30px">
            <Heading fontSize={"2xl"}>
              House hosted by {data?.owner.name}
            </Heading>
          </Skeleton>
          <HStack justifyContent={"flex-start"} w="100%">
            <Text>
              {data?.toilets} toliet{data?.toilets === 1 ? "" : "s"}
            </Text>
            <Text>•</Text>
            <Text>
              {data?.rooms} room{data?.rooms === 1 ? "" : "s"}
            </Text>
          </HStack>
        </VStack>
        <Avatar name={data?.owner.name} size={"xl"} src={data?.owner.avatar} />
      </HStack>
      <Box mt={10}>
        <Heading fontSize={"2xl"} mb={5}>
          <HStack>
            <FaStar /> <Text>{data?.rating}</Text>
            <Text>•</Text>
            <Text>
              {reviewsData?.length} review{reviewsData?.length === 1 ? "" : "s"}
            </Text>
          </HStack>
        </Heading>
        <Container maxW="container.lg" marginX="none">
          <Grid gap={5} templateColumns={"1fr 1fr"}>
            {reviewsData?.map((review, index) => (
              <VStack key={index} alignItems={"flex-start"}>
                <HStack>
                  <Avatar
                    name={review.user.name}
                    src={review.user.avatar}
                    size="md"
                  />
                  <VStack spacing={0} alignItems={"flex-start"}>
                    <Heading fontFamily={"md"}>{review.user.name}</Heading>
                    <HStack spacing={1}>
                      <FaStar size="12px" />
                      <Text>{review.rating}</Text>
                    </HStack>
                    <Text>{review.payload}</Text>
                  </VStack>
                </HStack>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
