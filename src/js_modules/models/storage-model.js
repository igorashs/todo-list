import { EventEmitter } from 'events';

export default class StorageModel extends EventEmitter {
  constructor(storage) {
    super();
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;

    // private data
    const _storage = storage;
    const _PROJECT_LIST = 'projectList';
    const _PRJ_UNIQUE_ID = 'prjUniqueID';

    this.getProjectList = function() {
      const prjList = JSON.parse(_storage.getItem(_PROJECT_LIST));
      if (prjList) {
        return prjList;
      }
      return [];
    };

    this.getPrjUniqueID = function() {
      const prjUniqueID = JSON.parse(_storage.getItem(_PRJ_UNIQUE_ID));
      if (prjUniqueID) {
        return prjUniqueID;
      }
      return 0;
    };

    this.setProjectList = function(prjList) {
      _storage.setItem(_PROJECT_LIST, JSON.stringify(prjList));
    };

    this.setPrjUniqueID = function(id) {
      _storage.setItem(_PRJ_UNIQUE_ID, JSON.stringify(id));
    };
  }
}
