'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var toogleButton = document.getElementById('toolbar-toggle');
var menu = document.querySelector('ul');
var arrowNav = document.querySelector('.fa-arrow-right');

var img = document.querySelector('img');
var figName = document.querySelector('figcaption');

var images = [
	{'path': 'images/1.jpg','legend':'<h2>Street Art</h2>'},
	{'path': 'images/2.jpg','legend':'<h2>Fast Lane</h2>'},
	{'path': 'images/3.jpg','legend':'<h2>Colorful Building</h2>'},
	{'path': 'images/4.jpg','legend':'<h2>Skyscrappers</h2>'},
	{'path': 'images/5.jpg','legend':'<h2>City by night</h2>'},
	{'path': 'images/6.jpg','legend':'<h2>Tour Eiffel la nuit</h2>'},
]

var previousButton = document.getElementById('slider-previous');
var playButton = document.getElementById('slider-toggle');
var nextButton = document.getElementById('slider-next');
var randomButton = document.getElementById('slider-random');

var play = document.querySelector('.fa-play');

var currentIndex = 0;
var randomIndex;

var playInterval = null;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onOffButton() {
	menu.classList.toggle('hide');
	arrowNav.classList.toggle('fa-arrow-right');
	arrowNav.classList.toggle('fa-arrow-down');
}

function displayImage(index) {
	img.src = images[index].path;
	figName.innerHTML = images[index].legend;
}

function nextImage(index) {
	if(currentIndex < images.length - 1) {
		currentIndex++;
		displayImage(currentIndex);
	} 
}

function previousImage(index) {
	if (currentIndex > 0) {
		currentIndex--;
		displayImage(currentIndex);
	}
}

function playImage(index) {
	if (currentIndex < images.length - 1) {
		currentIndex++;
		displayImage(currentIndex);
	}
}


function buttonPlay() {
	play.classList.toggle('fa-play');
	play.classList.toggle('fa-pause');
	if (playInterval == null) {
		playInterval = window.setInterval(playImage, 1500);
	} else {
		window.clearInterval(playInterval);
		playInterval = null;
		console.log('hgj');
	}
}

function getRandomInteger (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomImage() {
    // Récupérer un index aléatoirement entre 0 et l'index le plus grand (images.length - 1)
    // Regénérer un chiffre tant que le chiffre généré aléatoirement équivaut à l'index en cours
    do {
        randomIndex = getRandomInteger(0, images.length - 1);
    } while(randomIndex == currentIndex);
    
    // Mettre à jour le currentIndex 
    // (car c'est cette variable qui a pour role de définir l'index de l'image en cours)
    currentIndex = randomIndex;
    
    // Afficher sur la page 
    displayImage(currentIndex);
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

displayImage(currentIndex);
toogleButton.addEventListener('click', onOffButton);

previousButton.addEventListener('click', previousImage);
nextButton.addEventListener('click', nextImage);
playButton.addEventListener('click', buttonPlay);

randomButton.addEventListener('click', randomImage);