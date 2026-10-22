function suma() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let suma = num1 + num2;

    document.getElementById("resultado").value = `${suma}`;
};

function resta() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resta = num1 - num2;

    document.getElementById("resultado").value = `${resta}`;
};

function multiplicacion() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let multiplicacion = num1 * num2;

    document.getElementById("resultado").value = `${multiplicacion}`;
};

function division() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let division = num1 / num2;

    document.getElementById("resultado").value = `${division}`;
};