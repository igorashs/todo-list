export default class Project {
  constructor(name, id, todoList = []) {
    this.name = name;
    this.id = id;
    this.todoList = todoList;
  }
}
