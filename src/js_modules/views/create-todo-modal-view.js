import { EventEmitter } from 'events';

export default class EditTodoMdView extends EventEmitter {
  constructor() {
    // singleton
    if (EditTodoMdView.instance) {
      return EditTodoMdView.instance;
    }
    super();
    EditTodoMdView.instance = this;

    return this;
  }
}
