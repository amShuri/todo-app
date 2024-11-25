import { TodoItem } from "./todo.js";

export const seedData = (todoManager, projectManager) => {
  const todoOne = new TodoItem(
    "Todo One",
    "Description One",
    "11-25-2024",
    "low",
    "home"
  );

  const todoTwo = new TodoItem(
    "Todo Two",
    "Description Two",
    "11-25-2024",
    "low",
    "events"
  );

  todoManager.addTodo(todoOne);
  todoManager.addTodo(todoTwo);

  projectManager.addProject("home");
  projectManager.addProject("events");
};
