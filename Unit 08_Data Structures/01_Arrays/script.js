const numbers = []

//UNSORTED

for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 10) + 1;
    numbers.push(num);
}

document.getElementById("unsorted").innerHTML = numbers;

//SORTED

numbers.sort(function(a, b){return a - b});

document.getElementById("sorted").innerHTML = numbers;