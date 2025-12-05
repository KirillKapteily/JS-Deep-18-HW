//1
let trin = document.querySelector(".trin")

let getStudentsBtn = document.querySelector("#get-students-btn")

let studentsid = document.querySelector(".studentsid");
let studentsname = document.querySelector(".studentsid");
let studentsAge = document.querySelector(".studentsAge");
let studentsCourse = document.querySelector(".studentsCourse");
let studentsSkills = document.querySelector(".studentsSkills");
let studentsEmail = document.querySelector(".studentsEmail");
let studentsStatus = document.querySelector(".studentsStatus");
let studentsActions = document.querySelector(".studentsActions");

let gottenInfo;

fetch("http://localhost:3000/students")
    .then((res) => { return res.json() })
    .then(studs => {
        gottenInfo = studs;
        console.log(gottenInfo);
        return studs;
    })
    .catch(err => console.log(err));

console.log(gottenInfo);

function getStudents() {
    fetch(`http://localhost:3000/students`)
        .then((res) => { return res.text() })
        .then(studs => { return console.log(studs) })
        .catch(err => console.log(err));
}

function renderStudents() {
    fetch(`http://localhost:3000/students`)
        .then((res) => res.json())
        .then(studs => {
            trin.innerHTML = "";
            studs.forEach(student => {
                const studentTh = document.createElement("tr");
                studentTh.innerHTML = `<th class="studentsid">ID: ${student.id}</th> <th class="studentsName">Name: ${student.name}</th> <th class="studentsid">Age: ${student.age}</th> <th class="studentsid">Course: ${student.course}</th> <th class="studentsid">Skills: ${student.skills}</th> <th class="studentsid">Email: ${student.email}</th><th class="studentsid">Enllored: ${student.isEnrolled}</th>`;
                trin.appendChild(studentTh);
            });
        })
        .catch(error => console.log(error));
}

// renderStudents()
getStudentsBtn.addEventListener("click", renderStudents);
//2
function addStudent() {
const info = {
     id: 6,
    name: "Jake Smith",
    age: 15,
    course: "Mobile App Development",
    skills: ["Swift", "Xcode"],
    email: "jake.smith@example.com",
    isEnrolled: true
}

const options = {
    method: "POST",
    body: JSON.stringify(info),
    headers: { "Content-Type": "application/json; charset=UTF-8" }
}

fetch("http://localhost:3000/students/", options)
    .then(res => res.json())
    .then(posts => console.log(posts))
}
//addStudent() loops the whole thing

//3
const infoForUpdate = {
    id: 3,
    name: "Jake Smith",
    age: 14,
    course: "Mobile App Development",
    skills: ["Java", "Kotlin", "Android Studio"],
    email: "dytro.shevchenko@example.com",
    isEnrolled: false
}

const options = {
    method: "PATCH",
    body: JSON.stringify(infoForUpdate),
    headers: { "Content-Type": "application/json; charset=UTF-8" }
}

function updateStudent() {
    fetch(`http://localhost:3000/students/3`, options)
        .then(res => res.json())
        .then(posts => console.log(posts))
        .catch(error => console.log(error));
}

updateStudent()

//4


function deleteStudent() {
const infoForDelete = {
    id: 7,
}

fetch(`http://localhost:3000/students/${infoForDelete.id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));
}

// deleteStudent()