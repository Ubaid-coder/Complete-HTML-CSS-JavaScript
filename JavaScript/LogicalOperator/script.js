console.log("Starting");

const userAge  = 25;

(userAge >= 18) && (userAge <= 25);

const isCollegeStudent = (userAge >= 18) || (userAge <= 25);
const isSchoolStudent = (userAge >= 5) || (userAge <= 18);

const isStudent = isSchoolStudent || isCollegeStudent 