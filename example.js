const name = ['henry', 'othniel', 'khar yoom']
const student = {
    name: 'Othniel',
    department: 'Computer science',
    level: '100L'
}

let stringified_student = JSON.stringify(student);
console.log(stringified_student);

console.log(JSON.parse(stringified_student))