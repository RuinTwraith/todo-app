import React, { useState } from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const InputTodo = (props: { setTodos: Function }) => {
  const { setTodos } = props;
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="todo">Enter Todo: </FormLabel>
        <HStack spacing="10px">
          <Input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            variant="filled"
            placeholder="I want to do..."
            htmlSize={40}
            width="auto"
            id="todo"
          />
          <HStack spacing="10px">
            <Button type="submit" colorScheme="blue" leftIcon={<AddIcon />}>
              Add
            </Button>
          </HStack>
        </HStack>
      </FormControl>
    </form>
  );
};

export default InputTodo;
