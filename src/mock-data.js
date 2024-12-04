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

  // Only add mock data if the arrays are empty
  if (!todoManager.getTodos().length) {
    todoManager.addTodo(todoOne);
    todoManager.addTodo(todoTwo);
  }

  if (!projectManager.getProjects().length) {
    projectManager.addProject("home");
    projectManager.addProject("events");
  }
};
