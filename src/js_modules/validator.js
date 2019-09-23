export default class Validator {
  constructor() {
    // singleton
    if (Validator.instance) {
      return Validator.instance;
    }
    Validator.instance = this;

    return this;
  }

  isValidName(name) {
    if (name.length > 0 && name.length <= 20) {
      return true;
    }
    return false;
  }
}
