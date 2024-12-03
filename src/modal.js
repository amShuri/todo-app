import { TodoItem } from "./todo.js";
import { todoManager, projectManager } from "./index.js";
import { getFormValues, formatDateForDisplay } from "./utility.js";
import { displayTodos, renderProjects, updateProjectsInForms } from "./ui.js";

export function setupModalForms() {
  setupModalFormListener("#add-todo-form", "#add-todo-modal", addNewTodo);
  setupModalFormListener("#add-project-form", "#add-project-modal", addProject);
  setupModalFormListener("#edit-todo-form", "#edit-todo-modal", editTodo);
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
  const { newTitle, newDescription, newDueDate, newPriority, newProject } =
    getFormValues(form.id);

  todoManager.addTodo(
    new TodoItem(
      newTitle,
      newDescription,
      formatDateForDisplay(newDueDate),
      newPriority,
      newProject
    )
  );

  displayTodos(newProject);
}

function addProject(form) {
  const { projectTitle } = getFormValues(form.id);
  projectManager.addProject(projectTitle.toLowerCase());

  renderProjects();
  updateProjectsInForms();
}

function editTodo(form) {
  const todoId = form.closest("dialog").dataset.todoId;
  const {
    updatedTitle,
    updatedDescription,
    updatedDueDate,
    updatedPriority,
    updatedProject,
  } = getFormValues(form.id);

  todoManager.editTodo(todoId, {
    title: updatedTitle,
    description: updatedDescription,
    dueDate: formatDateForDisplay(updatedDueDate),
    priority: updatedPriority,
    project: updatedProject,
  });

  displayTodos(updatedProject);
}
