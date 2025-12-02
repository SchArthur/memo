<?php

$game_width = 5; // Nombre de cartes par ligne
$game_height = 6; // Nombre de lignes de cartes

?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap" rel="stylesheet">
    <title>Super Mémo PHP</title>
</head>

<body>
    <header>
        <h1>🧠 Super Mémo</h1>
        <p>Retrouvez toutes les paires le plus vite possible !</p>
    </header>

    <section class="game-stats">
        <div class="stat-box">
            <span class="label">Temps</span>
            <span class="value" id="timer">00:00</span>
        </div>

        <div class="stat-box">
            <span class="label">Coups</span>
            <span class="value" id="moves">0</span>
        </div>

        <button id="restart-btn" class="btn-restart">🔄 Recommencer</button>
    </section>
    <div id="game">
        <?php for ($i = 0; $i < $game_height; $i++): ?>
            <div class="row">
                <?php for ($j = 0; $j < $game_width; $j++): ?>
                    <div class="card" data-row="<?= $i ?>" data-col="<?= $j ?>" id="card-<?= $i ?>-<?= $j ?>">
                        <label for="checkbox-<?= $i ?>-<?= $j ?>" class="card-inner">
                            <div class="card-front">
                            </div>
                            <div class="card-back">
                            </div>
                        </label>
                        <input type="checkbox" id="checkbox-<?= $i ?>-<?= $j ?>" class="card-checkbox" />
                    </div>
                <?php endfor; ?>
            </div>
        <?php endfor; ?>
        <div>
            <p id="score">
                score :
            </p>
        </div>
    </div>
    <div id="victory-modal" class="modal">
        <div class="modal-content">
            <h2>🎉 Bravo ! 🎉</h2>
            <p>Tu as gagné en <span id="final-time"></span> et <span id="final-moves"></span> coups.</p>
            <button id="play-again-btn">Rejouer</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>