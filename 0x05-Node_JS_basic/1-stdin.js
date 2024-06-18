process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const yourInput = process.stdin.read();

  if (yourInput) {
    process.stdout.write(`Your name is: ${yourInput}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
