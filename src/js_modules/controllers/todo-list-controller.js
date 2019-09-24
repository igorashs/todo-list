import TodoListModel from '../models/todo-list-model';
import TodoListView from '../views/todo-list-view';
import InfoTodoMdView from '../views/info-todo-modal-view';

export default class TodoListController {
  constructor() {
    // singleton
    if (TodoListController.instance) {
      return TodoListController.instance;
    }
    TodoListController.instance = this;

    const _todoListModel = new TodoListModel();
    const _todoListView = new TodoListView();
    const _infoTodoMdView = new InfoTodoMdView();

    // add handlers for TodoListModel
    // load
    _todoListModel.on('loadProject', (prj) => {
      _todoListView.render(prj);
    });
    // remove
    _todoListModel.on('removeProject', () => {
      _todoListView.displayNoProject();
    });

    // add handlers for TodoListView
    // show full info
    _todoListView.on('showFullInfo', (id) => {
      const todo = _todoListModel.getTodoAt(id);
      _infoTodoMdView.displayModal();
      _infoTodoMdView.showFullInfo(todo);
    });
    // complete
    _todoListView.on('completeTodo', (id) => {
      // !make complete
      console.log('completed', id);
    });
    // edit
    _todoListView.on('editTodo', (id) => {
      // ! edit
      console.log('edit', id);
    });
    // delete
    _todoListView.on('deleteTodo', (id) => {
      // ! delete
      console.log('delete', id);
    });

    // add handlers for InfoTodoMdView
    // cancel
    _infoTodoMdView.on('cancelModal', () => {
      _infoTodoMdView.closeModal();
    });

    return this;
  }
}
