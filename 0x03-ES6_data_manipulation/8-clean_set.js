export default function cleanSet(set, startString) {
  if (startString === undefined || starString.length === 0) {
    return '';
  }
  const concate = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      const restChar = value.slice(startString.length);
      concate.push(restChar);
    }
  }
  return concate.join('-');
}
