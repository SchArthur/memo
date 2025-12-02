# 🧠 Jeu de Mémo (Memory Game)

![Statut du projet](https://img.shields.io/badge/Status-En_Développement-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Un petit jeu de mémoire classique développé pour s'entraîner aux interactions DOM et à la logique algorithmique. Le but est simple : retrouver toutes les paires d'émojis le plus vite possible !

## 🚀 Fonctionnalités actuelles

* **Génération dynamique (PHP) :** La grille de jeu est construite côté serveur via des boucles PHP, permettant de changer la taille du jeu facilement.
* **Contenu aléatoire (JS) :** Injection et mélange d'émojis via JavaScript au chargement.
* **Statistiques en temps réel :** Compteur de temps (chronomètre) et compteur de coups joués.
* **Interface utilisateur :**

  * Animations de retournement de cartes (Flip 3D CSS).

  * Modale de victoire ("Pop-up") affichant le score final.
* **Responsive :** La grille s'adapte aux écrans.

## 🛠️ Stack Technique

Ce projet utilise une stack web native sans framework lourd :

* **HTML5 :** Structure sémantique.
* **CSS3 :** Utilisation de variables, Flexbox et `transform` pour les effets 3D.
* **JavaScript (Vanilla) :** Logique du jeu (Mélange, distribution, vérification des paires, timer).
* **PHP :** Génération du markup HTML de la grille (boucles `for`).

## 📦 Installation et Lancement

Puisque ce projet utilise du **PHP** pour générer la grille, il nécessite un serveur local.

## 📸 Aperçu

![1764690229755](image/README/1764690229755.png)

![1764690312777](image/README/1764690312777.png)

## 🔜 Améliorations futures (To-Do)

* [ ] **Sauvegarde des scores :** Connecter une base de données MySQL pour enregistrer les meilleurs temps (Leaderboard).
* [ ] **Niveaux de difficulté :** Créer un menu pour choisir la taille de la grille (Modifier les variables PHP `$game_width` / `$game_height`).
* [ ] **Audio :** Ajouter des bruitages pour les paires trouvées et la victoire.

---

**Fait avec ❤️✨🐛 par Arthur Schmitt et Selim Sutcu*
