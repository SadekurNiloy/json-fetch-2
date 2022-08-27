const user = {id: 1, name: 'sadik', job: 'web-development', }
// javaScript Object Notation
console.log(user);
const userJson = JSON.stringify(user);
console.log(userJson);
const userParse = JSON.parse(userJson)
console.log(userParse)