import { getTodosByProject, getProjectsFromList } from "./utility.js";

// Todos functionality
export function renderTodosByProject(todoProject = "all") {
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
        <button data-edit-btn data-target-modal="edit-todo-modal">
          <span class="icon material-symbols-outlined">edit</span>
        </button>
        <button data-target-modal="remove-todo-modal">
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

export function updateProjectsInForms() {
  const projectList = getProjectsFromList();
  const projectOptions = document.querySelector(".todo-projects");
  projectOptions.innerHTML = "";

  projectList.forEach((project) => {
    projectOptions.insertAdjacentHTML(
      "beforeend",
      `
        <option value="${project}">${project}</option>
      `
    );
  });
}

// General Sidebar Functions
export function displayTodos(projectName = "all") {
  renderTodosByProject(projectName);
  highlightActiveProject(projectName);
  updateProjectTitle(projectName);
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
