import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'dashboard',
    encapsulation: ViewEncapsulation.None,
    template: require('to-string!./dashboard.html')
})
export class Dashboard {

    constructor() {
    }

}
