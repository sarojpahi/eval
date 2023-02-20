import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface todoType {
  id: number;
  title: string;
  completed: boolean;
}

const PID = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [todo, setTodo] = useState([]);
  const data = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodo(data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <VStack>
      <Box>
        <Text>UserId: {id}</Text>
        <Text>Todos Data</Text>
      </Box>
      <Box>
        {todo.map(({ id, title, completed }: todoType) => (
          <Flex
            key={id}
            gap="10px"
            align={"center"}
            boxShadow="lg"
            mb="20px"
            p="10px"
            borderRadius={"lg"}
          >
            {completed ? <Text>T</Text> : <Text>F</Text>}
            <Text>{title}</Text>
          </Flex>
        ))}
      </Box>
    </VStack>
  );
};

export default PID;
