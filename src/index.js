import "./style.css";
import { TodoManager, ProjectManager } from "./todo.js";
import { seedData } from "./mock-data.js";

const todoManager = new TodoManager();
const projectManager = new ProjectManager();
export const todos = todoManager.getTodos();
export const projects = projectManager.getProjects();

// Show some default data for Todos and Projects
seedData(todoManager, projectManager);
