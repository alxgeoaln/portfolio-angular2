import {Component, HostBinding} from '@angular/core';
import {trigger, transition, group, style, animate, query} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2', [
        style({height: '!'}),
        query(':enter', style({ transform: ''}))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app works!';

  getDepth(outlet) {
    console.log(outlet);
  }
}
