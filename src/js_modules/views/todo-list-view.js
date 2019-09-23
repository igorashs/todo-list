export default class TodoListView {
  constructor() {
    // singleton
    if (TodoListView.instance) {
      return TodoListView.instance;
    }
    TodoListView.instance = this;

    return this;
  }
}
