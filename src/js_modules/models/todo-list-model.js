export default class TodoListModel {
  constructor() {
    // singleton
    if (TodoListModel.instance) {
      return TodoListModel.instance;
    }
    TodoListModel.instance = this;

    return this;
  }
}
