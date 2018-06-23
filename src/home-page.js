import { Page } from './framework/page.js'
import { Image } from './ui/image.js'
import { Button } from './ui/button.js'
import { application } from './app.js'

export class HomePage extends Page {

    constructor() {
        super('Home');
    }

    createElement() {
        super.createElement();

        let i = new Image('../images/drone.jpg');
        i.appendToElement(this.element);

        let styleString = 'width: 200px; height: 60px; font-size:20px; margin:10px';
        let b = new Button('Hello?');
        b.setStyleString(styleString)
        b.appendToElement(this.element);
        b.element.click((() => { window.alert('Hello!') }))

    }

    getElementString() {
        return '<div style="text-align:center;"></div>';
    }
}