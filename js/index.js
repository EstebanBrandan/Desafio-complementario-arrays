class Producto{
    constructor(codigo, nombre, marca, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}

const productos = [];

productos.push(new Producto(1, "SMART TV" ,"LG", 200000));
productos.push(new Producto(2, "SMART TV", "PHILLIPS", 240000));
productos.push(new Producto(3, "SMART TV", "BGH", 75000));
productos.push(new Producto(4, "CONSOLA", "SONY", 179000));
productos.push(new Producto(5, "CELULAR", "SAMSUNG", 89000));
productos.push(new Producto(6, "CELULAR", "IPHONE", 250000));
productos.push(new Producto(7, "CELULAR", "XIAOMI", 35000));
productos.push(new Producto(8, "CELULAR", "LG", 54000));
productos.push(new Producto(9, "CELULAR", "MOTOROLA", 67000));
productos.push(new Producto(10, "TABLET", "SAMSUNG", 49000));

function calcularInteres(numeroProducto, numeroCuotas){
    let producto = productos.find(objeto => objeto.codigo == numeroProducto);
    if (producto.nombre == "SMART TV"){
        if (producto.marca=="LG"){
            switch(numeroCuotas){
                case 1:
                    return 0;
                case 3:
                    return 0;
                case 6:
                    return 0;
                case 12:
                    return 2;
                case 18:
                    return 3;
                case 24:
                    return 5;
                default:
                    return -1;
            }
        }else if(producto.marca=="BGH"){
            switch(numeroCuotas){
                case 1:
                    return 0;
                case 3:
                    return 5;
                case 6:
                    return 10;
                case 12:
                    return 15;
                case 18:
                    return 20
                case 24:
                    return 25;
                default:
                    return -1;
            }
        }else{
            switch(numeroCuotas){
                case 1:
                    return 0;
                case 3:
                    return 10;
                case 6:
                    return 15;
                case 12:
                    return 20;
                default:
                    return -1;
            }
        }
    }else if (producto.nombre=="CELULAR"){
        if (producto.marca=="LG"){
            switch(numeroCuotas){
                case 1:
                    return 0;
                case 3:
                    return 0;
                case 6:
                    return 0;
                case 12:
                    return 3;
                case 18:
                    return 5
                case 24:
                    return 10;
                default:
                    return -1;
            }
        }else if(producto.marca=="XIAOMI"){
            switch(numeroCuotas){
                case 1:
                    return 0;
                case 3:
                    return 0;
                case 6:
                    return 1;
                case 12:
                    return 2;
                case 18:
                    return 4
                case 24:
                    return 8;
                default:
                    return -1;
            }
        }else if(producto.marca=="SAMSUNG"){
            switch(numeroCuotas){
                case 1:
                    return 0;
                case 3:
                    return 1;
                case 6:
                    return 3;
                case 12:
                    return 5;
                case 18:
                    return 10
                default:
                    return -1;
            }
        }else{
            switch(numeroCuotas){
                case 1:
                    return 0;
                case 3:
                    return 5;
                case 6:
                    return 12;
                default:
                    return -1;
            }
        }
    }else{
        switch(numeroCuotas){
            case 1:
                return 0;
            case 3:
                return 20;
            case 6:
                return 25;
            case 12:
                return 30;
            case 18:
                return 35
            default:
                return -1;
        }
    }
}

function calcularCuota(numeroProducto, numeroCuotas, interes){
    if (interes != -1 && interes != -2){
        let producto = productos.find(objeto => objeto.codigo == numeroProducto);
        let valorCuota = (producto.precio / numeroCuotas) + ((producto.precio * interes) / 100)
        console.log("El valor de la cuota del producto " + producto.nombre + " " + producto.marca + " es " + valorCuota);
    } else if (interes == -1){
        console.log("No esta disponible la cantidad de cuotas seleccionadas para este producto.")
    } else {
        console,log("El producto no esta disponible")
    }
}

console.log(productos);
let numeroProducto = parseInt(prompt("Ingrese el numero del producto"));
let numeroCuotas = parseInt(prompt("Ingrese la cantidad de cuotas"));
let interes = calcularInteres(numeroProducto, numeroCuotas);
calcularCuota(numeroProducto, numeroCuotas, interes);