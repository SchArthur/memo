# 🧠 Jeu de Mémo (Memory Game)

![Statut du projet](https://img.shields.io/badge/Status-En_Développement-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)

Un petit jeu de mémoire classique développé pour s'entraîner à la manipulation du DOM et aux interactions Client/Serveur. Le but est simple : retrouver toutes les paires de cartes le plus vite possible !

## 🚀 Fonctionnalités

* **Gameplay fluide :** Animations de retournement de cartes en CSS pur.
* **Logique de jeu (JS) :** Mélange aléatoire des cartes, gestion des paires et du chronomètre.
* **Classement (PHP) :** Système léger de sauvegarde des meilleurs scores (Leaderboard) via PHP.
* **Responsive :** Jouable sur ordinateur et mobile.

## 🛠️ Stack Technique

Ce projet utilise une stack web native sans framework lourd :

* **HTML5 :** Structure sémantique de la grille de jeu.
* **CSS3 :** Utilisation de **Grid** et **Flexbox** pour la mise en page, et `transform` pour les effets 3D.
* **JavaScript (Vanilla) :** Gestion des événements (clics) et de la logique de victoire.
* **PHP :** Traitement du formulaire de fin de partie pour enregistrer le score/pseudo.

## 📦 Installation et Lancement

Puisque ce projet utilise du **PHP**, il ne suffit pas d'ouvrir le fichier `.html`. Il faut un serveur local.

   **Cloner le projet :**

    ```bash
    git clone [https://github.com/TON_PSEUDO/ton-repo-memo.git](https://github.com/TON_PSEUDO/ton-repo-memo.git)
    ```
   **Lancer le serveur :**

    * Placez le dossier dans votre dossier `www` (WAMP) ou `htdocs` (XAMPP/MAMP).
    * Ou lancez un serveur PHP rapide en ligne de commande dans le dossier du projet :
    ```bash
    php -S localhost:8000
    ```

   **Jouer :**
    * Ouvrez votre navigateur sur `http://localhost:8000`.

## 📸 Aperçu

*(Ici, tu pourras ajouter une capture d'écran de ton jeu plus tard : `![Capture du jeu](./screenshot.png)`) - Supprime cette ligne si tu n'as pas d'image pour l'instant.*

## 🔜 Améliorations futures

* [ ] Ajouter des niveaux de difficulté (plus de cartes).
* [ ] Ajouter des sons (bruitage quand on retourne une carte).
* [ ] Stocker les scores dans une base de données MySQL (actuellement fichier texte/session).

---
*Fait avec ❤️ par [Ton Nom]*
