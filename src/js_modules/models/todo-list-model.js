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

    this.getTodoAt = function(id) {
      return _curProject.todoList.find((todo) => todo.id == id);
    };

    this.removeTodoAt = function(id) {
      const index = _curProject.todoList.findIndex((todo) => todo.id == id);
      _curProject.todoList.splice(index, 1);
      this.emit('saveCurrentProject', _curProject);
    };

    this.getUniqueId = function() {
      return _curProject.todoUniqueID;
    };

    return this;
  }
}
