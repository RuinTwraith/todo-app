import React, { useState } from "react";
import InputTodo from "./InputTodo";
import DisplayTodo from "./DisplayTodo";
import { Center, VStack, Heading } from "@chakra-ui/react";
import { Todo as TodoObject } from "../classes/Todo";

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      text: "My First Todo",
      id: 1,
      isDone: false,
    },
  ]);

  const setTodoValues = (value: string) => {
    const newTodoObj = new TodoObject(value, todos.length + 1, false);
    const newTodos = [...todos, newTodoObj];
    setTodos(newTodos);
  };

  const updateTodoValues = (id: number, action: string) => {
    console.log("id", id);
    let newTodos: TodoObject[] = [];
    if (action === "check") {
      newTodos = todos.map((todo) => {
        if (todo.id === id) todo.isDone = !todo.isDone;
        return todo;
      });
    } else {
      newTodos = todos.filter((todo) => todo.id !== id);
    }
    setTodos(newTodos);
  };

  const remainingTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);
  return (
    <Center>
      <VStack spacing="50px" mt="24px">
        <Heading as="h1" fontSize="3xl">
          TODO APP
        </Heading>
        <InputTodo setTodos={setTodoValues} />
        {remainingTodos.length > 0 && (
          <DisplayTodo
            title={"Remaining Todos"}
            todos={remainingTodos}
            updateTodoValues={updateTodoValues}
          />
        )}
        {completedTodos.length > 0 && (
          <DisplayTodo
            title={"Completed"}
            todos={completedTodos}
            updateTodoValues={updateTodoValues}
          />
        )}
      </VStack>
    </Center>
  );
}

export default TodoApp;
