export class TodoManager {
  constructor() {
    this.todos = [];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todoId) {
    const index = this.todos.findIndex((todo) => todo.id === todoId);
    this.todos.splice(index, 1);
  }

  editTodo(todoId, newDetails) {
    const index = this.todos.findIndex((todo) => todo.id === todoId);
    this.todos[index] = {
      ...this.todos[index],
      ...newDetails,
    };
  }
}

export class TodoItem {
  static id = 0;
  constructor(
    title,
    description = "",
    dueDate = null,
    priority = "low",
    project = "general",
    status = "pending"
  ) {
    this.id = TodoItem.id++;
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
    this.project = project;
    this.status = status;
  }
}

export class ProjectManager {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  addProject(projectName) {
    this.projects.push(projectName);
  }

  removeProject(projectName) {
    const index = this.projects.indexOf(projectName);
    if (index) {
      this.projects.splice(index, 1);
    }
  }
}
