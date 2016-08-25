import {Component} from '@angular/core';


const STYLES  = require('!raw!less!./home.less');

@Component({
  selector: 'home',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: [STYLES],
  template: require('to-string!./home.html')
})
export class Home {
}
