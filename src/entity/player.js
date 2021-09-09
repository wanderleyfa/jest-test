module.exports.player = (name) => {

    let Player = class Player {
        constructor(name) {
            this.name = name;
        }
    };

    return new Player(name);
}