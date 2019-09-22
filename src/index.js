// import StorageController from './js_modules/controllers/storage-controller';
import ProjectListController from './js_modules/controllers/project-list-controller';
import StorageModel from './js_modules/models/storage-model';

const prjListController = new ProjectListController(
  new StorageModel(localStorage)
);

prjListController.init();
