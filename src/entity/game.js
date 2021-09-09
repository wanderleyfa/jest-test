module.exports.game = (playerOne, playerTwo, movePlayerOne, movePlayerTwo) => {

    let Game = class Game {
        constructor(playerOne, playerTwo, movePlayerOne, movePlayerTwo) {
            this.playerOne = playerOne;
            this.playerTwo = playerTwo;
            this.movePlayerOne = movePlayerOne;
            this.movePlayerTwo = movePlayerTwo;
        }
    };

    return new Game(playerOne, playerTwo, movePlayerOne, movePlayerTwo);
}