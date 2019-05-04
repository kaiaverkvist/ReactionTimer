class GridTileSprite extends Phaser.GameObjects.TileSprite {
    constructor(scene) {
        // Container objects
        super(scene, 0, 0, window.innerWidth, window.innerHeight, 'background');

        scene.add.existing(this);

        this.setOrigin(0);
        this.setAlpha(1);
        this.setTileScale(1, 1);
        this.setScrollFactor(0);
        this.tint = Math.random() * 0xffffff;

    }

    preUpdate() {
        this.tilePositionX += GRID_MOVEMENT_RATIO * .5;
        this.tilePositionY += GRID_MOVEMENT_RATIO * .2;
    }
}

export default GridTileSprite;