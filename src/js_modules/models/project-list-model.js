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
    this.getProjectAt = function(id) {
      return _projectList.find((prj) => prj.id == id);
    };
    this.getFirstProject = function() {
      return _projectList[0];
    };
    this.addProject = function(prj) {};
    this.removeProjectAt = function(id) {};

    return this;
  }
}
