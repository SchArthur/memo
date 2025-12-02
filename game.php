<?php

$game_width = 5; // Nombre de cartes par ligne
$game_height = 5; // Nombre de lignes de cartes

?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/style.css">
    <title>Mémo</title>
</head>

<body>
    <h1>Jeu de mémo !</h1>
    <div id="game">
        <?php for ($i = 0; $i < $game_height; $i++) : ?>
            <div class="row">
                <?php for ($j = 0; $j < $game_width; $j++) : ?>
                    <div class="card" data-row="<?= $i ?>" data-col="<?= $j ?>">
                        <div class="card-inner">
                            <div class="card-front">
                                <img src="/assets/images/card-back.png" alt="Carte">
                            </div>
                            <div class="card-back">
                                <img src="/assets/images/card-front.png" alt="Carte">
                            </div>
                        </div>
                    </div>
                <?php endfor; ?>
            </div>
        <?php endfor; ?>
    </div>
</body>

</html>