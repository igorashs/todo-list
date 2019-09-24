import { EventEmitter } from 'events';

export default class EditTodoMdView extends EventEmitter {
  constructor() {
    // singleton
    if (EditTodoMdView.instance) {
      return EditTodoMdView.instance;
    }
    super();
    EditTodoMdView.instance = this;

    // assign events
    // cancel
    document
      .querySelector('.new-todo .cancel')
      .addEventListener('click', () => {
        this.emit('cancelModal');
      });
    // create
    document
      .querySelector('.new-todo .create')
      .addEventListener('click', () => {
        this.emit('createTodo');
      });

    return this;
  }

  displayModal() {
    const modalView = document.querySelector('.new-todo');
    modalView.parentElement.classList.remove('display-none');
  }

  closeModal() {
    const modalView = document.querySelector('.new-todo');
    modalView.parentElement.classList.add('display-none');
  }
}
