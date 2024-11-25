import { todoManager } from "./index.js";

export function getTodosByProject(todoProject = "all") {
  const todoList = todoManager.getTodos();

  if (todoProject === "all") {
    return todoList;
  } else if (todoProject === "pending" || todoProject === "completed") {
    return todoList.filter((todo) => todo.status === todoProject);
  } else {
    return todoList.filter((todo) => todo.project === todoProject);
  }
}
