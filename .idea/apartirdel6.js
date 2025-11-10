/*Exercici6*/
    let num = 1234;        // number
    let big = 5678n;        // BigInt
    let bigAsNumber = Number(big);
    let suma = num + bigAsNumber;
    let resta = num - bigAsNumber;
    let multiplicacion = num * bigAsNumber;
    let division = num / bigAsNumber;
    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);
/*Exercici7*/
    let catet= 4
    let hypotenusa= ((catet*catet) + (catet*catet))**0.5;
    console.log(hypotenusa)
/*Exercici8*/
    let enter = 12
    let string="24"
    let dividir = enter / string
    console.log(dividir)
/*Exercici9*/
    let nom= "Erik Fernández Bueno"
    let cognom=(nom.slice(5,14))
    console.log(cognom)
    console.log(cognom.length)
/*Exercici10*/
    console.log(nom.slice(0,6),nom.slice(7))
/*Exercici11*/
    let a;
    let b = null;
    let suma = a + b;
    console.log(suma);
/*Exercici12*/
    let boolea = true;
    let text2 = boolea.toString();
    console.log(text2);
    let boolea1 = false;
    let text = boolea1 + "";
    console.log(text);
/*Exercici13*/
    let text = "Hola món";
    let booleaExplicit = Boolean(text);
    console.log(booleaExplicit);
    let text = "Hola món";
    if (text) {
        console.log("true");
    } else {
        console.log("false");
    }
/*Exercici14*/
    let valorTrue = true;
    let valorFalse = false;
    // 🔹 Coerción explícita
    let numExplicitoTrue = Number(valorTrue);
    let numExplicitoFalse = Number(valorFalse);
    console.log(`Number(true) = ${numExplicitoTrue}`);
    console.log(`Number(false) = ${numExplicitoFalse}`);
    // 🔹 Coerción implícita
    let numImplicitoTrue = valorTrue * 1;
    let numImplicitoFalse = valorFalse * 1;
    console.log(`true * 1 = ${numImplicitoTrue}`);
    console.log(`false * 1 = ${numImplicitoFalse}`);