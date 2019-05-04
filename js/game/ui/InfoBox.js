class InfoBox extends Phaser.GameObjects.DOMElement {
    constructor(scene, x, y, title, content) {    
        
        var mainElement = document.createElement("InfoBox");
        mainElement.id = "InfoBox_";

        super(scene, x, y, mainElement);

        this.titleElement = document.createElement("InfoBoxTitle");
        this.titleElement.innerText = title;

        mainElement.appendChild(this.titleElement);

        this.contentElement = document.createElement("InfoBoxContent");
        this.contentElement.innerText = content;

        mainElement.appendChild(this.contentElement);


        this.infoBoxElement = mainElement;

        this.setScrollFactor(0);
        this.setScrollFactor(0);

        this.scene.add.existing(this);
    }

    updateContent(title, content) {
        this.titleElement.innerHTML = title;
        this.contentElement.innerHTML = content;
    }
}

export default InfoBox;