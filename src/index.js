import "./style.css";
import { TodoManager, ProjectManager } from "./todo.js";
import { seedData } from "./mock-data.js";
import { renderProjects, renderTodosByProject } from "./ui.js";
import { setupSidebarListeners } from "./sidebar.js";
import { setupModalForms, setupModalCloseButtons } from "./modal.js";
import { setupTodoListeners } from "./todoControls.js";

export const todoManager = new TodoManager();
export const projectManager = new ProjectManager();

// Show some default data for Todos and Projects
seedData(todoManager, projectManager);

// Render todos & projects on pageload
renderProjects();
renderTodosByProject();

// Setup sidebar & modal event listeners on pageload
setupSidebarListeners();
setupModalForms();
setupModalCloseButtons();
setupTodoListeners();
