import { EventEmitter } from 'events';

export default class ProjectListModel extends EventEmitter {
  constructor(storage) {
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
    // private data
    const _projectList = storage.getProjectList();

    this.getProjectAt = function(id) {
      console.log(`kek ${id}`);
      return id;
    };
    this.addProject = function(prj) {};
    this.removeProjectAt = function(id) {};
  }
}
