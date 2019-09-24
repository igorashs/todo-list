import { EventEmitter } from 'events';

export default class CreateTodoMdView extends EventEmitter {
  constructor() {
    // singleton
    if (CreateTodoMdView.instance) {
      return CreateTodoMdView.instance;
    }
    super();
    CreateTodoMdView.instance = this;

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
