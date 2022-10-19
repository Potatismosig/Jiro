
# Frontend 1- Examination task 

The purpose of this README.md is to document, define and solve a problem I've faced while working with my examination task.



## Project Description

The app I've created is a summary of everything we´ve learn so far in the course FrontEnd 1. The project consists of 3 key elements:

```
📂 data - users 
📂 index.html 
📂 script.js

```
There are 3 users in this app, and the information about each of them is stored in 3 separate j-son files.
The index.html and script.js (`DOM)` makes it's possible for us to present (`Fetch, promises)` the data about our 3 users on the web.
By using the function we created and then upon request show the data on the DOM based on the choosen parameters.


This app is useful in a thousand ways, the possibilities are endless. You could for example store data about products and clothes, and in this way run a web store online. 
The possibility is not limited to online web stores. Even if you run a online encyclopedia this code could be useful. So it's safe to say that as long as you wan't to present data on your web - this code is practical for you.

## To install and run this app
```
🏎️ npm install
🏎️💨 npm start
```

## Definition of the problem
As a beginner I always appreciate codes that is easy to read and to understand. 
As you can see, we currently have 3 users, and there are several ways to show their data on the web. 
In the code below, you can see that we've used `function`. In fact, we've created a function for all the users. 
By doing this, the code gets unnecessarily long, not to mention the method is untenable when we starts to have more users. 

```javascript
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
```
## Solution

💡By declaring new variables for all 3 users dynamicly like below we can shorten the code and also make it easier to read and to understand. 
```javascript
let paraOutput = document.querySelector(".para-output");

function outputUsers(currentUser) {
  console.log(currentUser);
  let fName = currentUser.firstname;
  let lName = currentUser.lastname;
  let age = currentUser.age;
  paraOutput.textContent = Firstname: ${fName} Lastname: ${lName} Age: ${age};
  ```

  
 Using shorter lines of code is more efficient than spreading the code over several lines. The more code you have, the more places for bugs to hide and finding them might be more of a hassle.
## Authors

- Jirawan Sangthong [@Potatismosig](https://www.github.com/potatismosig) 🥔