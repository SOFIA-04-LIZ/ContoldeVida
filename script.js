const productos = [

    {
        sku:"3017966",
        material:"VICTORIA CHAMOY",
        vidaMaxima:180
    },

    {
        sku:"3018818",
        material:"VICTORIA 12 PK",
        vidaMaxima:180
    },

    {
        sku:"3018817",
        material:"CORONA EXTRA",
        vidaMaxima:210
    },

    {
        sku:"3018797",
        material:"MICHELOB ULTRA",
        vidaMaxima:120
    }

];

const skuList =
document.getElementById("skuList");

// LLENAR AUTOCOMPLETE

productos.forEach(producto=>{

    const option =
    document.createElement("option");

    option.value =
    producto.sku;

    option.label =
    producto.material;

    skuList.appendChild(option);

});

// CONVERTIR LETRA A MES

function obtenerMes(letra){

    const meses = {

        A:1,
        B:2,
        C:3,
        D:4,
        E:5,
        F:6,
        G:7,
        H:8,
        I:9,
        J:10,
        K:11,
        L:12
    };

    return meses[letra.toUpperCase()];
}

// CALCULAR VIDA

function calcularVida(){

    const sku =
    document.getElementById("skuInput")
    .value
    .trim();

    const lote =
    document.getElementById("lote")
    .value
    .trim();

    if(!sku || !lote){

        alert("Completa todos los campos");

        return;
    }

    const producto =
    productos.find(
        p => p.sku === sku
    );

    if(!producto){

        alert("SKU no encontrado");

        return;
    }

    // D106

    const letraMes =
    lote.charAt(0);

    const dia =
    lote.substring(1,3);

    const anio =
    "202" + lote.charAt(3);

    const mes =
    obtenerMes(letraMes);

    if(!mes){

        alert("Lote inválido");

        return;
    }

    const fechaLote =
    new Date(anio, mes - 1, dia);

    const hoy =
    new Date();

    const diferenciaMs =
    hoy - fechaLote;

    const diasActuales =
    Math.floor(
        diferenciaMs /
        (1000 * 60 * 60 * 24)
    );

    const porcentaje =
    (
        diasActuales /
        producto.vidaMaxima
    ) * 100;

    let resultado = "";

    if(porcentaje > 30){

        resultado = "RECHAZAR";

    }else{

        resultado = "ACEPTAR";
    }

    document.getElementById("resultado")
    .style.display = "block";

    document.getElementById("material")
    .textContent =
    producto.material;

    document.getElementById("fechaLote")
    .textContent =
    fechaLote.toLocaleDateString();

    document.getElementById("vidaMaxima")
    .textContent =
    producto.vidaMaxima;

    document.getElementById("diasActuales")
    .textContent =
    diasActuales;

    document.getElementById("porcentaje")
    .textContent =
    porcentaje.toFixed(2);

    const estatus =
    document.getElementById("estatus");

    estatus.textContent =
    resultado;

    estatus.classList.remove(
        "aceptar",
        "rechazar"
    );

    if(resultado === "ACEPTAR"){

        estatus.classList.add(
            "aceptar"
        );

    }else{

        estatus.classList.add(
            "rechazar"
        );
    }
}