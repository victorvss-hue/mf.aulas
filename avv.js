function converterCF() {
    var celsius = document.getElementById("celsius").value;

    if (celsius === "") {
        document.getElementById("resultado").innerText = "Por favor, insira uma temperatura em Celsius.";
        return;
    }

    var fahrenheit = (celsius * 9 / 5) + 32;
    var formula = `${celsius} × 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
    document.getElementById("resultado").innerText = `Cálculo: ${formula}`;
}

function converterFC() {
    var fahrenheit = document.getElementById("fahrenheit").value;

    if (fahrenheit === "") {
        document.getElementById("resultado").innerText = "Por favor, insira uma temperatura em Fahrenheit.";
        return;
    }

    var celsius = (fahrenheit - 32) * 5 / 9;
    var formula = `(${fahrenheit} - 32) × 5/9 = ${celsius.toFixed(2)} °C`;
    document.getElementById("resultado").innerText = `Cálculo: ${formula}`;
}

function converterCK() {
    var celsius = document.getElementById("celsius").value;

    if (celsius === "") {
        document.getElementById("resultado").innerText = "Por favor, insira uma temperatura em Celsius.";
        return;
    }

    var kelvin = parseFloat(celsius) + 273;
    var formula = `${celsius} + 273 = ${kelvin.toFixed(2)} K`;
    document.getElementById("resultado").innerText = `Cálculo: ${formula}`;
}

