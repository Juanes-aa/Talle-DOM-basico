function calcular_presupuesto() {
    let num_invitados = parseInt(document.getElementById("num_invitados").value);
    let costo_comida = parseFloat(document.getElementById("costo_invitado").value);
    let bebida_invitado = parseFloat(document.getElementById("bebida_invitado").value);
    let costo_decoracion = parseFloat(document.getElementById("costo_decoracion").value);
    let costo_musica = parseFloat(document.getElementById("costo_musica").value);
    let propina = parseInt(document.getElementById("propina").value);

    let comida_total = num_invitados*costo_comida;
    let bebida_total = num_invitados*bebida_invitado;
    let subtotal = comida_total + bebida_total + costo_decoracion + costo_musica;
    let propina_total = subtotal*(propina/100);
    let total_pagar = subtotal+propina_total;
    let costo_invitado = total_pagar / num_invitados;

    document.getElementById("comida_total").innerHTML = `${comida_total.toLocaleString()}`;
    document.getElementById("bebida_total").innerHTML = `${bebida_total.toLocaleString()}`;
    document.getElementById("decoracion_total").innerHTML = `${costo_decoracion.toLocaleString()}`;
    document.getElementById("musica_total").innerHTML = `${costo_musica.toLocaleString()}`;
    document.getElementById("subtotal").innerHTML = `${subtotal.toLocaleString()}`;
    document.getElementById("propina_total").innerHTML = `${propina_total.toLocaleString()}`;
    document.getElementById("total_pagar").innerHTML = `${total_pagar.toLocaleString()}`;
    document.getElementById("costo_invitado_total").innerHTML = `${costo_invitado.toLocaleString()}`;
};
