import {Component} from '@angular/core';

const STYLES  = require('!raw!less!./about.less');

@Component({
  selector: 'about',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: [STYLES],
  templateUrl: require('to-string!./about.html')
})
export class About {
}
