function convertToF(celsius) {
    return (1.8 * celsius) + 32;       
}

function displayResult() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = convertToF(celsius).toFixed(2).replace('.', ',');
    let result = "A temperatura " + celsius + "°C é " + fahrenheit + "°F";
    document.getElementById("resultado").innerHTML = result;
}

function clearResult() {
    document.getElementById("resultado").innerHTML = "";
}



