//exc1
function indice_massa_corporal(peso,altura){
    var imc = peso / (altura * altura);
    console.log("O seu imc é: " + imc);

    if(imc < 18.5){
        console.log("Abaixo do peso");
    }
    else if(imc >= 18.5 && imc < 25){
        console.log("Peso normal");
    }
    else if(imc >= 25 && imc < 30){
        console.log("Está acima do peso");
    }
    else if(imc >= 30){
        console.log("Está obeso");
    }
}
//indice_massa_corporal(120,1.65);

//exc2
function ordem_inversa(str){
    var splittedstr = str.split(" ")
    var reversedStr = "";
    for (let i = 0; i < splittedstr.length; i++) {
        for (let j = splittedstr[i].length -1; j >=0; j--) {
            reversedStr += splittedstr[i][j];
            
            //var word = splittedstr[0][0]
            //console.log(splittedstr[i][j]);
        }
        reversedStr+= " ";
    }
    return reversedStr
}
var str = "Hoje é Domingo";
var rev =ordem_inversa(str);
console.log(rev);
