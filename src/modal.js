import { TodoItem } from "./todo.js";
import { todoManager } from "./index.js";
import { getFormValues, formatDateForDisplay } from "./utility.js";
import { renderTodosByProject } from "./ui.js";

export function setupModalForms() {
  setupModalFormListener("#add-todo-form", "#add-todo-modal", addNewTodo);
}

export function setupModalCloseButtons() {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.addEventListener("click", (e) => {
    const closeBtn = e.target.dataset.action;
    if (!closeBtn) return;

    e.target.closest("form").reset();
    e.target.closest("dialog").close();
  });
}

function setupModalFormListener(formSelector, modalSelector, onSubmit) {
  const form = document.querySelector(formSelector);
  const modal = document.querySelector(modalSelector);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (typeof onSubmit === "function") {
      onSubmit(form);
    }

    form.reset();
    modal.close();
  });
}

function addNewTodo(form) {
  const { title, description, dueDate, priority, project } = getFormValues(
    form.id
  );

  todoManager.addTodo(
    new TodoItem(
      title,
      description,
      formatDateForDisplay(dueDate),
      priority,
      project
    )
  );

  renderTodosByProject(project);
}
