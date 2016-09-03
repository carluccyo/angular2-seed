import { Component } from '@angular/core';

const STYLES = require('!raw!less!./about.less');

@Component({
    selector: 'about',
    styleUrls: [STYLES],
    template: require('to-string!./about.html')
})
export class About {
}
