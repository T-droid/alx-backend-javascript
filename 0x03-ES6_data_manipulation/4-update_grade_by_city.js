export default function updateStudentGradeByCity(listOfStudents, city, newGrades){
    if (!(Array.isArray(listOfStudents))){
        return [];
    }
    return listOfStudents
    .filter(student => student.location === city)
    .map(student => {
        const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
        student.grade = matchingGrade ? matchingGrade.grade : 'N/A';
        return student;
    });
}