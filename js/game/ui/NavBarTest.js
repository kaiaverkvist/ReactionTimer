class NavBarTest extends Phaser.GameObjects.DOMElement {
    constructor(scene, x, y) {    
        
        var navElement = document.createElement("NavBar");
        navElement.id = "Nav-Side";

        super(scene, x, y, navElement);

        
        this.autoHide = true;
        this.closed = true;
        this.openX = this.x;
        this.closeX = this.x - 88;

        this.setScrollFactor(0);

        this.setScrollFactor(0);
        this.setPosition(this.closeX, y);

        this.addListener('pointerover');
        this.addListener('pointerout')

        this.on('pointerover', () => {
            this.open();
        });

        this.on('pointerout', () => {
            this.close();
        });

        this.scene.add.existing(this);
    }

    addLink(title, icon) {
        var button = document.createElement("NavButton");

        var img = document.createElement("i");
        img.className = "fas " + icon;

        var label = document.createElement("NavLabel");
        label.innerText = title;

        button.appendChild(img);
        button.appendChild(label);
        
        this.node.appendChild(button);
    }

    open() {
        this.setPosition(this.openX, this.y);
    }

    close() {
        this.setPosition(this.closeX, this.y);
    }
}

export default NavBarTest;