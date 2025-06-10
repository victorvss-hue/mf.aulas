function converterCF() {
    var celsius = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsius)) {
        document.getElementById("resultado").innerText = "Por favor, insira uma temperatura em Celsius.";
        return;
    }

    var fahrenheit = (celsius * 9 / 5) + 32;
    var formula = `${celsius} × 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
    document.getElementById("resultado").innerText = `Cálculo: ${formula}`;
}

function converterFC() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    if (isNaN(fahrenheit)) {
        document.getElementById("resultado").innerText = "Por favor, insira uma temperatura em Fahrenheit.";
        return;
    }

    var celsius = (fahrenheit - 32) * 5 / 9;
    var formula = `(${fahrenheit} - 32) × 5/9 = ${celsius.toFixed(2)} °C`;
    document.getElementById("resultado").innerText = `Cálculo: ${formula}`;
}

function converterCK() {
    var kelvin = parseFloat(document.getElementById("kelvin").value);

    if (isNaN(kelvin)) {
        document.getElementById("resultado").innerText = "Por favor, insira uma temperatura em Kelvin.";
        return;
    }

    var celsius = kelvin - 273;
    var formula = `${kelvin} - 273.15 = ${celsius.toFixed(2)} °C`;
    document.getElementById("resultado").innerText = `Cálculo: ${formula}`;
}

function converterKC() {
    var celsius = parseFloat(document.getElementById("celsiusCK").value);

    if (isNaN(celsius)) {
        document.getElementById("resultado").innerText = "Por favor, insira uma temperatura em Celsius.";
        return;
    }

    var kelvin = celsius + 273;
    var formula = `${celsius} + 273 = ${kelvin.toFixed(2)} K`;
    document.getElementById("resultado").innerText = `Cálculo: ${formula}`;
}
