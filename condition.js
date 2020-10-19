//if (condition)

//let numero = 10
//if (numero ==10){
//    console.log("ok")
//}else{
//    console.log("faux")
//}

//let age = 18
//if (age <18) {
//    console.log("Aline est mineure")
//}else{
//    console.log("Aline est majeure")
//}

//let ageMin = 18;
//let genre = 'femme';
//let ageHedy = 25;
//let genreHedy = 'femme';

//if (ageHedy >= ageMin && genreHedy==genre) {
//    console.log('Vous êtes sélectionnée');
//}else{
//    console.log('Vous ne pouvez pas entrer ici');
//}

//Lorsqu'on fait une fonction il faut l'appeler

//function appeler (){
//    console.log('Rama');
//}

//appeler();

//function aboyer(){
//    alert("ouaffff")
//}

//aboyer();

//function additionner(a, b){
//    return a+b;
//}

//additionner(2, 10);

//function soustraire(a, b){
//    return a-b;
//}

//soustraire(2 ,10);

//function multiplie (a, b){
//  return a*b;
//}

//multiplie(2, 10)

//let fruits = "Pomme";

//switch(fruits){
//    case "Oranges":
//    console.log("Oranges : 0.59 € le kilo");
//    break;

//    case "Mangue":
//    console.log("est meilleure");
//    break;

//default:
//console.log("J'aime")
//}

//Mettre ses fonctions

function additionner(a, b){
    return a+b;
}

additionner(2, 10);

function soustraire(a, b){
    return a-b;
}

soustraire(2 ,10);

function multiplie (a, b){
  return a*b;
}


//Pointer le symbole juste
let signe = "+";

switch (signe) {
    case "+":
      additionner(10,2)
      console.log(additionner(10,2))
      break;

    case "-":
    soustraire (10,5)
    console.log(soustraire(10,5))
      break;

    case "*":
    multiplie (2,10)
    console.log(multiplie(2,10))
      break;
//Si le symbole est faut il affiche le message par défaut
    default:
        console.log('AH!');
}