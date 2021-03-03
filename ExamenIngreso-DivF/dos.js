function mostrar()
{
  
  let nombre;
  let situacionLaboral;
  let cantidadMaterias;
  let sexo;
  let nota;
  let edad;
  let seguir;
  let flag = 1;
  let flag2 = 1;

  let promedioBuscando;
  let promedioTrabajando;
  let promedioSoloEstudiante;
  let mejorPromedioEstudiante;

  let acumuladorBuscando = 0;
  let acumuladorTrabajando = 0;
  let acumuladorSoloEstudiante = 0;
  let contadorBuscando = 0;
  let contadorTrabajando = 0;
  let contadorSoloEstudiante = 0;

  let alumnoSEMasViejo;  
  let nombreAlumnoSEMasViejo;
  
  let nombreCursaMenosMaterias;
  let edadcursaMenosMaterias;

  





do {
  nombre = prompt("Ingrese nombre: ");
  
  situacionLaboral = prompt("Ingrese situacion laboral: ");
      while (situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "solo estudiante"){
        situacionLaboral = prompt("Error. Ingrese situacion laboral: ");
      }

  cantidadMaterias = parseInt (prompt("Ingrese cantidad de materias: "));
      while (cantidadMaterias < 0 || cantidadMaterias > 8){
    cantidadMaterias = parseInt(prompt("Error. Ingrese cantidad de materias: "));
  }

  sexo = prompt("Ingrese sexo: ");
      while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario"){
      sexo = prompt("Error. Ingrese sexo: ");
    }


  nota = parseInt (prompt("Ingrese nota: "));
  while (nota < 0 || nota > 10){
    nota = parseInt (prompt("Error. Ingrese nota: "));
  }



  edad = parseInt (prompt("Ingrese edad: "));
  while (isNaN (edad)){
    edad = parseInt (prompt("Error. Ingrese edad: "));
  }




//a) El nombre del mejor promedio de los que no trabajan o estan buscando (estudiantes)




// c) El promedio de nota por situacion laboral

switch (tipo){

  case "buscando":

    acumuladorBuscando = acumuladorBuscando + nota; 
    contadorBuscando++;
    break;

  case "trabajando":

    acumuladorTrabajando += nota;
    contadorTrabajando++;
    break;

  case "solo estudiante":
    
    acumuladorSoloEstudiante += nota;
    contadorSoloEstudiante++;
    break;
  }


  //b) El nombre del mas viejo de los alumnos que solo sea estudiantes

  if( situacionLaboral == "solo estudiante" &&  (flag || edad > alumnoSEMasViejo) ){  
			
    alumnoSEMasViejo= edad;     
    nombreAlumnoSEMasViejo = nombre;
    flag=0;  
  
    }




    // La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo

    if(sitacionLaboral == "buscando" && (flag || materias < cursaMenosMaterias) ){  
			
      
     nombreCursaMenosMaterias = nombre;
     edadcursaMenosMaterias = edad;
     flag2=0; 
    }





} while (seguir == "si");



  
if( contadorBuscando != 0){

		promedioBuscando = acumuladorBuscando / contadorBuscando;
		
	}
	if( contadorTrabajando != 0){

		promedioTrabajando = acumuladorTrabajando / contadorTrabajando;
		
	}
	if( contadorSoloEstudiante != 0){

		promedioSoloEstudiante = acumuladorSoloEstudiante / contadorSoloEstudiante;
		
	}


 
 console.log("El nombre del mas viejo de los alumnos que solo es estudiantes: " + nombreAlumnoSEMasViejo );
 console.log ("El promedio de nota para Buscando: "+ promedioBuscando );
 console.log ("El promedio de nota para Trabajando" + promedioTrabajando);
 console.log ("El promedio de nota para Solo estudiante" + promedioSoloEstudiante);
 console.log ("La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo" + nombreCursaMenosMaterias + edadcursaMenosMaterias );
 


}




/*

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, 
los datos solicitados son:



nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que  de los que no trabajan o estan buscando (estudiantes)
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo

cambiamos el estado civil  que no se pide por pami (la mujer de pami mas joven)











*/