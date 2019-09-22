import ProjectListModel from '../models/project-list-model';
import ProjectListView from '../views/project-list-view';

export default class ProjectListController {
  constructor(storageModel) {
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;

    const _projectListModel = new ProjectListModel(storageModel);
    const _projectListView = new ProjectListView();

    this.init = function() {
      console.log('render all lists');
      console.log(_projectListModel.getProjectAt(2));
    };
  }
}
