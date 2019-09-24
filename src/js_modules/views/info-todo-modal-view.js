import { EventEmitter } from 'events';

export default class InfoTodoMdView extends EventEmitter {
  constructor() {
    //singleton
    if (InfoTodoMdView.instance) {
      return InfoTodoMdView.instance;
    }
    super();
    InfoTodoMdView.instance = this;

    // assign events
    // close
    document
      .querySelector('.info-todo .cancel')
      .addEventListener('click', () => {
        this.emit('cancelModal');
      });
    return this;
  }

  displayModal() {
    const modalView = document.querySelector('.info-todo');
    modalView.parentElement.classList.remove('display-none');
  }

  closeModal() {
    const modalView = document.querySelector('.info-todo');
    modalView.parentElement.classList.add('display-none');
  }
}
