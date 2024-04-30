export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const concate = [];
  for (const value of set) {
    if (value.includes(startString)) {
      const restChar = value.slice(startString.length, value.length);
      concate.push(restChar);
    }
  }
  return concate.join('-');
}
