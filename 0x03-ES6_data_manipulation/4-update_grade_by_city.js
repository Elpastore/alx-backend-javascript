export default function updateStudentGradeByCity(listStudent, city, newGrades) {
  return listStudent.filter((student) => student.location === city).map((student) => {
    const matched = newGrades.find((grade) => grade.studentId === student.id);
    if (matched) {
      return { ...student, grade: matched.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
