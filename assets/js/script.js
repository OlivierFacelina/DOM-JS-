// On déclare la variable et on sélectionne les éléments 
let ul = document.querySelector('ul')
let input = document.querySelector('input')

// Création de la fonction pour ajouter à la liste
function addToList() {

    // On récupère la valeur du champ
    textChamp = document.getElementById('item')
    console.log(textChamp)
    
    // On crée les 3 éléments et on les stocke dans une variable
    let li = document.createElement('li');
    console.log(li)
    let span = document.createElement('span')
    console.log(span)
    let button = document.createElement('button')

    // On nomme le bouton "supprimer"
    button.textContent = 'Supprimer'

    // Pour pouvoir l'affecter / le lier dans ma fonction
    button.setAttribute('onclick',"removeToList()")
    console.log(button)

    // Ajouter la valeur de l'input comme enfant de span
    span.textContent = input.value

    // Ajouter les enfants à leur parent
    li.appendChild(span)
    li.appendChild(button)
    ul.appendChild(li)
}

// Création de la fonction pour supprimer la liste
function removeToList() {
    // On déclare la variable liste en lui mettant la valeur précédemment trouvée
    let li = document.querySelector('li')
    // On la supprime de son élément parent
    ul.removeChild(li)
}
