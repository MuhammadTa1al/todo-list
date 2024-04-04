#!/usr/bin/env node
import inquirer from "inquirer";

let Todos: string[] = [];

async function createTodo(arr: string[]) {
  do {
    let ans = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Which of operation you to perform",
      choices: ["add", "update", "view", "delete"],
    });

    if (ans.opt == "add") {
      let add1 = await inquirer.prompt({
        type: "input",
        message: "What do you want to add in todo",
        name: "todo",
      });
      Todos.push(add1.todo);
      console.log(Todos);
    }
    if (ans.opt == "update") {
      let updatetodo = await inquirer.prompt({
        type: "list",
        message: "Which one you want to update",
        name: "todo",
        choices: Todos.map((item) => item),
      });
      let AddTodo = await inquirer.prompt({
        type: "input",
        message: "What do you want add again",
        name: "todo",
      });
      let newtodo = Todos.filter((val) => val !== updatetodo.todo);
      Todos = [...newtodo, AddTodo.todo];
      console.log(Todos);
    }
    if (ans.opt == "view") {
      console.log(Todos);
    }
    if (ans.opt == "delete") {
      let deleteTodo = await inquirer.prompt({
        type: "list",
        message: "What to you want to delete",
        name: "todo",
        choices: Todos.map((item) => item),
      });
      let newtodo = Todos.filter((val) => val !== deleteTodo.todo);
      Todos = [...newtodo];
      console.log(Todos);
    }
  } while (true);
}

createTodo(Todos);
