function gradingStudents(grades) {
    
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            grades[i]=grades[i];
        } else
            if (grades[i]%5>=3) {

                grades[i] = (grades[i] + (5 - (grades[i] % 5)));
            }
    }

    return grades;

}
