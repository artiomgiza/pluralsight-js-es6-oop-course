import { BaseElement } from "./base-element.js"

export class GoogleMap extends BaseElement {
    constructor(centerOfMap, data) {
        super();
        this.centerOfMap = centerOfMap;
        this.data = data;
    }

    createElement() {
        super.createElement();
        setTimeout(() => {

            let mapElem = document.getElementById('map');
            console.log(mapElem);

            var map = new window.google.maps.Map(mapElem, {
                zoom: 13,
                center: this.centerOfMap
            })

            for (let veihle of this.data) {
                let [lat, lng] = veihle.latlng.split(' ');
                let myLatLng = new window.google.maps.LatLng(lat, lng);

                let marker = new window.google.maps.Marker({
                    position: myLatLng,
                    map: map
                })

                marker.setMap(map)
            }
        }, 0)

    }


    getElementString() {
        return `<div id="map" style="width:100%; height: 400px;"></div>`;
        // return `<br>`;
    }

}