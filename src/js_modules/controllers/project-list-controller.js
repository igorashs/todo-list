import ProjectListModel from '../models/project-list-model';
import ProjectListView from '../views/project-list-view';
import CrtProjectMdView from '../views/create-project-modal-view';
import Validator from '../validator';
import Project from '../factories/project';
import ConfirmMdView from '../views/confirm-modal-view';

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
    const _confirmMdView = new ConfirmMdView();
    const _validator = new Validator();

    // private
    let _confirmQueryPrjId = null;

    // add handlers for ProjectListView
    // delete prj
    _projectListView.on('deleteProject', (id) => {
      _confirmQueryPrjId = id;
      _confirmMdView.displayModal();
    });
    // open prj
    _projectListView.on('openProject', (id) => {
      const prj = _projectListModel.getProjectAt(id);
      _projectListView.updateCurrentPrj(prj);
    });

    // add handlers for ConfirmMdView
    // no
    _confirmMdView.on('no', () => {
      _confirmQueryPrjId = null;
      _confirmMdView.closeModal();
    });
    // yes
    _confirmMdView.on('yes', () => {
      _projectListModel.removeProjectAt(_confirmQueryPrjId);
      _confirmQueryPrjId = null;
      _confirmMdView.closeModal();
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
      const name = _crtProjectMdView.getPrjName();

      if (_validator.isValidName(name)) {
        // create prj
        const id = _projectListModel.getUniqueId();
        const prj = new Project(name, id);
        _projectListModel.addProject(prj);

        _crtProjectMdView.clear();
        _crtProjectMdView.closeModal();
      } else {
        _crtProjectMdView.displayInvalidName();
      }
    });

    // add handlers for ProjectListModel
    // add project
    _projectListModel.on('addProject', (prj) => {
      _projectListView.render(_projectListModel.getProjectList());
      _projectListView.updateCurrentPrj(prj);
    });
    _projectListModel.on('removeProject', () => {
      _projectListView.render(_projectListModel.getProjectList());
      _projectListView.updateCurrentPrj(_projectListModel.getFirstProject());
    });

    this.init = function() {
      _projectListView.render(_projectListModel.getProjectList());
      _projectListView.updateCurrentPrj(_projectListModel.getFirstProject());
    };

    return this;
  }
}
