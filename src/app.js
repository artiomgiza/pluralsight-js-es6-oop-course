import $ from 'jquery'
import { ApplicationBase } from './framework/application-base.js';
import { Cars } from './services/cars.js';
import { HomePage } from './home-page.js';
import { CarsPage } from './cars-page.js';
import { MapPage } from './map-page.js';



export class App extends ApplicationBase {
  constructor() {
    super('Fleet manager')
    this.cars = new Cars().cars();

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarsPage());
    this.addRoute('Map', new MapPage());

  }
}

export let application = new App();
application.show($('body'));

