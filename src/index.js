import "./style.css";
import { TodoList, TodoItem } from "./todo.js";

export const todoList = new TodoList();

// Create dummy data for the todoList
const firstTodo = new TodoItem("title", "desc", "date", "priority", "project");
const secondTodo = new TodoItem("title", "desc", "date", "priority", "project");
const thirdTodo = new TodoItem("title", "desc", "date", "priority", "project");
todoList.addTodo(firstTodo);
todoList.addTodo(secondTodo);
todoList.addTodo(thirdTodo);
