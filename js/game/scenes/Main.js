import GridTileSprite from '../entities/world/GridTileSprite.js';
import NavBarTest from '../ui/NavBarTest.js';
import InfoBox from '../ui/InfoBox.js';



class Main extends Phaser.Scene {
    preload() {
        gameEmitter.emit('preload', this);
        /* Preload required assets */

        this.load.image('background', 'assets/sprites/scroll_tile.png');
    }

    create() {
        this.scale.scaleMode = Phaser.ScaleModes.EXACT_FIT;;

        this.gameCamera = this.cameras.main;

        this.r_state = 0;

        // start of black screen:
        this.r_blackScreenStart;

        // last tap on the screen:
        this.r_lastTap = this.sys.game.loop.time;

        // Holds the waiter (ie. delayedCall) instance that varies in time.
        this.gameWaiter;

        
        this.systemInfo = new InfoBox(this, 10, 10, "Tap screen to start", "")

        this.grid = new GridTileSprite(this);

        this.input.on('pointerdown', (pointer) => {
            this.tap();
        });

        this.input.keyboard.on('keydown-SPACE', (event) => {
            this.tap();
        });
    }

    update(time, delta) {
        gameEmitter.emit('update', this);
    }

    render() {
        gameEmitter.emit('render', this);
    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * max) + 1000;
    }

    tap() {
        let currentTime = this.sys.game.loop.time;
        let tapDifference = currentTime - this.r_lastTap;
        if(tapDifference >= 100) {
            console.log(`tapped (${tapDifference} ms)`);
            this.r_lastTap = currentTime;

            // If we can safely proceed:
            this.proceedGame();
        }

    }

    proceedGame() {
        let currentTime = this.sys.game.loop.time;
        let currentState = this.r_state;

        switch(currentState) {
            case 0: { // Default, unstarted state
                // --> move to state 1
                this.r_state = 1;
                this.systemInfo.updateContent("Tap as soon as the screen becomes black!", "");
                // --> start the delayed call
                this.gameWaiter = this.time.delayedCall(this.randomNumber(2400, 7000), () => {
                    this.r_blackScreenStart = this.sys.game.loop.time;
                    this.r_state = 2;
                    this.grid.tint = 0x00000;
                    this.systemInfo.updateContent("Tap now!", "");
                }, [], this);
                break;
            }
            case 1: { // Started state: waiting for black screen
                break;
            }
            case 2: { // After black screen tap

                this.grid.tint = Math.random() * 0xffffff;

                let time = currentTime - this.r_blackScreenStart;
                console.log(time);
                this.systemInfo.updateContent("Your reaction time was: " + Math.round(time) + "ms", "");
                this.r_state = 3;

                break;
            }
            case 3: { // After tap screen: display results
                this.r_state = 0;
                this.systemInfo.updateContent("Tap screen to start", "");
                break;
            }
        }
    }

}

export default Main;
