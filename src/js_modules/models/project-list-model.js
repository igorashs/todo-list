import { EventEmitter } from 'events';

export default class ProjectListModel extends EventEmitter {
  constructor(storage) {
    super();
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
    // private data
    const _projectList = storage.getProjectList();

    this.getProjectList = function() {
      return _projectList;
    };
    this.getProjectAt = function(id) {};
    this.addProject = function(prj) {};
    this.removeProjectAt = function(id) {};
  }
}
