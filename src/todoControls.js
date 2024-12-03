import { populateEditForm } from "./utility.js";

export function setupTodoListeners() {
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.addEventListener("click", handleTodoClick);
}

function handleTodoClick(e) {
  const modalBtn = e.target.closest("[data-target-modal]");
  if (!modalBtn) return;

  const todoId = e.target.closest(".todo").dataset.todoId;
  const modal = document.querySelector(`#${modalBtn.dataset.targetModal}`);
  modal.dataset.todoId = todoId;
  modal.showModal();

  // Populate the form if the user interacts with the edit button.
  if (e.target.closest("[data-edit-btn]")) {
    populateEditForm(todoId);
  }
}
