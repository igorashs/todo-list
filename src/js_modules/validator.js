export default class Validator {
  constructor() {
    // singleton
    if (Validator.instance) {
      return Validator.instance;
    }
    Validator.instance = this;

    return this;
  }

  projectIsValid(prj) {
    if (prj.name.length > 0 && prj.name.length <= 20) {
      return true;
    }
    return false;
  }
}
