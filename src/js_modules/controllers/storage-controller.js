import ProjectListModel from '../models/project-list-model';
import ProjectListController from './project-list-controller';
import StorageModel from '../models/storage-model';

export default class StorageController {
  constructor(storage) {
    // singleton
    if (StorageController.instance) {
      return StorageController.instance;
    }
    StorageController.instance = this;

    // models
    const _storageModel = new StorageModel(storage);
    const _projectListModel = new ProjectListModel(_storageModel);

    // add handlers for ProjectListModel
    // save
    _projectListModel.on('save', (prjList, uniqueId) => {
      _storageModel.setProjectList(prjList);
      _storageModel.setPrjUniqueID(uniqueId);
    });
    // changeProject
    _projectListModel.on('changeProject', (curPrj) => {
      if (curPrj) {
        //! load todoList from new prj
        console.log(curPrj.name);
      }
    });

    // controllers
    const _projectListController = new ProjectListController(_storageModel);

    this.init = function() {
      _projectListController.init();
    };

    return this;
  }
}
