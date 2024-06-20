function calculateNumber(a, b, type) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    if (type === "SUM") {
      return roundedA + roundedB;
    }
    if (type === "SUBSTRACT") {
      return roundedA - roundedB;
    }
    if (type === "DIVIDE") {
      if (b === 0) {
        return "Error";
      }
      return roundedA / roundedB;
    }
}

module.exports = calculateNumber;
