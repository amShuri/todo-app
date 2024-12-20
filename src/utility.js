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

export function getFormValues(formId) {
  const form = document.querySelector(`#${formId}`);
  const formData = {};

  Array.from(form.elements).forEach((element) => {
    if (element.nodeName !== "BUTTON") {
      formData[element.name] = element.value;
    }
  });

  return formData;
}

export function formatDateForDisplay(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${month}-${day}-${year}`;
}

function formatDateForInput(dateString) {
  const [month, day, year] = dateString.split("-");
  return `${year}-${month}-${day}`;
}

export function populateEditForm(todoId) {
  const todo = todoManager.getTodo(todoId);
  const editInputs = document.querySelectorAll("[data-edit-todo]");

  editInputs.forEach((input) => {
    const key = input.dataset.editTodo;
    input.value = key === "dueDate" ? formatDateForInput(todo[key]) : todo[key];
  });
}
