const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift();
    console.log(`Number of students: ${lines.length}`);

    const output = [];
    lines.forEach((line) => {
      const fields = line.split(',');
      output.push(fields);
    });
    const studentsByFields = {};
    for (let index = 0; index < output.length; index += 1) {
      const firstName = output[index][0];
      const field = output[index][3];
      if (!Object.hasOwnProperty.call(studentsByFields, field)) {
        studentsByFields[field] = [];
      }
      studentsByFields[field].push(firstName);
    }
    console.log(studentsByFields);

    for (const key in studentsByFields) {
      if (Object.hasOwnProperty.call(studentsByFields, key)) {
        const value = studentsByFields[key];
        console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
    }
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
