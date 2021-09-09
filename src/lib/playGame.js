module.exports.playGame = (game) => {

    if (game.movePlayerOne === game.movePlayerTwo) {
        return "Empate";
    }

    if (game.movePlayerOne === "Pedra" && game.movePlayerTwo === "Tesoura") {
        return game.playerOne.name;
    }

    if (game.movePlayerOne === "Tesoura" && game.movePlayerTwo === "Papel") {
        return game.playerOne.name;
    }

    if (game.movePlayerOne === "Papel" && game.movePlayerTwo === "Pedra") {
        return game.playerOne.name;
    }

    return game.playerTwo.name;

}