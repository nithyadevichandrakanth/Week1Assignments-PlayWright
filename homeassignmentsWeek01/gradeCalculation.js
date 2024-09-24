function gradeCalculation (studentScore){

switch (studentScore) {
    case 90 :
        return `Firt Class`
        break;

    default:
        return `Second Class`
        break;
}
}

let studentScore=100;
//let grade = gradeCalculation(studentScore)
console.log(gradeCalculation(studentScore));
