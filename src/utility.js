import { todoManager, projectManager } from "./index.js";

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

export function getProjectsFromList() {
  const projectList = projectManager.getProjects();
  return projectList;
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
