export default function getStudentIdsSum(listStudent) {
  return listStudent.reduce((sum, current) => sum + current.id, 0);
}
