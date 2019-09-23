import { EventEmitter } from 'events';

export default class StorageModel extends EventEmitter {
  constructor(storage) {
    // singleton
    if (StorageModel.instance) {
      return StorageModel.instance;
    }
    super();
    StorageModel.instance = this;

    // private data
    const _storage = storage;
    const _PROJECT_LIST = 'projectList';
    const _PRJ_UNIQUE_ID = 'prjUniqueID';

    const _DEFAULT_PRJ = [{ name: 'Default', id: 0 }];

    this.getProjectList = function() {
      const prjList = JSON.parse(_storage.getItem(_PROJECT_LIST));
      if (prjList) {
        return prjList;
      }
      return _DEFAULT_PRJ;
    };

    this.getPrjUniqueID = function() {
      const prjUniqueID = JSON.parse(_storage.getItem(_PRJ_UNIQUE_ID));
      if (prjUniqueID) {
        return prjUniqueID;
      }
      return _DEFAULT_PRJ.id;
    };

    this.setProjectList = function(prjList) {
      _storage.setItem(_PROJECT_LIST, JSON.stringify(prjList));
    };

    this.setPrjUniqueID = function(id) {
      _storage.setItem(_PRJ_UNIQUE_ID, JSON.stringify(id));
    };

    return this;
  }
}
