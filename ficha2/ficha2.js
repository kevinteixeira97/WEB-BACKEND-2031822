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
//var str = "Hoje é Domingo";
//var rev =ordem_inversa(str);
//console.log(rev);


//exc3
function devolve_vogais(frase_recebida){
    var letras_a_adicionar = "";
    var frase_recebida = frase_recebida.toLowerCase();
    for (const i in frase_recebida) {
        if (frase_recebida[i] == "a" || frase_recebida[i] == "e" || frase_recebida[i] == "i" || frase_recebida[i] == "o" || frase_recebida[i] == "u" || frase_recebida[i] == "w" || frase_recebida[i] == "y"){
            letras_a_adicionar += frase_recebida[i];
        }
    }
    return letras_a_adicionar;
}
//console.log(devolve_vogais("avdEeeiiiwsdwoo"));
//devolve_vogais("avdeeeiiiwsdwoo");


//exc4
function getNumero_letra(frase_recebida,letra){
    var numero_de_letras = 0;
    for (const i in frase_recebida){
        if (frase_recebida[i] == letra){
            numero_de_letras += frase_recebida[i];
        }
    }
    if (numero_de_letras.length > 0){
        return "A letra '" + letra + "' aparece " + (numero_de_letras.length - 1) + "x na frase_recebida '"+frase_recebida + "'.";
    }
    else{
        return "Não existe a letra '"+letra+"' na frase_recebida '" + frase_recebida + "'!"
    }
}
//getNumero_letra("bingbong","r");
//console.log(getNumero_letra("bingbong","r"));


//exc5
function getNum_horas(he,me,se,hs,ms,ss){
    var tse = he * 3600 + me * 60 + se;
    var tss = tss - tse;
}


//exc6
function desenha_retangulo(largura,altura){

    var str_asteriscos_em_largura = "";
    for (let i = 0; i < largura; i++){
        str_asteriscos_em_largura += "*";
    }

    var conta_altura = 0
    while(conta_altura < altura){
        conta_altura += 1;
        console.log(str_asteriscos_em_largura);
    }
}
//desenha_retangulo(20,10);


//exc7
function desenha_triangulo(altura){
    var str_asterisco = "*";
    var contagem = 0;
    while (contagem < altura){
        console.log(str_asterisco);
        contagem += 1;
        str_asterisco += "*";
    }
}
//desenha_triangulo(10);


//exc8
function desenha_caixas(lado){
    /*
    str_asterisco_a_adicionar_primeiralinha = "";
    
    str_asterisco = "*"
    for (let i = 0; i < lado; i++){
        str_asterisco_a_adicionar_primeiralinha += str_asterisco;
        
    }
    
    var contagem_primeira_linha = 0
    while (contagem_primeira_linha < 1){
        console.log(str_asterisco_a_adicionar_primeiralinha);
        contagem_primeira_linha += 1;
    }
    
    var contagem_linhas_com_primeiro_e_ultimo_asterisco = 0
    while(contagem_linhas_com_primeiro_e_ultimo_asterisco < lado){
        for (let i = 1; i < str_asterisco_a_adicionar_primeiralinha.length - 1; i++) {
            str_asterisco_a_adicionar_primeiralinha[i] = " ";
        }
        console.log(str_asterisco_a_adicionar_primeiralinha);
        contagem_linhas_com_primeiro_e_ultimo_asterisco += 1;

        //str_asterisco_a_adicionar_primeiralinha[1:-1]
    }
    */
    
    var box = "";
    for (let i = 0; i < lado; i++) {
        for (let j = 0; j < lado; j++) {
            if(i == 0 || i == lado - 1 || j == 0 || j == lado - 1){
                box += "*";
            }
            else{
                box += " ";
            }
        }
        box += "\n";
    }
    console.log(box);
}
//desenha_caixas(10);


function nota_testes(opcao_recebida){

    var student1 = {name: "Pedro", grade: 16};
    var student2 = {name: "Ana", grade: 9};
    var student3 = {name: "Tiago", grade: 10};

    var studentsList = [];
    studentsList.push(student1);
    studentsList.push(student2);
    studentsList.push(student3);


    var max_a_adicionar = studentsList[0].grade;
    var min_a_adicionar = studentsList[0].grade;
    var media_a_adicionar = 0;
    
    for (const i in studentsList) {
        if (opcao_recebida == "lista"){
            console.log(studentsList[i].name + ": " + studentsList[i].grade + " valores");
        }

        else if(opcao_recebida == "melhor nota"){
            if (studentsList[i].grade > max_a_adicionar){
                max_a_adicionar = studentsList[i].grade;      
            }
        }

        else if(opcao_recebida == "pior nota"){
            if (studentsList[i].grade < min_a_adicionar){
                min_a_adicionar = studentsList[i].grade;      
            }
        }

        else if(opcao_recebida == "nota media"){
            if(studentsList[i].grade >= 0){
                media_a_adicionar += studentsList[i].grade;
            }
        }

        else if(opcao_recebida == "notas negativas"){
            if (studentsList[i].grade < 9.5){
                console.log(studentsList[i].name + ": " + studentsList[i].grade + " valores");    
            }
        }

        else if(opcao_recebida == "notas positivas"){
            if (studentsList[i].grade >= 9.5){
                console.log(studentsList[i].name + ": " + studentsList[i].grade + " valores");    
            }
        }
    }
    
    if (opcao_recebida == "melhor nota") {
        console.log(max_a_adicionar);
    }
    else if (opcao_recebida == "pior nota") {
        console.log(min_a_adicionar);
    }
    else if (opcao_recebida == "nota media") {
        console.log(media_a_adicionar / studentsList.length);
    }
}
nota_testes("notas positivas");

