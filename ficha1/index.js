function novo_min(lista_recebida)
{
    min_a_adicionar = lista_recebida[0];
    for(let i = 0; i < lista_recebida.length; i++)
    {
        if(lista_recebida[i] < min_a_adicionar)
        {
            min_a_adicionar = lista_recebida[i];
        }
    }
    return min_a_adicionar;
}
//console.log(novo_min([2,3,4,1,5]))

function novo_media(numeros_recebidos)
{
    var soma = 0;
    for(let i = 0; i < numeros_recebidos.length; i++)
    {
        soma += numeros_recebidos[i];
    }
    return soma / numeros_recebidos.length;
}
console.log(novo_media([12,8]))

//node index.js


//console.log("Hello World");


/*
//exc5
function calculateGrade(gp, gt)
{
    var grade = gp * 0.6 + gt * 0.4;
    if(grade >= 9.5)
        return true;
    else
        return false;
}
var approval = calculateGrade(12,16);
if(approval)
    console.log("Aprovado");
else
    console.log("Reprovado");
//calculateGrade(8,8);
*/




//exc6
function getMonthName(monthNumber)
{

    if(monthNumber == 1)
    {
        console.log("Janeiro");
    }
    else if(monthNumber == 2)
    {
        console.log("Fevereiro");
    }

    //var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    //if(monthNumber > 0 && monthNumber <= 12)
        //console.log(months[monthNumber - 1]);
}
//getMonthName(1);



//exc7
function getResult(number_one,number_two,operator)
{
    if(operator == "+")
    {
        return number_one + number_two;
    }
    else if(operator == "-")
    {
        return number_one - number_two;
    }
    else if(operator == "*")
    {
        return number_one * number_two;
    }
    else if(operator == "/")
    {
        return number_one / number_two;
    }
    else if(operator == "**")
    {
        return Math.pow(number_one,number_two);
    }
}
//getResult(2,2,"+");





//exc8
function multiplos_de_5()
{
    var valor = 0;
    while (valor <= 20)
    {
        console.log(valor);
        valor += 5;
    }
    /*
    for (let i = multiple; i <= limit; i+multiple)
    {
        console.log(i);
    }
    */
}
//multiplos_de_5();




//exc9
function soma_100(limit)
{
    /*
    var valor = 0;
    while (valor <= 100)
    {
        console.log(valor);
        valor += 1;
    }
    */
    var sum = 0;


}
//soma_100(100);




//exc10
function getFatorial(n)
{
    //tem que devolver 120
    var fact = 1;
    for (let i = 2; i <= n; i++)
    {
        fact *= i;
    }
    return fact;

}
//getFatorial(5);



//exc11
function maximum(array)
{
    var max = array[0];
    for (let i = 1; i < array.length; i++)
    {
        if(array[i] > max)
            max = array[i];
    }
    return max;
}
//var array = [2,3,4,6,1,0];
//var max = maximum(array);
//console.log(maximum([1,2,3,5,7]));

function minimum(lista_recebida)
{
    var valor_minimo = lista_recebida[0];
    for (let i = 1; i < lista_recebida.length; i++)
    {
        if(lista_recebida[i] < valor_minimo)
        valor_minimo = lista_recebida[i];
    }
    return valor_minimo;
}
//console.log(minimum([2,3,1,7]));

function media(lista_recebida)
{
    var soma = 0
    for (let i = 0; i < lista_recebida.length; i++)
    {
        soma += lista_recebida[i];
    }
    return soma / lista_recebida.length;
}
console.log(media([1,2,4]))

