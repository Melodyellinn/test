//On crée une variable qui va contenir la valeur 'Rama'
let prenom = 'Rama';

prenom = 'Jean';


let nombre = 10.5;
let booléenne = true; //ou false

console.log (prenom);


//Afficher dans la console le contenu des variables nombre et booléenne

console.log(nombre);
console.log(booléenne);

//Il vaut mieux séparer les consoles différentes mais on peut procéder comme ci :
console.log(prenom, nombre, booléenne);

//On récupère dans le document HTML l'élément qui a un id "para"
let para = document.querySelector('#para');

//On modifie le contenu textuel de l'élément en question
//para.textContent = 'Bloup';
para.textContent = prenom;

//le .style touche le CSS
//modifier le paragraphe pour le mettre en rouge
//avec un fond bleu
//et en gras
para.style.color= 'red';
para.style.backgroundColor= 'blue';
para.style.fontWeight= 'bold';
//On modifie le style CSS de l'élément pour mettre sa couleur de texte en rouge
//On utilise ces commandes dans des cas très particulier

