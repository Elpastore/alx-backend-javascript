const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift(); // Remove header line
      console.log(`Number of students: ${lines.length}`);

      const output = [];
      lines.forEach((line) => {
        const fields = line.split(',');
        output.push(fields);
      });

      const studentsByFields = {};
      output.forEach((fields) => {
        const firstName = fields[0];
        const field = fields[3];
        if (!studentsByFields[field]) {
          studentsByFields[field] = [];
        }
        studentsByFields[field].push(firstName);
      });

      for (const key in studentsByFields) {
        if (Object.hasOwnProperty.call(studentsByFields, key)) {
          const value = studentsByFields[key];
          console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
      }

      resolve(studentsByFields);
    });
  });
}

module.exports = countStudents;
