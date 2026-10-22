function calcular() {
   
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precio_unitario = parseFloat(document.getElementById("precio_unitario").value);
    let subTotal = (precio_unitario*cantidad);
    let iva = 0.19 * subTotal;
    let descuento = 0; 


    if (cantidad > 10) {
        descuento = subTotal*0.05;
    }
    
    let totalPagar = subTotal - descuento + iva;


    document.getElementById("subTotal").value = `${subTotal.toLocaleString()}`;
    document.getElementById("iva").value = `${iva}`;
    document.getElementById("descuento").value = `${descuento.toLocaleString()}`;
    document.getElementById("totalPagar").value = `${totalPagar.toLocaleString()}`
}