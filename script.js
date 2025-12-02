// 1. Configuration des cartes (Paires d'émojis)
// S'assure d'avoir assez d'émojis pour ta grille
const emojis = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
];

// Récupère toutes les cartes HTML générées par PHP
const cards = document.querySelectorAll(".card");

// On calcule combien de paires on a besoin (Nombre de cartes / 2)
const pairsNeeded = cards.length / 2;

// On crée le tableau de jeu : on prend X emojis et on les double
let gameDeck = [];
for (let i = 0; i < pairsNeeded; i++) {
  // Si on n'a plus assez d'emojis différents, on boucle (modulo)
  let icon = emojis[i % emojis.length];
  gameDeck.push(icon, icon); // On ajoute la paire
}

// 2. Fonction pour mélanger (Shuffle)
gameDeck.sort(() => 0.5 - Math.random());

// 3. Distribution : On met les emojis dans les cartes HTML
cards.forEach((card, index) => {
  // On cible la face arrière (.card-back)
  const backFace = card.querySelector(".card-back");
  // Pour l'exemple, on remplace l'image par l'émoji.
  // Si tu as de vraies images, tu changerais card.querySelector('img').src
  backFace.innerHTML = `<div style="font-size:3rem; display:flex; justify-content:center; align-items:center; height:100%;">${gameDeck[index]}</div>`;

  // On stocke la valeur de la carte dans un attribut pour la comparaison facile
  card.dataset.value = gameDeck[index];

  // Ajout de l'événement clic
  card.addEventListener("click", flipCard);
});

// 4. Logique du jeu
let hasFlippedCard = false;
let lockBoard = false; // Empêche de cliquer sur plus de 2 cartes
let firstCard, secondCard;

function flipCard() {
  // Si le plateau est verrouillé ou si on clique sur la même carte, on ne fait rien
  if (lockBoard) return;
  if (this === firstCard) return;

  // Ajoute la classe CSS pour l'animation
  this.classList.add("flip");

  if (!hasFlippedCard) {
    // Premier clic
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // Deuxième clic
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  // Comparaison des valeurs
  let isMatch = firstCard.dataset.value === secondCard.dataset.value;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  // C'est une paire ! On enlève les écouteurs d'événements
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true; // On bloque le plateau le temps de l'animation
  // Pas de paire : on retourne les cartes après 1 seconde
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
