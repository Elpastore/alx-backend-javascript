const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift(); // Remove header line
      let outputFile = `Number of students: ${lines.length}\n`;

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
          outputFile += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
        }
      }

      resolve(outputFile);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const filePath = process.argv[2];
  countStudents(filePath)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch(() => {
      res.status(404).send('Cannot load the database');
    });
});

const server = app.listen(port, () => {});

module.exports = server;
