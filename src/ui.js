import { getTodosByProject, getProjectsFromList } from "./utility.js";

// Todos functionality
export function renderTodosByProject(todoProject) {
  const todosToRender = getTodosByProject(todoProject);
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.innerHTML = "";
  todosToRender.forEach((todo) => {
    todoContainer.appendChild(createTodoElement(todo));
  });
}

function createTodoElement(todo) {
  const todoElement = document.createElement("li");
  todoElement.classList.add("todo");
  todoElement.dataset.todoId = todo.id;
  todoElement.insertAdjacentHTML(
    "beforeend",
    `
      <div>
        <h2 class="todo-title">${todo.title}</h2>
        <button class="edit-todo-btn">
          <span class="icon material-symbols-outlined">edit</span>
        </button>
        <button class="remove-todo-btn">
          <span class="icon material-symbols-outlined">delete</span>
        </button>
      </div>
      <div class="todo-priority-line ${todo.priority}-priority"></div>
      <div>
        <p class="todo-description">${todo.description}</p>
      </div>
      <div class="todo-due-container">
        <span class="icon material-symbols-outlined">calendar_month</span>
        <p class="todo-due-date">${todo.dueDate}</p>
      </div>
    `
  );

  return todoElement;
}

// Projects functionality
export function renderProjects() {
  const projectList = getProjectsFromList();
  const sidebarProjects = document.querySelector(".projects-wrapper");
  sidebarProjects.innerHTML = "";
  projectList.forEach((projectName) => {
    sidebarProjects.appendChild(createProjectElement(projectName));
  });
}

function createProjectElement(projectName) {
  const projectElement = document.createElement("li");
  projectElement.dataset.projectName = projectName;
  projectElement.classList.add("sidebar-link");
  projectElement.insertAdjacentHTML(
    "beforeend",
    `
      <a href="#">
        <span class="icon material-symbols-outlined">tag</span>
        <span>${projectName}</span>
      </a>
    `
  );
  return projectElement;
}
