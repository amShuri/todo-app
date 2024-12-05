import { TodoItem } from "./todo.js";

export const seedData = (todoManager, projectManager) => {
  const todoOne = new TodoItem(
    "Decorate for the Holidays",
    "Bring out the holiday decorations from storage and plan the setup. Hang string lights, set up the tree, and arrange ornaments. Create a cozy ambiance with candles and festive accents.",
    "12-08-2024",
    "low",
    "home",
    "pending"
  );

  const todoTwo = new TodoItem(
    "Grocery Shopping",
    "Create a list of groceries, including fresh produce, snacks, and essential kitchen supplies. Visit the local supermarket and compare prices for deals. Ensure to stock up on pantry staples for the week.",
    "12-04-2024",
    "high",
    "shop",
    "completed"
  );

  const todoThree = new TodoItem(
    "Deep clean the living room",
    "Vacuum the carpets, dust all surfaces, wipe down windows, and organize the furniture. Ensure the shelves are free from clutter and cushions are fluffed. Finish by mopping the floor thoroughly.",
    "12-08-2024",
    "medium",
    "home",
    "pending"
  );

  // Only add mock data if the arrays are empty
  if (!todoManager.getTodos().length) {
    todoManager.addTodo(todoOne);
    todoManager.addTodo(todoTwo);
    todoManager.addTodo(todoThree);
  }

  if (!projectManager.getProjects().length) {
    projectManager.addProject("home");
    projectManager.addProject("shop");
  }
};
