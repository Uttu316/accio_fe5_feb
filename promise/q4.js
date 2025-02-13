// write  a function  which returns a promise,
// this function has an array of objects with name and age of students
// ask a prompt from user of age
// return all students names come under that age

//function
//return new Promise
// inside callback of Promise, create an array of objects
// ask prompt for age convert it into integer
// filter the array based on age
// resolve the filtered array

// call the function and print the output in then block

function students() {
  return new Promise((res, rej) => {
    let student = [
      { name: "rahil", age: 24 },

      { name: "praveen", age: 22 },

      { name: "affan", age: 19 },

      { name: "ayaan", age: 18 },
    ];

    let result = [];

    let age = parseInt(prompt("enter age:"));

    let filarr = student.filter((data) => {
      if (data.age <= age) {
        return true;
      }
      return false;
    });

    if (filarr) {
      res(filarr);
    } else {
      rej("not eligible for ....");
    }
  });
}

students()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

function getStudentsByAge() {
  return new Promise((resolve, reject) => {
    const students = [
      { name: "ct", age: 15 },

      { name: "Bob", age: 17 },

      { name: "hari", age: 14 },

      { name: "David", age: 16 },

      { name: "kein", age: 18 },
    ];

    const age = parseInt(prompt("Enter age: "), 10);

    if (isNaN(age)) {
      reject("Invalid input!");
    } else {
      resolve(students.filter((s) => s.age <= age).map((s) => s.name));
    }
  });
}

getStudentsByAge()
  .then((result) => console.log("Students:", result))
  .catch((error) => console.error(error));

function getStudentNames() {
  return new Promise((resolve, reject) => {
    const students = [
      { name: "Sujata", age: 22 },

      { name: "Bobby", age: 24 },

      { name: "Bhagya", age: 19 },

      { name: "Kajal", age: 23 },

      { name: "Rekha", age: 18 },
    ];

    const agePrompt = prompt("Enter an age:");

    if (agePrompt === null || agePrompt === "") {
      reject("No age entered.");

      return;
    }

    const age = parseInt(agePrompt);

    if (isNaN(age)) {
      reject("Invalid age entered.");

      return;
    }

    const namesUnderAge = students
      .filter((student) => student.age < age)
      .map((student) => student.name);

    resolve(namesUnderAge);
  });
}

getStudentNames()
  .then((names) => {
    console.log("Students under the given age:", names);
  })

  .catch((error) => {
    console.error("Error:", error);
  });
