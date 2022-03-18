import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  slider,
  transformer,
  fader,
  stepper
} from './route-animated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    stepper,
    transformer,
    fader,
    slider
  ]
})

export class AppComponent {
  title = 'angular-firebase';

  constructor( ){

  }

  prepareRoute(outlet: RouterOutlet ){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {
  }

}
