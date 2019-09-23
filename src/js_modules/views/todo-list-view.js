import { EventEmitter } from 'events';

export default class TodoListView extends EventEmitter {
  constructor() {
    // singleton
    if (TodoListView.instance) {
      return TodoListView.instance;
    }
    TodoListView.instance = this;

    return this;
  }
}
