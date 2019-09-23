export default class StorageController {
  constructor() {
    // singleton
    if (StorageController.instance) {
      return StorageController.instance;
    }
    StorageController.instance = this;

    return this;
  }
}
