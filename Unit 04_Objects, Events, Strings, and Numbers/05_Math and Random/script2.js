function takeSquareRoot() {
    let number = +document.getElementById("input1").value;
    

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = squareRoot;
    
}


function takeAbs() {
    let number = +document.getElementById("input1").value;
    number = Math.abs(number);
    document.getElementById("abs").innerHTML = number;
}

function takeCosine() {
    let number = +document.getElementById("input1").value;
    number = Math.cos(number)
    document.getElementById("cos").innerHTML = number;
}