import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'pages',
  template: `
  <router-outlet></router-outlet>
  `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
