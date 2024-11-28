import { renderTodosByProject } from "./ui.js";

export function setupSidebarListeners() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.addEventListener("click", handleSidebarClick);
}

function handleSidebarClick(e) {
  const modalBtn = e.target.closest("[data-target-modal]");
  const projectBtn = e.target.closest("li.sidebar-link");

  if (modalBtn) {
    const modalId = modalBtn.dataset.targetModal;
    document.querySelector(`#${modalId}-modal`).showModal();
  }

  if (projectBtn) {
    const project = projectBtn.dataset.projectName;
    highlightActiveProject(project);
    updateProjectTitle(project);
    renderTodosByProject(project);
  }
}

function highlightActiveProject(projectName) {
  const activeProject = document.querySelector("li.active");
  if (activeProject) {
    activeProject.classList.remove("active");
  }

  const project = document.querySelector(`[data-project-name="${projectName}`);
  project.classList.add("active");
}

function updateProjectTitle(projectName) {
  document.querySelector(".main-content h1").textContent = projectName;
}
