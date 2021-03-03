
function mostrar()
{
	
	let nombre;
	let tipo;
	let precio;
	let unidades;
	let categoria;
	let fabricante;

	
	let acumuladorAlcohol = 0;
	let acumuladorIac = 0;
	let acumuladorQuat = 0;
	
	let contadorAlcohol = 0;
	let contadorIac = 0 ;
	let contadorQuat = 0 ;
	let contadorDesinfectante = 0;
	let contadorBactericida = 0;
	let contadorDetergente = 0;
	let contadorDetergenteOferta = 0;
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat;
	let categoriaMaxCantidad;
	let productoMasCaro;
	let fabricanteMasCaro;
	let flag = 1;





	for (let i = 0 ; i < 5 ; i++){


	nombre = prompt ("Ingrese nombre");

	tipo = prompt ("Ingrese tipo de producto: ");
		while (tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT"){

			tipo = prompt ("Tipo inválido. Reingrese tipo de producto: ");
		}

	precio = parseInt (prompt ("Ingrese precio: ") );
		while (precio < 100 || precio > 300){
			precio = parseInt (prompt ("Precio inválido. Reingrese precio: "));
		}

	unidades = parseInt (prompt ("Ingrese cantidad de unidades: ") );
		while (unidades < 0 || unidades > 1000){
			unidades = parseInt (prompt ("Error. Reingrese cantidad de unidades: "));
		}

	categoria = prompt ("Ingrese categoria: ");
		while (categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente" ){
			categoria = prompt ("Error. Reingrese categoria: ");
		}

	fabricante = prompt ("Ingrese fabricante");



//a) El promedio de cantidad por tipo de producto


	switch (tipo){

		case "ALCOHOL":

			acumuladorAlcohol += unidades; 
			contadorAlcohol++;
			break;
	
		case "IAC":

			acumuladorIac += unidades;
			contadorIac++;
			break;
	
		case "QUAT":
			
			acumuladorQuat += unidades;
			contadorQuat++;
			break;
		}
		
		
	//b) La categoria con mas cantidad de unidades en total de la compra


	switch (categoria){

		case "desinfectante":

			contadorDesinfectante++;
			break;
	
		case "bactericida":

			
			contadorBactericida++;
			break;
	
		case "detergente":
			
			contadorDetergente++;
			break;
		}

		//c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total

			if ( categoria == "detergente" && precio <= 200){
				contadorDetergenteOferta++;
			}



		//d) el fabricante y Categoria del más caro de los productos

		if(flag || precio > productoMasCaro){  
			
			productoMasCaro= precio;     
			fabricanteMasCaro = fabricante;
			flag=0;  
		
			}
		
	}






// a) Saco promedio: 

	if( contadorAlcohol != 0){

		promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
		
	}
	if( contadorIac != 0){

		promedioIac = acumuladorIac / contadorIac;
		
	}
	if( contadorQuat != 0){

		promedioQuat = acumuladorQuat / contadorQuat;
		
	}

// b) 

	if (contadorDesinfectante > contadorBactericida && contadorDesinfectante > contadorDetergente){
		categoriaMaxCantidad = "desinfectante";

	} else if (contadorBactericida > contadorDesinfectante && contadorBactericida > contadorDetergente) {
		categoriaMaxCantidad = "bactericida";
	
	} else {
		categoriaMaxCantidad = "detergente";
		   }


console.log ("El promedio de cantidad de ALCOHOL es: " + promedioAlcohol);
console.log ("El promedio de cantidad de IAC es: " + promedioIac);
console.log ("El promedio de cantidad de QUAT es: " + promedioQuat);
console.log ("La categoria con mas cantidad de unidades en total de la compra es: " + categoriaMaxCantidad);
console.log ("Las unidades de detergente con precios menos a 200 se compraron en total son: " + contadorDetergenteOferta );
console.log ("El fabricante y categoria del más caro de los productos es: " + fabricanteMasCaro + "con un precio de " + productoMasCaro );

}



/*


1- Declarar variables (nombre, tipo (validar), precio (validar), unidades (validar), categoria (validar), 
	fabricante).

2-Validar las variables correspondientes.

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:

el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.



Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos









*/