import Main from './scenes/Main.js';

class Alphaside extends Phaser.Game {
    constructor() {

        super(config);

    }
}

var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        width: '100%',
        height: '100%'
    },
    parent: "game",
    dom: {
        createContainer: true
    },
    physics: {
        default: "arcade",
        arcade: {
            fps: 60,
            gravity: { y: 1200 }
        }
    },
    pixelArt: true,
    scene: [ Main ],
    backgroundColor: BACKGROUND_COLOR,
    roundPixels: false,
    clearBeforeRender: true,
}

var game = new Alphaside(config);
window.game = game;