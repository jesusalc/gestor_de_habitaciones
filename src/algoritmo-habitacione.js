function algoritmo(clientes, premium, economy){

    clientes.sort();
    const mayores = [];
    const menores = [];
    const result = [];

    for (var i = 0; i < clientes.length; i++ ){

        if (clientes[i] >= 100){
            mayores.push(clientes[i]);
        }else{
            menores.push(clientes[i]);
        }
    }

    let pre = 0;
    let eco = 0;

    //pregunto que si las habitaciones premium estan en su totalidad ocupadas
    if (mayores.length == premium  || mayores.length > premium){
        pre = suma(mayores, premium);
        if(menores.length > economy){
            eco = suma(menores, economy);
        }else{
            eco = suma(menores, menores.length);
        }

    }else{//pregunto si las habitaciones economy estan todas ocupadas
        if(menores.length < economy || menores.length == economy){
            pre = suma(mayores, mayores.length);
            eco = suma(menores, menores.length)
        }else{
            const cal = premium - mayores.length;
            pre = (suma(mayores, premium - cal)) + suma(menores, cal);
            menores.splice(menores.length - cal, cal);
            eco = suma(menores, economy);
        }
    }

    result.push(pre);
    result.push(eco);

    return result;
}

function suma(valores, cantidad){

    valores.sort();
    let sum = 0;

    for(var i = valores.length - cantidad; i < valores.length; i++ ){
        sum = sum + valores[i];
    }

    return sum;
}

module.exports = algoritmo
