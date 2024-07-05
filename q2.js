// assign interface/type to the function definition properly
function findTopNames(students) {
    /* Your code here */
    students = students.filter(function (x) { return x.score > 8; });
    var names = students.map(function (x) { return x.name; });
    return names;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
