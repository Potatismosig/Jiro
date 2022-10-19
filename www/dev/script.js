function getContentFromApi(filename, callback) {
  fetch("http://localhost:1995/api/content/render/" + filename)
    .then((response) => (response = response.text()))
    .then((content) => {
      callback(content);
      document.querySelector(selector).innerHTML = marked.parse(content.data); 
      hljs.highlightAll(); 
    });
}
let user1;
let user2;
let user3;

function getUsers() {
  fetch("http://localhost:1995/api/users/")
    .then((response) => (response = response.json()))
    .then((users) => {
      //callback(users);
      console.log(users);
      console.log(users[0]);
      user1 = users[0];
      user2 = users[1];
      user3 = users[2];
    });
}

//------------------------
console.log("test");

// Startar Fetch med getUsers
getUsers();

let btnJiro = document.querySelector(".jiro");
let btnJohn = document.querySelector(".john");
let btnJunie = document.querySelector(".junie");
let paraOutput = document.querySelector(".para-output");

btnJiro.addEventListener("click", () => {
  outputUsers(user1);
});

btnJunie.addEventListener("click", () => {
  outputUsers(user3);
}); //När användaren klickar på Junie så ska funktion OutputUsers visas. I detta fall info om User3

btnJohn.addEventListener("click", () => {
  outputUsers(user2);
});

function outputUsers(currentUser) {
  console.log(currentUser);
  let fName = currentUser.firstname;
  let lName = currentUser.lastname;
  let age = currentUser.age;
  paraOutput.textContent = `Firstname: ${fName} Lastname: ${lName} Age: ${age}`;
}
/*
function writeJiro() {
  console.log(user1);
  let fName = user1.firstname;
  let lName = user1.lastname;
  let age = user1.age;
  paraOutput.textContent = `Firstname ${fName} Lastname ${lName} Age ${age}`;
}
function writeJunie() {
  console.log(user3);
  let fName = user3.firstname;
  let lName = user3.lastname;
  let age = user3.age;
  paraOutput.textContent = `Firstname ${fName} Lastname ${lName} Age ${age}`;
}
function writeJohn() {
  console.log(user2);
  let fName = user2.firstname;
  let lName = user2.lastname;
  let age = user2.age;
  paraOutput.textContent = `Firstname ${fName} Lastname ${lName} Age ${age}`;
}
*/
