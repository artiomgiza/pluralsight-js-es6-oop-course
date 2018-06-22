import $ from 'jquery'

export class BaseElement {
    constructor() {
        this.element = null; // jQuery object
    }

    appendToElement(elem) {
        this.createElement();
        elem.append(this.element);
        // this.enableJS() // <-- this throws error if element is not button :/
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw 'please override getElementString() method';
    }

    enableJS() {
        componentHandler.upgradeElement(this.element[0]);
    }
}