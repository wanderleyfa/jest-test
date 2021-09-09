const {player} = require('../entity/player');
const {game} = require('../entity/game');
const {playGame} =require('./playGame')


it('testa o empate ', () => {
    let _game = game(player('Felipe'),player('Zero'), "Pedra", "Pedra");
    let _playGame = playGame(_game);
    expect(_playGame).toBe('Empate');
});

it('Pedra ganha ', () => {
    let _game = game(player('Felipe'),player('Zero'), "Pedra", "Tesoura");
    let _playGame = playGame(_game);
    expect(_playGame).toBe('Felipe');
});

it('Tesoura Ganha ', () => {
    let _game = game(player('Felipe'),player('Zero'), "Tesoura", "Papel");
    let _playGame = playGame(_game);
    expect(_playGame).toBe('Felipe');
});

it('Papel ganha ', () => {
    let _game = game(player('Felipe'),player('Zero'), "Pedra", "Papel");
    let _playGame = playGame(_game);
    expect(_playGame).toBe('Zero');
});

it('Tesoura perde ', () => {
    let _game = game(player('Felipe'),player('Zero'), "Tesoura", "Pedra");
    let _playGame = playGame(_game);
    expect(_playGame).toBe('Zero');
});
