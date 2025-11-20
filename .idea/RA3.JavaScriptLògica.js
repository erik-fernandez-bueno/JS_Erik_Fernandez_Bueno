/*Exercici1*/
    var num = 21
    if (num%3===0){
        console.log(num +" Es multiple de 3")
    }
    if (num%7===0){
        console.log(num +" Es multiple de 7")
    }

/*Exercici2*/
    var x= 12
    var y= 51
    x <= 50 && x >= 10 ? console.log(x+ " está dins del rang") : console.log(x+" no esta dins del rang")
    y <= 50 && y >= 10 ? console.log(y+ " está dins del rang") : console.log(y+" no esta dins del rang")

/*Exercici3*/
    var z = 7
    if (z<4.99) {console.log("Suspès")}
    else if (z<5.99) {console.log("Suficient")}
    else if (z<6.99) {console.log("Bé")}
    else if (z<8.99) {console.log("Notable")}
    else {console.log("Excel·lent")}

/*Exercici4*/
    var num = 21
    if(num%3===0 && num%7===0){
        var comp = 1
    }
    else if (num%3===0){
        var comp = 2
    }
    else if (num%7===0) {
        var comp = 3
    }
    else{
        var comp =4
    }
    switch (comp){
        case 1:
            console.log(num +" Es multiple de 3 i de 7")
            break;
        case 2:
            console.log(num +" Es multiple de 3")
            break;
        case 3:
            console.log(num +" Es multiple de 7")
            break;
        case 4:
            console.log(num +" No es multiple ni de 3 ni de 7")
            break;
    }
/*Exercici5*/
    var x = 15
    let sum = 0;
    let n = 0;
    for (let i = 1; sum + i <= x; i++) {
        sum += i;
        n = i;
    }
    console.log(n)
/*Exercici6*/
    var palabra = 'fuq387beif9gaiu9'
    var suma =0
    for (let i = 1; i<palabra.length; i++) {
        if (palabra[i].match(/[1-9]/)) {
            suma = suma +i;
        }
    }
    console.log(suma)
/*Exercici7*/
    var numero1 = 73
    var numero2=12
    var numero3= 89
    let numeros = [numero1,numero2,numero3];
    numeros.sort(function(x, y) {
    return y - x;
    });
    console.log(numeros);
/*Exercici8*/
var numerico=14
for (let i = 0; i<=numerico; i++) {
    if(i%2==0){
        console.log(i +"Es parell")
    }
    else{
        console.log(i+"Es senar")
    }
}
/*Exercici9*/
    var asterix =''
    for (let i = 0; i<5; i++) {
        asterix = asterix+'*'
        console.log(asterix)
    }
/*Exercici10*/
    let instagram = 1;
    let sumalola = 0;

    do {
        if (instagram % 3 === 0 || instagram % 5 === 0) {
            sumalola += instagram;
        }
        instagram++;
    } while (instagram <= 1000);

    console.log(sumalola);
/*Exercici11*/
    var asterix =''
    for (let i = 0; i<5; i++) {
        asterix = asterix+'*'
        if (i%2!==0){
            continue
        }
        console.log(asterix)
    }
/*Exercici12*/
let palabracanviarposi = "123456".split("");
console.log(palabracanviarposi.join(""));
for (let i = 0; i < palabracanviarposi.length; i += 2) {
    let temp = palabracanviarposi[i];
    palabracanviarposi[i] = palabracanviarposi[i+1];
    palabracanviarposi[i+1] = temp;
}
console.log(palabracanviarposi.join(""));