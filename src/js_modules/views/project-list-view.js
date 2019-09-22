import { EventEmitter } from 'events';

export default class ProjectListView extends EventEmitter {
  constructor() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
  }
}
