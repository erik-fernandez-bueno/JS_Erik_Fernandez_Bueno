/*Exercici1*/
    function nomcognom() {
        var nom = "Erik";
        var cog1 = "Fernandez";
        var cog2 = "Bueno";
        return (nom +" "+ cog1 +" "+ cog2);
    }
    console.log(nomcognom())
/*Exercici2*/
    function mostraTipus(valor) {
        console.log(typeof valor);
    }
    mostraTipus(6)
/*Exercici3*/
    function obtenerFechaActual() {
        const fecha = new Date();
        return fecha;
    }

    console.log(obtenerFechaActual());
/*Exercici4*/
    function prova() {
        let missatge = "Hola!";
        console.log(missatge);
    }

    prova();
    /*console.log(missatge);*/
/*Exercici5*/
    function comptaVocals(text = "Erik Fernandez Bueno") {
        const coincidencies = text.match(/[aeiouàèéíòóúü]/gi);
        return coincidencies.length;
    }
    console.log(comptaVocals())
/*Exercici6*/
    function sumanums (a,b,c=123){
        console.log(a+b+c)
    }
    sumanums(12,25)
/*Exercici7*/
    function llamarfunciones (){
        console.log(obtenerFechaActual())
        return sumanums(8,6)
    }
    console.log(llamarfunciones())
/*Exercici8*/
    function es30 (a,b){
        if (a===30 | b===30 | a+b===30){
            return true
        }
    }
    console.log(es30(10,20))
/*Exercici9*/
    var es32 = function(c,d){
    if (c===30 | d===30 | c+d===30){
        return true
        }
    }
    console.log(es32(10,20))
/*Exercici10*/
    var sonelmismo =  (a, b) =>{
        if (a===b){
        return true
        }
        return false
    }
    sonelmismo(15, "16")
/*Exercici11*/
    var hypote = (catet1,catet2) =>{
    let hypotenusa= ((catet1*catet1) + (catet2*catet2))**0.5;
    console.log(hypotenusa.toFixed(2))
    }
    hypote(4,3)
/*Exercici12*/
    var aMinuscules = (text) =>{
        return text.toLowerCase();
    }

    console.log(aMinuscules("HOLA MÓN"));
/*Exercici13*/
    var retornaNoNull=(a, b)=> {
        if (a !== null) return a;
        return b;
    }
    console.log(retornaNoNull(12,))
/*Exercici14*/
    var posicio=(frase, paraula) =>{
        let index = frase.indexOf(paraula);
        let posicionsRestants = frase.length - index;
        return posicionsRestants;
    }
    var dividir=(frase, paraula)=> {
        let posicions = posicio(frase, paraula);
        let index = frase.indexOf(paraula);
        let resultat = frase.substring(index + paraula.length).trim();
        return resultat;
    }
    console.log(posicio("Hola com estàs", "com"));
    console.log(dividir("Hola com estàs", "com"));
/*Exercici15*/
    const triple = (x) => x + x + x;
    console.log(triple(5));