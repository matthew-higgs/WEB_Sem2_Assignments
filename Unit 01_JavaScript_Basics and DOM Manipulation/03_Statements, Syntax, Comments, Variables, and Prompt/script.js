let firstName = prompt("Enter your first name");
console.log(firstName);

let lastName = prompt("Enter your last name");
console.log(lastName);

let fullName = firstName + " " + lastName;
console.log(fullName);
document.getElementById("name").innerHTML = fullName;