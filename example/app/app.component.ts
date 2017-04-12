import { Component } from '@angular/core';

declare var require: any;

@Component({
  selector: 'supre-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  isActive = false;

  handleToggle (event) {
    this.isActive = event;
  }
}
