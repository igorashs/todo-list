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

    // add handlers
    _projectListView.on('deleteProject', (id) => {
      console.log(`Project has been deleted ${id}`);
    });
    _projectListView.on('openProject', (id) => {
      console.log(`Project has been opened ${id}`);
    });

    this.init = function() {
      _projectListView.render(_projectListModel.getProjectList());
    };
  }
}
