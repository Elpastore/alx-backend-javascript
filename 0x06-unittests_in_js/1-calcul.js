function calculateNumber (type, a, b) {
  if (type === 'SUM') {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    return roundedA + roundedB;
  }
  if (type === 'SUBTRACT') {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    return roundedA - roundedB;
  }
  if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    }
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    return roundedA / roundedB;
  }
}

module.exports = calculateNumber;
