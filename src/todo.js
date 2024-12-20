import { loadFromLocalStorage } from "./localStorage";

export class TodoManager {
  constructor() {
    this.todos = loadFromLocalStorage("todoList") || [];
  }

  getTodo(todoId) {
    return this.todos[todoId];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todoId) {
    const index = this.todos.findIndex((todo) => todo.id === Number(todoId));
    this.todos.splice(index, 1);
  }

  editTodo(todoId, newDetails) {
    const index = this.todos.findIndex((todo) => todo.id === Number(todoId));
    this.todos[index] = {
      ...this.todos[index],
      ...newDetails,
    };
  }
}

export class TodoItem {
  static id = 0;
  constructor(
    title = "no title",
    description = "no description",
    dueDate = null,
    priority = "low",
    project = "general",
    status = "pending"
  ) {
    this.id = TodoItem.id++;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.status = status;
  }
}

export class ProjectManager {
  constructor() {
    this.projects = loadFromLocalStorage("projectList") || [];
  }

  getProjects() {
    return this.projects;
  }

  addProject(projectName) {
    if (!this.projects.includes(projectName)) {
      this.projects.push(projectName);
    }
  }

  removeProject(projectName) {
    const index = this.projects.indexOf(projectName);
    if (index) {
      this.projects.splice(index, 1);
    }
  }
}
