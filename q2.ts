//660610757 ณัฐรดา หนูจิตร
// define interface for Student object
/* Your code here */
interface Student {
  name: string;
  score: number;
}
// assign interface/type to the function definition properly
function findTopNames(students) {
  /* Your code here */
    students=students.filter((x) => x.score > 8);
    let names = students.map((x) => x.name);
    return names;
}

// assign interface/type to the student1 object properly
const students1 : Student [] = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
