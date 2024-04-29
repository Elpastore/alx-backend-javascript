export default function getListStudents() {
  const listStudents = [];
  function Student(id, firstName, location) {
    this.id = id;
    this.firstName = firstName;
    this.location = location;
  }
  const student1 = new Student(1, 'Guillaume', 'San Francisco');
  const student2 = new Student(2, 'James', 'Columbia');
  const student3 = new Student(3, 'Serena', 'San Francisco');
  listStudents.push(student1, student2, student3);
  return listStudents;
}
