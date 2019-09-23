import { EventEmitter } from 'events';

export default class CrtProjectMdView extends EventEmitter {
  constructor() {
    // singleton
    if (CrtProjectMdView.instance) {
      return CrtProjectMdView.instance;
    }
    super();
    CrtProjectMdView.instance = this;

    // assign events
    // openModal
    document.getElementById('new-prj-btn').addEventListener('click', () => {
      this.emit('openModal');
    });
    // cancel modal
    document
      .querySelector('.new-project .cancel')
      .addEventListener('click', () => {
        this.emit('cancelModal');
      });
    // create project
    document
      .querySelector('.new-project .create')
      .addEventListener('click', () => {
        this.emit('createProject');
      });

    return this;
  }

  displayModal() {
    const modalView = document.querySelector('.new-project');
    modalView.parentElement.classList.remove('display-none');
  }

  closeModal() {
    const modalView = document.querySelector('.new-project');
    modalView.parentElement.classList.add('display-none');
  }

  clear() {
    document.getElementById('new-project-name').value = '';
  }

  getPrjName() {
    return document.getElementById('new-project-name').value;
  }
}
