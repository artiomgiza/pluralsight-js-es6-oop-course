import $ from 'jquery'
// import { Button } from './ui/button.js';
// import { Image } from './ui/image.js';
import { TitleBar } from './ui/title-bar.js';


let tb = new TitleBar('Our app')
tb.addLink('Home', '');
tb.addLink('Cars', '');
tb.addLink('Drones', '');
tb.addLink('Map', '');
tb.appendToElement($('body'))

// let i = new Image('../images/drone.jpg');
// i.appendToElement($('body'))