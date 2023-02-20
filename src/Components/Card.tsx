import { Box, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
interface dataType {
  data: {
    id: number;
    username: string;
    name: string;
    address: {
      street: string;
    };
  };
}
const Card: FC<dataType> = ({ data }) => {
  console.log(data);
  const randomColor = ["brown", "red", "blue", "green"];
  return (
    <VStack w="full" bg="cyan.100" textAlign={"center"} p="4">
      <Box
        borderRadius={"50%"}
        p="5"
        bg={randomColor[data.id % randomColor.length]}
        color="white"
        fontWeight={"semibold"}
        w="max-content"
        height={"max-content"}
      >
        LG
      </Box>
      <Box>
        <Text fontWeight={"semibold"}>{data.name}</Text>
        <Text>{data.username}</Text>
        <Text>{data.address.street}</Text>
      </Box>
      <Link href={`/people/${data.id}`}>
        <Button p="10px" borderRadius={"lg"} colorScheme="blue">
          Get Todos
        </Button>
      </Link>
    </VStack>
  );
};

export default Card;
