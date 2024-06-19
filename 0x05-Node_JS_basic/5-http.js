const http = require('http');
const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift(); // Remove header line
      let ouputFile = `Number of students: ${lines.length}\n`;

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
          ouputFile += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
        }
      }

      resolve(ouputFile);
    });
  });
}

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students');
    const filePath = process.argv[2].toString();
    countStudents(filePath).then((output) => {
      const contentDB = output.slice(0, -1);
      res.end(contentDB);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});
app.listen(port, host, () => {});

module.exports = app;
