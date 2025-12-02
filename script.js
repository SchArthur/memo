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
  const frontFace = card.querySelector(".card-front");
  // Pour l'exemple, on remplace l'image par l'émoji.
  frontFace.innerHTML = `<div style="font-size:3rem; display:flex; justify-content:center; align-items:center; height:100%;">${gameDeck[index]}</div>`;

  // On stocke la valeur de la carte dans un attribut pour la comparaison facile
  card.dataset.value = gameDeck[index];
});

// 4. Logique de jeu
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
let moves = 0;
let timerInterval = null;
let seconds = 0;
let gameStarted = false;

// Éléments du DOM
const timerElement = document.getElementById("timer");
const movesElement = document.getElementById("moves");
const restartBtn = document.getElementById("restart-btn");
const victoryModal = document.getElementById("victory-modal");
const playAgainBtn = document.getElementById("play-again-btn");
const finalTimeElement = document.getElementById("final-time");
const finalMovesElement = document.getElementById("final-moves");

// Cacher la modal au départ
victoryModal.style.display = "none";

// Fonction pour démarrer le timer
function startTimer() {
  if (!gameStarted) {
    gameStarted = true;
    timerInterval = setInterval(() => {
      seconds++;
      const mins = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
      const secs = (seconds % 60).toString().padStart(2, "0");
      timerElement.textContent = `${mins}:${secs}`;
    }, 1000);
  }
}

// Fonction pour arrêter le timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Fonction pour réinitialiser le timer
function resetTimer() {
  stopTimer();
  seconds = 0;
  timerElement.textContent = "00:00";
  gameStarted = false;
}

// Fonction pour incrémenter les coups
function incrementMoves() {
  moves++;
  movesElement.textContent = moves;
}

// Fonction pour retourner une carte
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  // Démarrer le timer au premier clic
  startTimer();

  const checkbox = this.querySelector(".card-checkbox");
  checkbox.checked = true;

  if (!firstCard) {
    // Première carte retournée
    firstCard = this;
    return;
  }

  // Deuxième carte retournée
  secondCard = this;
  lockBoard = true;

  incrementMoves();
  checkForMatch();
}

// Fonction pour vérifier si les cartes correspondent
function checkForMatch() {
  const isMatch = firstCard.dataset.value === secondCard.dataset.value;

  if (isMatch) {
    disableCards();
    matchedPairs++;
    checkVictory();
  } else {
    unflipCards();
  }
}

// Fonction pour désactiver les cartes qui correspondent
function disableCards() {
  firstCard.classList.add("matched");
  secondCard.classList.add("matched");

  resetBoard();
}

// Fonction pour retourner les cartes qui ne correspondent pas
function unflipCards() {
  setTimeout(() => {
    firstCard.querySelector(".card-checkbox").checked = false;
    secondCard.querySelector(".card-checkbox").checked = false;

    resetBoard();
  }, 1000);
}

// Fonction pour réinitialiser le plateau
function resetBoard() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

// Fonction pour vérifier la victoire
function checkVictory() {
  if (matchedPairs === pairsNeeded) {
    stopTimer();
    showVictoryModal();
  }
}

// Fonction pour afficher la modal de victoire
function showVictoryModal() {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  finalTimeElement.textContent = `${mins}:${secs}`;
  finalMovesElement.textContent = moves;

  victoryModal.style.display = "flex";
}

// Fonction pour réinitialiser le jeu
function restartGame() {
  // Cacher la modal
  victoryModal.style.display = "none";

  // Réinitialiser les variables
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  matchedPairs = 0;
  moves = 0;
  movesElement.textContent = "0";

  // Réinitialiser le timer
  resetTimer();

  // Remélanger les cartes
  gameDeck.sort(() => 0.5 - Math.random());

  // Redistribuer et réinitialiser les cartes
  cards.forEach((card, index) => {
    const frontFace = card.querySelector(".card-front");
    frontFace.innerHTML = `<div style="font-size:3rem; display:flex; justify-content:center; align-items:center; height:100%;">${gameDeck[index]}</div>`;
    card.dataset.value = gameDeck[index];

    // Retourner toutes les cartes face cachée
    card.querySelector(".card-checkbox").checked = false;
    card.classList.remove("matched");
  });
}

// Ajouter les événements de clic sur les cartes
cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    flipCard.call(card);
  });
});

// Ajouter l'événement pour le bouton recommencer
restartBtn.addEventListener("click", restartGame);

// Ajouter l'événement pour le bouton rejouer
playAgainBtn.addEventListener("click", restartGame);
