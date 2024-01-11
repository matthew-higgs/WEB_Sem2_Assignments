let number1 = prompt("Enter a number: ");
let number2 = prompt("Enter another number: ");

number1 = +number1;
number2 = +number2;

console.log (typeof(number1));

sum = number1 + number2;
dif = number1 - number2;
prod = number1 * number2;
quo = number1 / number2;
mod = number1 % number2;

document.getElementById("sum").innerHTML = sum;
document.getElementById("dif").innerHTML = dif;
document.getElementById("prod").innerHTML = prod;
document.getElementById("quo").innerHTML = quo;
document.getElementById("mod").innerHTML = mod;