#!/usr/bin/env node
import inquirer from "inquirer";
let Todos = [];
async function createTodo(arr) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select a option",
            choices: ["add", "update", "view", "delete"],
        });
        if (ans.opt == "add") {
            let add1 = await inquirer.prompt({
                type: "input",
                message: "add item",
                name: "todo",
            });
            Todos.push(add1.todo);
            console.log(Todos);
        }
        if (ans.opt == "update") {
            let updatetodo = await inquirer.prompt({
                type: "list",
                message: "select item to uptade",
                name: "todo",
                choices: Todos.map((item) => item),
            });
            let AddTodo = await inquirer.prompt({
                type: "input",
                message: "add item",
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
                message: "select to delete the item",
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
