export default function createIteratorObject(report) {
  const array = [];
  for (const idx of Object.values(report.allEmployees)) {
    array.push(...idx);
  }
  return array;
}
