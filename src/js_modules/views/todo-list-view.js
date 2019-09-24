import { EventEmitter } from 'events';

export default class TodoListView extends EventEmitter {
  constructor() {
    // singleton
    if (TodoListView.instance) {
      return TodoListView.instance;
    }
    super();
    TodoListView.instance = this;

    return this;
  }

  render({ todoList }) {
    const listView = document.querySelector('.todo-list');
    // remove all data
    listView.textContent = '';
    todoList.forEach((todo) => {
      const nodeElement = _createNodeElement(todo);
      _assignEvents.call(this, nodeElement);
      listView.appendChild(nodeElement);
    });

    function _assignEvents(element) {
      element.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('short-description') ||
          e.target.classList.contains('title')
        ) {
          this.emit('showFullInfo', e.currentTarget.dataset.id);
        }
        if (e.target.classList.contains('complete')) {
          this.emit('completeTodo', e.currentTarget.dataset.id);
        }
        if (e.target.classList.contains('edit')) {
          this.emit('editTodo', e.currentTarget.dataset.id);
        }
        if (e.target.classList.contains('delete')) {
          this.emit('deleteTodo', e.currentTarget.dataset.id);
        }
      });
    }
    function _createNodeElement(element) {
      const elementView = document.createElement('div');
      elementView.innerHTML = `<div class="todo-item" data-id="${element.id}">
      <div class="short-description">
        <h5 class="date">${element.date}</h5>
        <h3 class="title">${element.title}</h3>
      </div>
      <div class="todo-options">
        <button class="button complete" tabindex="-1">&#x2713;</button>
        <button class="button edit" tabindex="-1">Edit</button>
        <button class="button delete" tabindex="-1">Delete</button>
      </div>
    </div>`;
      return elementView.firstElementChild;
    }
  }

  displayNoProject() {
    const listView = document.querySelector('.todo-list');
    listView.textContent = '_NO_PROJECT_';
  }
}
