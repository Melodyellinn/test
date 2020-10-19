let button = document.querySelector('button');

//function indique ce que l'on veut faire avec ce click
button.addEventListener('click', function() {
    console.log('click');
});

/**
 * Dans le HTML rajouter un paragraphe avec un id "mon-para"
 * Dans le JS capturer ce paragraphe
 * Dans le eventListener du button, faire en sorte de changer
 * Le texte de #mon-para par "bouton cliqué"
 * Toujours dans le JS, rajouter un eventListener au dblclick
 * sur #mon-para et faire en sorte que quand on double click dessus
 * ça chnage la taille du texte pour la mettre à 2em
 * Dans la HTML, rajouter une balise select avec un id "select-color" qui aura
 * plusieurs balises option dedans avec "red", "green", "blue" en value
 * Dans le JS, capturer le selct et ajouter un eventListener dessus pour l'event "change"
 * Dans cet eventListener, faire en sorte d'afficher en console la value du select
 * (même principe que si on voulait afficher son textContent, mais là c'est sa value)
 * Toujours dans l'eventListener, faire en sorte de modifier la couleur du texte de
 * #mon-para et lui assigner la value du select (celle qu'on a console log avant)
 */


let para = document.querySelector('#monpara');
let selectcolor = document.querySelector('#selectcolor');



button.addEventListener('click', function() {
    para.textContent = 'Bouton cliqué';
});

para.addEventListener('dblclick', function() {
    para.style.fontSize = '2em';
});


selectcolor.addEventListener('change', function() {
    para.style.color = selectcolor.value;
});