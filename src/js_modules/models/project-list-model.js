import { EventEmitter } from 'events';

export default class ProjectListModel extends EventEmitter {
  constructor(storage) {
    // singleton
    if (ProjectListModel.instance) {
      return ProjectListModel.instance;
    }
    super();
    ProjectListModel.instance = this;

    // private data
    const _projectList = storage.getProjectList();

    this.getProjectList = function() {
      return _projectList;
    };
    this.getProjectAt = function(id) {};
    this.addProject = function(prj) {};
    this.removeProjectAt = function(id) {};

    return this;
  }
}
