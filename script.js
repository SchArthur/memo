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

