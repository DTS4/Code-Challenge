// const Marks = "Grade A > 79, Grade B >= 60, Grade C => 49, Grade D => 40, Grade E < 40"

// function grade(Marks) {
//     if (Marks > 79) {
//         return grade = A
//     }
// } 


// console.log(grade())

 
let grade = parseInt(prompt("Enter student marks (0 - 100):"));
const marks = (grade >= 0 && grade <= 100)
if (marks) {
    if (grade > 79) {
        alert("Your grade is A");
    } else if (grade >= 60) {
        alert("Your grade is B");
    } else if (grade >= 49) {
        alert("Your grade is C");
    } else if (grade >= 40) {
        alert("Your grade is D");
    } else {
        alert("Your grade is E");
    }
}