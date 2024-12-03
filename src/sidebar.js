import { displayTodos } from "./ui.js";

export function setupSidebarListeners() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.addEventListener("click", handleSidebarClick);
}

function handleSidebarClick(e) {
  const modalBtn = e.target.closest("[data-target-modal]");
  const projectBtn = e.target.closest("li.sidebar-link");

  if (modalBtn) {
    const modalId = modalBtn.dataset.targetModal;
    document.querySelector(`#${modalId}`).showModal();
  }

  if (projectBtn) {
    const project = projectBtn.dataset.projectName;
    displayTodos(project);
  }
}
