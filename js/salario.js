function calcular () {
    let horas_trabajadas = document.getElementById("horas_trabajadas").value;
    let valor_hora = document.getElementById("valor_hora").value;

    let total_pagar = horas_trabajadas * valor_hora;

    document.getElementById("salario_pagar").value = `${total_pagar}`;
}