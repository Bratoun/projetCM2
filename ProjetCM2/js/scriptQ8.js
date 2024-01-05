// script.js

function selectButton(buttonId) {
    // Désélectionne tous les boutons
    var buttons = document.querySelectorAll('.btnChoix');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });

    // Sélectionne le bouton cliqué
    var selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add('selected');
}


// Ajoutez des gestionnaires d'événements onclick pour chaque bouton
document.getElementById('choix1').onclick = function() {
    selectButton('choix1');
};

document.getElementById('choix2').onclick = function() {
    selectButton('choix2');
};

document.getElementById('choix3').onclick = function() {
    selectButton('choix3');
};

document.getElementById('choix4').onclick = function() {
    selectButton('choix4');
};


// Ajoute un gestionnaire d'événements onclick pour le bouton "Valider"
document.getElementById('choixValider').addEventListener('click', validateSelection);

function validateSelection() {
    // Vérifie quel bouton est sélectionné
    var selectedButton = document.querySelector('.btnChoix.selected');

    if (selectedButton) {
        var selectedButtonId = selectedButton.id;

        // Affiche une alerte différente en fonction du bouton sélectionné
        switch (selectedButtonId) {
            case 'choix1':
                alert('Mauvaise Réponse, retentez votre chance.');
                break;
            case 'choix2':
                alert('Mauvaise Réponse, retentez votre chance.');
                break;
            case 'choix3':
                alert('Bravo, bonne réponse! Le résultat est 86 car. La lettre est T, gardez-la de coté');
                break;
            case 'choix4':
                    alert('Mauvaise Réponse, retentez votre chance.');
                break;
            default:
                alert('Veuillez sélectionner une option avant de valider.');
        }
    } else {
        alert('Veuillez sélectionner une option avant de valider.');
    }
}

