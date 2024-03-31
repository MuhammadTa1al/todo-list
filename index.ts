#!/usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while (loop) {
  const answer: {
    todo: string;
    addmore: boolean;
  } = await inquirer.prompt([
    {
      name: "todo",
      message: "HEY! PLEASE TYPES WHAT DO YOU WANT TO ADD: ",
      type: "input",
    },
    {
      name: "addmore",
      message: "DO YOU REALLY WANT TO ADD AGAIN:",
      type: "confirm",
    },
  ]);
  const { todo, addmore } = answer;
  loop = addmore;
  if (todo) {
    todos.push(todo);
  } else {
    console.log("KINDLY ENTER A TODO LIST");
  }
}

if (todos.length > 0) {
  console.log("YOUR TODO LIST IS: ");
  todos.forEach((todo) => {
    console.log(todo);
  });
} else {
  console.log("NO TODO FOUND");
}
