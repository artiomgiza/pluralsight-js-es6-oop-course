import { Page } from './framework/page.js'
import { GoogleMap } from './ui/google-map.js'
import { application } from './app.js'

export class MapPage extends Page {

    constructor() {
        super('Map');
    }

    createElement() {
        super.createElement();
        let com = { lat: 40.78366, lng: -73.96588 }
        let map = new GoogleMap(com, application.cars);
        map.appendToElement(this.element)
    }

    getElementString() {
        return `
        <div style="margin:20px;">
            <h3>map</h3>
        </div>`;
    }
}