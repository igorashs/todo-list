import ProjectListModel from '../models/project-list-model';
import ProjectListView from '../views/project-list-view';
import CrtProjectMdView from '../views/create-project-modal-view';
import Validator from '../validator';
import Project from '../factories/project';

export default class ProjectListController {
  constructor(storageModel) {
    // singleton
    if (ProjectListController.instance) {
      return ProjectListController.instance;
    }
    ProjectListController.instance = this;

    const _projectListModel = new ProjectListModel(storageModel);
    const _projectListView = new ProjectListView();
    const _crtProjectMdView = new CrtProjectMdView();
    const _validator = new Validator();

    // add handlers for ProjectListView
    // delete prj
    _projectListView.on('deleteProject', (id) => {
      console.log(`Project has been deleted ${id}`);
    });
    // open prj
    _projectListView.on('openProject', (id) => {
      const prj = _projectListModel.getProjectAt(id);
      _projectListView.updateCurrentPrj(prj);
    });

    // add handlers for CrtProjectMdView
    // open modal
    _crtProjectMdView.on('openModal', () => {
      _crtProjectMdView.displayModal();
    });
    // cancel modal
    _crtProjectMdView.on('cancelModal', () => {
      _crtProjectMdView.clear();
      _crtProjectMdView.closeModal();
    });
    // create project
    _crtProjectMdView.on('createProject', () => {
      // create prj
      const name = _crtProjectMdView.getPrjName();
      const id = _projectListModel.getUniqueId();
      const prj = new Project(name, id);

      if (_validator.projectIsValid(prj)) {
        console.log(prj.name, 'valid');
        // add to storage
        // close && clear
      } else {
        console.log(prj.name, 'invalid');
      }
    });

    this.init = function() {
      _projectListView.render(_projectListModel.getProjectList());
      _projectListView.updateCurrentPrj(_projectListModel.getFirstProject());
    };

    return this;
  }
}
