import { EventEmitter } from 'events';

export default class TodoListModel extends EventEmitter {
  constructor() {
    // singleton
    if (TodoListModel.instance) {
      return TodoListModel.instance;
    }
    TodoListModel.instance = this;

    return this;
  }
}
