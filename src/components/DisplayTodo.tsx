import {
  UnorderedList,
  Button,
  VStack,
  HStack,
  Checkbox,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Todo as TodoObject } from "../classes/Todo";

const DisplayTodo = (props: {
  todos: TodoObject[];
  updateTodoValues: Function;
  title: string;
}) => {
  const { todos, updateTodoValues, title } = props;

  return (
    <VStack align="stretch" width="full">
      <Heading as="h3" fontSize="xl" alignSelf="flex-start">
        {title}:
      </Heading>
      <UnorderedList width="full">
        {todos.map((todo, index) => (
          <HStack key={index} justifyContent="space-between" mb={2}>
            <Checkbox
              isChecked={todo.isDone}
              onChange={() => updateTodoValues(todo.id, "check")}
            >
              <ListItem listStyleType="none" fontSize="xl">
                {todo.text}
              </ListItem>
            </Checkbox>
            <Button
              colorScheme="blue"
              variant="outline"
              leftIcon={<DeleteIcon />}
              onClick={() => updateTodoValues(todo.id, "delete")}
            >
              Delete
            </Button>
          </HStack>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default DisplayTodo;
