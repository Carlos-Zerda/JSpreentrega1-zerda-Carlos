let sino=prompt("Hola, Queres saber como se calcula el valor de tu cuota en un prestamo? si/no");
if (sino === "si" || sino==="SI"|| sino==="Si"){

    let nombreUsuario =prompt("Perfecto. Me presento, mi nombre es CALCULADORA1, cual es el tuyo?");

    alert("Ok "+nombreUsuario+" comencemos!!");

    alert("Primero debemos ingresar algunos datos para poder realizar los calulos");

    let monto = parseInt(prompt(nombreUsuario+" ingrese el monto que desea solicitar: "));
    for(i=0;i<5;i=i+1)
        if (monto>0){break;}
        else{alert("ingresaste un valor incorrecto");
        monto = parseInt(prompt(nombreUsuario+" ingrese el monto que desea solicitar: "))}

    let tiempo= parseInt(prompt(nombreUsuario+" ingrese la cantidad de tiempo (meses) en la que desea realizar el pago"));
    for(i=0;i<5;i=i+1)
        if(tiempo>0){break;}
        else{alert("ingresaste un valor incorrecto");
        tiempo= parseInt(prompt(nombreUsuario+" ingrese la cantidad de tiempo (meses) en la que desea realizar el pago"));}

    let interes=parseInt(prompt("ok "+nombreUsuario+" ahora vamos a introducir un valor que es con el que los bancos y financieras trabajan que se llama TASA FIJA NOMINAL ANUAL, que se expresa en porcentaje (%)"));
    for(i=0;i<5;i=i+1)
        if(interes>0){break;}
        else{alert("ingresaste un valor incorrecto");
        interes=parseInt(prompt("ok "+nombreUsuario+" ahora vamos a introducir un valor que es con el que los bancos y financieras trabajan que se llama TASA FIJA NOMINAL ANUAL, que se expresa en porcentaje (%)"));}

    alert("con estos datos ya podemos calcular el valor de las cuotas");
    alert("la formular seria Monto = Cuota x (1-(1+TFNA)^(-TIEMPO) . Esto seria: cuota x (1-(1+"+interes+"%)^(-"+tiempo+"))/"+interes);

    let exponente =tiempo*(-1)
    let calculoParcial1=(1+(interes/1000))
    let calculoParcial2=calculoParcial1**exponente
    let calculoParcial3=((1-calculoParcial2))/(interes/1000)
    let cuota = monto/calculoParcial3

    for(let i=1 ; i<=tiempo ; i=i+1){
    console.log("cuota: "+i+" = "+cuota)
    }

    alert("mira la consola para ver el detalle de cuotas")
    let valorTotal=A=> alert("el valor total a pagar es de "+A);
    valorTotal(cuota*tiempo);
    alert("si es un afano "+nombreUsuario+" , mejor ahorra. Gracias por calcular con nosotros. SALUDOS")
        
}
    
else{
       
    alert ("ok, hasta la proxima   ")
    
    
    }
