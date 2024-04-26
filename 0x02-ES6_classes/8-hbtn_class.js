export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // Corrected
    this._location = location; // Corrected
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  valueOf() {
    return this._size; // Corrected
  }

  toString() {
    return this._location;
  }
}
