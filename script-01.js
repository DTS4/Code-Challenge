 let grade = parseInt(prompt("Enter your grade (0 - 100):"));
const marks = (grade >= 0 && grade <= 100)
if (marks) {
    if (grade > 79) {
        console.log("A");
    } else if (grade >= 60) {
        console.log("B");
    } else if (grade >= 49) {
        console.log("C");
    } else if (grade >= 40) {
        console.log("D");
    } else {
        console.log("E");
    }
}