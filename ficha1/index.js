/*
//////
console.log("Hello World");
*/

/*
//////exc5
function calculateGrade(gp, gt) {
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


//////exc6
function getMonthName(monthNumber){

    /*if(monthNumber == 1)
        console.log("Janeiro");
    */
    /*switch (monthNumber){
    case 1:
        console.log("Janeiro");
        break;
    default
    */
    var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    if(monthNumber > 0 && monthNumber <= 12)
        console.log(months[monthNumber - 1]);
}
getMonthName(12);



