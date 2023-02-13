function convertToF(celsius) {
    return (1.8 * celsius) + 32;       
}

function convertToC(fahrenheit) {
    return (fahrenheit - 32) * (5/9);       
}

function displayResult() {
    let celsius = document.getElementById("valor").value;
    let fahrenheit = convertToF(celsius).toFixed(2).replace('.', ',');
    let result = "A temperatura " + celsius + "°C é " + fahrenheit + "°F";
    document.getElementById("resultado").innerHTML = result;
}

function displayResult2() {
    let fahrenheit = document.getElementById("valor").value;
    let celsius = convertToC(fahrenheit).toFixed(2).replace('.', ',');
    let result = "A temperatura " + fahrenheit + "°F é " + celsius + "°C";
    document.getElementById("resultado").innerHTML = result;
}

function clearResult() {
    document.getElementById("resultado").innerHTML = "";
}



