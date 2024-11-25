import { TodoItem } from "./todo.js";

export const seedData = (todoManager, projectManager) => {
  const todoOne = new TodoItem(
    "Todo One",
    "Description One - Pending",
    "11-25-2024",
    "low",
    "home",
    "pending"
  );

  const todoTwo = new TodoItem(
    "Todo Two",
    "Description Two - Completed",
    "11-25-2024",
    "low",
    "events",
    "completed"
  );

  todoManager.addTodo(todoOne);
  todoManager.addTodo(todoTwo);

  projectManager.addProject("home");
  projectManager.addProject("events");
};
