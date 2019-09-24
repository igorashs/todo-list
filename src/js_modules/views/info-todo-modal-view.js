import { EventEmitter } from 'events';

export default class InfoTodoMdView extends EventEmitter {
  constructor() {
    //singleton
    if (InfoTodoMdView.instance) {
      return InfoTodoMdView.instance;
    }
    super();
    InfoTodoMdView.instance = this;

    return this;
  }
}
