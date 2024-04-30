export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const concate = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const restChar = value.slice(startString.length);
      concate.push(restChar);
    }
  }
  return concate.join('-');
}
