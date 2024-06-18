const fs = require('fs');

function countStudents (filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');

    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const studentsByField = {};

    lines.forEach(line => {
      const [firstName, lastName, age, field] = line.split(',').map(item => item.trim());

      if (!firstName || !lastName || !age || !field) {
        return;
      }

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    });

    let totalStudents = 0;
    for (const field in studentsByField) {
      totalStudents += studentsByField[field].length;
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentsByField) {
      const count = studentsByField[field].length;
      const studentList = studentsByField[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
