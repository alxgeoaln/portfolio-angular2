import {Component, HostBinding} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  title = 'app works!';

  getDepth(outlet) {
    console.log(outlet);
  }
}
