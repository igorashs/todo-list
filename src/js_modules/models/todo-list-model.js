import { EventEmitter } from 'events';

export default class TodoListModel extends EventEmitter {
  constructor() {
    // singleton
    if (TodoListModel.instance) {
      return TodoListModel.instance;
    }
    super();
    TodoListModel.instance = this;

    // private
    let _curProject = null;

    this.loadProject = function(prj) {
      _curProject = prj;
      this.emit('loadProject', _curProject);
    };

    this.removeProject = function() {
      _curProject = null;
      this.emit('removeProject');
    };

    return this;
  }
}
