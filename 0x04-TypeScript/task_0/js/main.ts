interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Abdoulaye";
  lastName: "Sadio";
  age: 27;
  location: "Kounoune";
}

const student2: Student = {
  firstName: "Mamadou";
  lastName: "Diack";
  age: 27;
  location: "Niarry Tally";
}

const studentList: Array<Student> = [student1, student2];

// let's create the header of the table
function generateTableHead(table) {
  let thead = table.createTHead();
}
