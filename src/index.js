import "./style.css";
import { TodoManager, ProjectManager } from "./todo.js";
import { seedData } from "./mock-data.js";
import {
  renderProjects,
  renderTodosByProject,
  initSidebarListeners,
} from "./ui.js";

export const todoManager = new TodoManager();
export const projectManager = new ProjectManager();

// Show some default data for Todos and Projects
seedData(todoManager, projectManager);

// Render & Listener initialization
renderProjects();
renderTodosByProject();
initSidebarListeners();
