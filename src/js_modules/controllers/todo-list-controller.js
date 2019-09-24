import TodoListModel from '../models/todo-list-model';
import TodoListView from '../views/todo-list-view';
import InfoTodoMdView from '../views/info-todo-modal-view';
import ConfirmMdView from '../views/confirm-modal-view';
import EditTodoMdView from '../views/edit-todo-modal-view';
import Validator from '../validator';
import Todo from '../factories/todo';

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
    const _confirmMdView = new ConfirmMdView();
    const _editTodoMdView = new EditTodoMdView();
    const _validator = new Validator();

    // private
    let _confirmQueryTodoId = null;
    let _editQueryTodoId = null;

    // add handlers for EditTodoMdView
    // cancel
    _editTodoMdView.on('cancelModal', () => {
      _editQueryTodoId = null;
      _editTodoMdView.closeModal();
    });

    // update
    _editTodoMdView.on('updateTodo', () => {
      const newTitle = _editTodoMdView.getTitle();
      const newDate = _editTodoMdView.getDate();
      const newDescription = _editTodoMdView.getDescription();
      const newPriority = _editTodoMdView.getPriority();

      if (_validator.isValidName(newTitle)) {
        _editTodoMdView.displayValidTitle();
        if (_validator.isValidDate(newDate)) {
          _editTodoMdView.displayValidDate();

          const todo = _todoListModel.getTodoAt(_editQueryTodoId);
          todo.title = newTitle;
          todo.date = newDate;
          todo.description = newDescription;
          todo.getPriority = newPriority;
          _todoListModel.updateTodo(todo);
          _editQueryTodoId = null;
          _editTodoMdView.closeModal();
        } else {
          _editTodoMdView.displayInvalidDate();
        }
      } else {
        _editTodoMdView.displayInvalidTitle();
      }
    });

    // add handlers for ConfirmMdView
    // no
    _confirmMdView.on('no', () => {
      if (_confirmQueryTodoId) {
        _confirmQueryTodoId = null;
        _confirmMdView.closeModal();
      }
    });
    // yes
    _confirmMdView.on('yes', () => {
      if (_confirmQueryTodoId) {
        _todoListModel.removeTodoAt(_confirmQueryTodoId);
        _confirmQueryTodoId = null;
        _confirmMdView.closeModal();
      }
    });

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
      const todo = _todoListModel.getTodoAt(id);
      _editTodoMdView.displayModal();
      _editTodoMdView.fillInputs(todo);
      _editQueryTodoId = id;
    });
    // delete
    _todoListView.on('deleteTodo', (id) => {
      _confirmQueryTodoId = id;
      _confirmMdView.displayModal();
    });

    // add handlers for InfoTodoMdView
    // cancel
    _infoTodoMdView.on('cancelModal', () => {
      _infoTodoMdView.closeModal();
    });

    return this;
  }
}
