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

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const filePath = process.argv[2]; // Assuming database path is passed as argument

    countStudents(filePath)
      .then((studentsByFields) => {
        res.write('This is the list of our students\n');

        for (const key in studentsByFields) {
          if (Object.hasOwnProperty.call(studentsByFields, key)) {
            const value = studentsByFields[key];
            res.write(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`);
          }
        }
        res.end(); // End response after all data is sent
      })
      .catch((error) => {
        console.error(error);
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

app.listen(port, host, () => {});

module.exports = app;
