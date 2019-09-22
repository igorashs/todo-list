export default class StorageController {
  constructor() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
  }
}
