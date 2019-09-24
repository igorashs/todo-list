import { EventEmitter } from 'events';

export default class EditTodoMdView extends EventEmitter {
  constructor() {
    // singleton
    if (EditTodoMdView.instance) {
      return EditTodoMdView.instance;
    }
    super();
    EditTodoMdView.instance = this;

    document
      .querySelector('.edit-todo .cancel')
      .addEventListener('click', () => {
        this.emit('cancelModal');
      });

    return this;
  }

  fillInputs(todo) {
    document.getElementById('edit-todo-title').value = todo.title;
    document.getElementById('edit-due-date').value = todo.date;
    document.getElementById('edit-description').value = todo.description;
    document.getElementById('edit-priority').value = todo.priority;
  }

  displayModal() {
    const modalView = document.querySelector('.edit-todo');
    modalView.parentElement.classList.remove('display-none');
  }

  closeModal() {
    const modalView = document.querySelector('.edit-todo');
    modalView.parentElement.classList.add('display-none');
  }
}
