export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('lenght must be a number');
    }
    this._length = value;
  }

  get student() {
    return this._student;
  }

  set student(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('student must be an array');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('item in the array  must be a string');
    }
    this._student = value;
  }
}
